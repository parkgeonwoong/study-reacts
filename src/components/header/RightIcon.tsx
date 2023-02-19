/**
 * @desc : 우측 레이아웃
 */

import { motion, useAnimation } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Col } from "../Header";

interface IForm {
  keyword: string;
}

export const RightIcon = () => {
  // TODO: Search 상태 && 애니메이션
  const [searchOpen, setSearchOpen] = useState(false);
  const inputAnimation = useAnimation();
  const toggleSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
        opacity: 0,
      });
    } else {
      inputAnimation.start({ scaleX: 1, opacity: 1 });
    }
    setSearchOpen((prev) => !prev);
  };

  // TODO: Search Form
  const { register, handleSubmit } = useForm<IForm>();
  const navigate = useNavigate();
  const onValid = (data: IForm) => {
    navigate(`/search?keyword=${data.keyword}`);
  };

  return (
    <Col>
      <Search onSubmit={handleSubmit(onValid)}>
        <motion.svg
          onClick={toggleSearch}
          animate={{ x: searchOpen ? -180 : 0 }}
          whileHover={{ scale: 1.2, transition: { type: "spring" } }}
          transition={{ type: "linear" }}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </motion.svg>

        <Input
          {...register("keyword", { required: true, minLength: 2 })}
          animate={inputAnimation}
          initial={{ scaleX: 0 }}
          transition={{ type: "linear" }}
          placeholder="Search Movie and Tv"
        />
      </Search>
    </Col>
  );
};

const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    cursor: pointer;
    height: 25px;
  }
`;

const Input = styled(motion.input)`
  transform-origin: right center;
  position: absolute;
  left: -150px;
  padding: 5px 10px;
  border: none;
  border-radius: 10px;
`;
