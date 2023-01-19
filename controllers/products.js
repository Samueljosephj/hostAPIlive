const Product = require("../models/product");

const getAllProducts = async (req, res) => {
  const myData = await Product.find(req.query);
  res.status(200).json({ myData });

};


// getAllProductsTesting


const getAllProductsTesting = async (req, res) => {
  const {company, name, featured,id, sort} = req.query;
  const queryObject = {};

if (company) {

  queryObject.company = company;
  console.log(queryObject.company)
}


if (featured){
  queryObject.featured = featured;
}


  if (id){
    queryObject.id = id;

    }



if (name) {
  queryObject.name = {$regex: name, $options: "i"};
}


let apiData = Product.find(queryObject);

if(sort){
  let sortFix = sort.replace(","," ");
  apiData = apiData.sort(sortFix);

}



  console.log(queryObject);

  const myData = await apiData ;

  res.status(200).json({  myData  });
};

module.exports = {  getAllProducts, getAllProductsTesting };
