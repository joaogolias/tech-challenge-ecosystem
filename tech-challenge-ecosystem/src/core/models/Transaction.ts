import { Card } from './Card';

export class Transaction {
  constructor(
    public merchantId: number,
    public description: string,
    // TODO: Use an ENUM
    public paymentMethod: string,
    public card: Card,
  ) {}
}
