import ProtectionRouter from "../../Auth/ProtectionRouter";

interface LayoutProps {
  // title: string;
  // subTitle: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  return <ProtectionRouter>{props.children}</ProtectionRouter>;
}
