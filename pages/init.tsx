export const HomeRedirect = () => {
  if (typeof window !== "undefined") {
    window.location.replace("/introduction");
  }
};
