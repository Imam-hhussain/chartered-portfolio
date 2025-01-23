import { useState, useEffect } from "react";
import axios from "axios";
import { setBlogss } from "../redux/reducers/blogSlice";
import { useDispatch } from "react-redux";


export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const dispatch = useDispatch();

  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:8000";

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/v1/blogs`);
      setBlogs(response.data.blogs);
      dispatch(setBlogss(response.data.blogs));
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return { blogs, loading, error, refetch: fetchBlogs };
};


