/**
 * @swagger
 * 
 * /pro/createProduct:
 *  post:
 *     summary: get ejs-page for create products
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/x-www-form-urlencoded:
 *          schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - description
 *               - count
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               count:
 *                 type: number
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *               - description
 *               - count
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               count:
 *                 type: number
 *     responses:
 *       200:
 *         description: Successful creation of product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 * /pro/getcreateProduct:
 *  get:
 *     summary: get ejs-page for create products
 *     tags: 
 *       - Products
 *     responses:
 *       200:
 *         description: Successful creation of product         
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 * 
 * /pro/products/name/eq/{name}:
 *   get:
 *     summary: serch on name db EQ
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: serch of product by name
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 * 
 * 
 * /pro/products/name/ne/{name}:
 *   get:
 *     summary: serch on name db NE
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: serch of product by name
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 * 
 * /pro/products/price/gt/{price}:
 *   get:
 *     summary: serch on price db GT
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: price
 *         required: true
 *         schema:
 *           type: string
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - price
 *             properties:
 *               price:
 *                 type: string
 *     responses:
 *       200:
 *         description: serch of product by price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error 
 *
 * /pro/products/price/lt/{price}:
 *   get:
 *     summary: serch on price db LT
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: price
 *         required: true
 *         schema:
 *           type: string
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - price
 *             properties:
 *               price:
 *                 type: string
 *     responses:
 *       200:
 *         description: serch of product by price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error 
 * 
 * /pro/products/price/ne/{price}:
 *   get:
 *     summary: serch on price db NE
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: price
 *         required: true
 *         schema:
 *           type: string
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - price
 *             properties:
 *               price:
 *                 type: string
 *     responses:
 *       200:
 *         description: serch of product by price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 * 
 * /pro/products/price/eq/{price}:
 *   get:
 *     summary: serch on price db EQ
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: price
 *         required: true
 *         schema:
 *           type: string
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - price
 *             properties:
 *               price:
 *                 type: string
 *     responses:
 *       200:
 *         description: serch of product by price
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                 user:
 *                   type: object
 *       400:
 *         description: Invalid credentials
 *       500:
 *         description: Server error
 *
 * 
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         name:
 *           type: string
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         count:
 *           type: number
 *
 * 
 *
 * 
 * 
 * 
 */