import express from 'express';
import InvoiceServiceImpl from './InvoiceServiceImpl';
const app = express();

app.get('/cards/:cardNumber/invoices', async function (req, res) {
  const invoiceService = new InvoiceServiceImpl();
  const total = await invoiceService.calculateInvoice(req.params.cardNumber);
  res.json({
    total
  });
});

app.listen(3001);
