import Mock from "mockjs";

Mock.setup({
  // 延迟时间200毫秒
  timeout: 200,
});

Mock.mock("/api/role", "get", () => {
  return { userType: "admin" };
});
