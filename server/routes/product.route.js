const express=require("express");
const productRouter=express.Router();
const Product=require("../models/product.model.js");
productRouter.post("/add-product",async(req,res)=>{
 try{
const newProduct=new Product(req.body);
await newProduct.save();
return res.status(201).json({
 success:true,
 message:"Product added successfully",
 product:newProduct
})
 }
 catch(error){
 return res.status(500).json({
 success:false,
 message:"Error adding product",
 error:error.message
 })
 }
})
productRouter.get("/getAllProducts",async(req,res)=>{
 try{
  const products=await Product.find();
  return res.status(200).json({
   success:true,
   message:"Products fetched successfully",
   products:products
  })
 }catch(error){
return res.status(500).json({
 success:false,
 message:"Error fetching products",
 error:error.message
 })
 }
})
productRouter.put("/update-product/:id",async(req,res)=>{
try {
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true },
  );

  if (!updatedProduct) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Product updated successfully",
    product: updatedProduct,
  });
} catch (error) {
  res.status(500).json({
    success: false,
    message: error.message,
  });
}
})
productRouter.delete("/delete-product/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
productRouter.get("/search/:key",async(req,res)=>{
  try {
    const key = req.params.key;

    const result = await Product.find({
      $or: [
        { name: { $regex: key, $options: "i" } },
        { description: { $regex: key, $options: "i" } },
        { category: { $regex: key, $options: "i" } },
        { brand: { $regex: key, $options: "i" } },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      products: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error searching products",
      error: error.message,
    });
  }
})
module.exports=productRouter;