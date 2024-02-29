import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import { APP_URL } from '../config';

const productSchema = new Schema(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        company: { type: String, required: true },
        colors: { type: Array, required: true },
        stock: { type: String, required: true },
        image: {
            type: String,
            required: true,
            get: (image) => {
                // http://localhost:5000/uploads/1616443169266-52350494.png
                if (process.env.ON_HEROKU == 'true') {
                    return `${image}`;
                }
                return `${APP_URL}/${image}`;
            },
        },
        description: { type: String, required: true },
        category: { type: String, required: true },
        featured: { type: Boolean, default: true },
        shipping: { type: Boolean, default: true },
    },
    { timestamps: true, toJSON: { getters: true }, id: false }
);

export default mongoose.model('Product', productSchema, 'products');
