import { FC } from "react";

type Props = {
  color: string;
  fontSize: string;
}

export const Text: FC<Props> = (props: Props) => {
  const { color, fontSize } = props;
  return <p style={{ color, fontSize }}>テキストです</p>
}