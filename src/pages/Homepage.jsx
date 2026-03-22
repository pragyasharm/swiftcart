import { useInfiniteQuery } from "@tanstack/react-query";
import React, { useEffect, useRef, useState } from "react";
import { getProducts } from "../services/productsApi";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";

const Homepage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const observerRef = useRef();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    getNextPageParam: (lastPage, allPages) => {
      const total = lastPage.total;
      const loaded = allPages.length * 10;

      return loaded < total ? loaded : undefined;
    },
  });

  // Flatten pages
  const products =
    data?.pages.flatMap((page) => page.products) || [];

  // Modal scroll lock
  useEffect(() => {
    document.body.style.overflow = selectedProduct ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProduct]);

  // Infinite Scroll Logic
  useEffect(() => {
    if (!hasNextPage || isFetchingNextPage) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  // Loading states
  if (status === "pending") return <h2>Loading...</h2>;
  if (status === "error") return <h2>Error loading products</h2>;

  return (
    <div className="container mt-4">
      <h2>Available Products</h2>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <div className="row">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            data={p}
            onClick={() => setSelectedProduct(p)}
          />
        ))}
      </div>

      {/* Observer Trigger */}
      <div ref={observerRef} style={{ height: "20px" }} />

      {/* Loader */}
      {isFetchingNextPage && <p>Loading more...</p>}
    </div>
  );
};

export default Homepage;