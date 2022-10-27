import React from "react";
import { render, screen } from "@testing-library/react";
import AuthButton from "@/components/AuthButton";

describe("AuthButton Mock Http 请求", () => {
  it("可以正确展示普通用户按钮内容", async () => {
    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("普通用户你好")).toBeInTheDocument();
  });
});
