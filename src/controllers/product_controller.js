import { getConnection } from "./../database/database";


const getProducts= async(req, res)=>{
    try{
    const connection = await getConnection();
    const result = await connection.query("SELECT id, nombre, precio, stock FROM producto");
    console.log(result);
    res.json(result);
    }catch(error){
      res.status(500);
      res.send(error.message);
    }
};

const getProduct= async(req, res)=>{
  try{
  console.log(req.params);
  const { id } = req.params;
  const connection = await getConnection();
  const result = await connection.query("SELECT id, nombre, precio, stock FROM producto WHERE id = ?", id);
  console.log(result);
  res.json(result);
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
};

const addProduct= async(req, res)=>{
  try{
    const {nombre, precio,stock}=req.body;
    if(nombre===undefined || precio===undefined || stock===undefined){
      res.status(400).json({message:"Bad request. Por favor llena todos los campos"});
    }
    const producto = {
      nombre, precio, stock
    };
    const connection = await getConnection();
    const result=await connection.query("INSERT INTO producto SET ?", producto);
    res.json({message: "Producto Agregado"});
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
};

const updateProduct= async(req, res)=>{
  try{  
  const { id } = req.params;
  const {nombre, precio,stock}=req.body;
  if(id === undefined || nombre===undefined || precio===undefined || stock===undefined){
    res.status(400).json({message:"Bad request. Por favor llena todos los campos"});
  }
  const producto = {nombre, precio, stock};
  const connection = await getConnection();
  const result = await connection.query("UPDATE producto SET ? WHERE id = ?", [producto, id]);
  console.log(result);
  res.json(result);
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
};

const deleteProduct= async(req, res)=>{
  try{
  console.log(req.params);
  const { id } = req.params;
  const connection = await getConnection();
  const result = await connection.query("DELETE FROM producto WHERE id = ?", id);
  console.log(result);
  res.json(result);
  }catch(error){
    res.status(500);
    res.send(error.message);
  }
};

export const methods = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct
};