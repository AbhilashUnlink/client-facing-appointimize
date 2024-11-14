import React from "react";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { Flex, Rate } from "antd";

const customIcons: Record<number, React.ReactNode> = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const ReviewComponent: React.FC = () => (
  <Flex gap="middle" vertical>
    <Rate
    allowHalf
      defaultValue={4.5}
      character={({ index = 0 }) => customIcons[index + 1]}
    />
  </Flex>
);

export default ReviewComponent;