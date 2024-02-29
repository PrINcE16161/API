import Joi from 'joi';

const productSchema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    stock: Joi.string().required(),
    image: Joi.string(),
    company: Joi.string().required(),
    colors: Joi.array(),
    description: Joi.string().required(),
    category: Joi.string().required(),
    featured: Joi.boolean(),
    shipping: Joi.boolean(),
});

export default productSchema;