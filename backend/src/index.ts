import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middlewares
app.use(helmet());
app.use(cors());

// Stripe Webhooks need raw body, so we conditionally apply express.json()
app.use('/api/payments/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

// Init Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16' as any,
});

// ==== MICROSERVICES ROUTES SKELETON ====

// 1. Auth Service
app.post('/api/auth/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

// 2. Wallet / Ledger Service (Append-Only)
app.get('/api/wallet/balance', (req, res) => {
  res.json({ balance: 5.93 });
});

// 3. Game Service
app.post('/api/game/spin', (req, res) => {
  // Logic to execute server-side RNG here to prevent client manipulation
  res.json({ win: true, amount: 50.0 });
});

// 4. Payments Service (Stripe Integration for pdbjork@gmail.com)
app.post('/api/payments/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: { name: '100 Gold Coins' },
            unit_amount: 1000, // $10.00
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/?deposit=success',
      cancel_url: 'http://localhost:3000/?deposit=cancel',
      customer_email: 'pdbjork@gmail.com', // Pre-fill for user
    });
    res.json({ id: session.id, url: session.url });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// 5. Admin / Risk Tools
app.get('/api/admin/flagged-users', (req, res) => {
  res.json({ flagged: [] });
});

// 6. Analytics
app.post('/api/analytics/track', (req, res) => {
  res.json({ success: true });
});

// 7. Responsible Gaming
app.post('/api/rg/set-limit', (req, res) => {
  res.json({ message: 'Deposit limit updated' });
});

// Health check
app.get('/health', (req, res) => res.send('OK'));

app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
});
