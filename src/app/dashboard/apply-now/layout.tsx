import { TdiFormProvider } from "@/contexts/tdi-form-context";

const layout = ({ children }: { children: React.ReactNode }) => {
  return <TdiFormProvider>{children}</TdiFormProvider>;
};

export default layout;