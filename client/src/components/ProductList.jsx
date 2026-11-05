import React, { useEffect } from "react";
import { Table,Space,Button,Popconfirm,Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { getProducts,deleteProduct,searchProducts } from "../calls/productCalls.js"

function ProductList() {
 const[products,setProducts]=React.useState([]);
 const [searchText, setSearchText] = React.useState("");
  const navigate = useNavigate();
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img
          src={image}
          alt="Product"
          style={{
            width: "70px",
            height: "70px",
            objectFit: "contain",
            borderRadius: "5px",
          }}
        />
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>

          <Popconfirm
            title="Are you sure you want to delete this student?"
            onConfirm={() => handleDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    let ignore = false;

    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();

        if (!ignore) {
          setProducts(productsData);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();

    return () => {
      ignore = true;
    };
  }, []);
  const handleEdit = (record) => {
    console.log(record, "edit ");
    navigate("/update-product", {
      state: record,
    });
  };

  const handleDelete = async(id) => {
    try{
     await deleteProduct(id);
     const productsData = await getProducts();
     setProducts(productsData);

     

    }catch(error){
    console.log(error);

    }
  };
  const handleSearch = async (value) => {
    setSearchText(value);

    try {
      if (value.trim() === "") {
        const productsData = await getProducts();
        setProducts(productsData);
      } else {
        const searchData = await searchProducts(value);
        setProducts(searchData);
      }
    } catch (error) {
      console.log("Error searching products:", error);
    }
   }
  return (
    <div className="page">
      <div className="page-hero">
        <div>
          <h1>Product Dashboard</h1>
          <p>Review, update, and keep every product record in one place.</p>
        </div>
        <Button
          type="primary"
          size="large"
          onClick={() => navigate("/add-product")}
        >
          Add Product
        </Button>
      </div>
      <div className="table-card">
        <Input
          placeholder="Search by product name, brand or category..."
          allowClear
          value={searchText}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            width: 350,
            marginBottom: 20,
          }}
        />
        <Table
          dataSource={products}
          columns={columns}
          rowKey={(record) => record._id || record.email}
          pagination={{ pageSize: 8 }}
          scroll={{ x: 760 }}
        />
      </div>
    </div>
  );
}

export default ProductList