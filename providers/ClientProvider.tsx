"use client";

type TProps = {
  children: React.ReactNode;
};

const ClientProvider = ({ children }: TProps) => {
  return <>{children}</>;
};

export default ClientProvider;
