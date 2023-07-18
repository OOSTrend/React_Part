// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import LineChart from "components/charts/LineChart";
//import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { MdBarChart, MdOutlineCalendarToday } from "react-icons/md";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";
import {
  lineChartDataTotalSpent,
  lineChartOptionsTotalSpent,
  lineChartDataTotalTraffic,
  lineChartOptionsTotalTraffic,
  lineChartDataCategory,
} from "variables/charts";
import React, { useState } from "react";
import {Select} from "@chakra-ui/react";

export default function TotalTraffic(props) {
  const { ...rest } = props;

  // Chakra Color Mode

  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = useColorModeValue("secondaryGray.600", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" }
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" }
  );
  //
  const CategoryArr = {
    "가구/인테리어": [
      {
        name: "ClickRate",
        data: [250, 90, 400, 123,487,798]
      }
    ],
    "도서": [
      {
        name: "ClickRate",
        data: [250, 310, 400, 211, 98, 364]
      }
    ],
    "디지털/가전": [
      {
        name: "ClickRate",
        data: [70, 90, 360, 210, 41, 71]
      }
    ],
    "생활/건강": [
      {
        name: "ClickRate",
        data: [500, 240, 100, 51, 23, 602]
      }
    ]
  };
  //
  const [selectedValue, setSelectedValue] = useState("");
  const handleChange = (event) => {
    const selectedCategory = event.target.value;
    // console.log("selectedCategory의 값(set함수 전) :",selectedCategory) 렌더링 전이라서 안된다고 함.
    setSelectedValue(selectedCategory);
    console.log("selectedCategory의 값(set함수 후) :",selectedCategory)

    if (CategoryArr[selectedCategory]) {
      const newData = CategoryArr[selectedCategory][0].data;
      const updatedChartData = lineChartDataTotalTraffic.map((data) => ({
        ...data,
        data: newData,

      }));
      console.log("newData:",newData)
      console.log("updatedChartData:",updatedChartData)

      // 업데이트된 데이터로 lineChartDataTotalTraffic를 업데이트
      console.log("0초기화 전 lineChartDataTotalTraffic:",lineChartDataTotalTraffic)
      lineChartDataTotalTraffic.length = 0;
      console.log("0초기화 후 lineChartDataTotalTraffic:",lineChartDataTotalTraffic)
      Array.prototype.push.apply(lineChartDataTotalTraffic, updatedChartData);
      console.log("apply 적용 후 lineChartDataTotalTraffic:",lineChartDataTotalTraffic)
    }
  };
  //
  return (
    <Card
      justifyContent='center'
      align='center'
      direction='column'
      w='100%'
      mb='0px'
      {...rest}>
      <Flex justify='space-between' ps='0px' pe='20px' pt='5px'>
        <Flex align='center' w='100%'>
          {/* <Button
            bg={boxBg}
            fontSize='sm'
            fontWeight='500'
            color={textColorSecondary}
            borderRadius='7px'>
            <Icon
              as={MdOutlineCalendarToday}
              color={textColorSecondary}
              me='4px'
            />
            This month
          </Button> */}
          <Select placeholder="카테고리 선택" size="lg" onChange={handleChange} value={selectedValue}
            bg={boxBg}
            fontSize = 'sm'
            fontWeight ='500'
            color={textColorSecondary}
            defaultValue='카테고리선택'>
            <option value="카테고리선택">카테고리선택</option> 
            <option value="가구/인테리어">가구/인테리어</option>
            <option value="도서">도서</option>
            <option value="디지털/가전">디지털/가전</option>
            <option value="생활/건강">생활/건강</option>
            <option value="스포츠/레저">스포츠/레저</option>
            <option value="식품">식품</option>
            <option value="출산/육아">출산/육아</option>
            <option value="패션의류">패션의류</option>
            <option value="패션잡화">패션잡화</option>
            <option value="화장품/미용">화장품/미용</option>
          </Select>
          {/* <Button
            ms='auto'
            align='center'
            justifyContent='center'
            bg={bgButton}
            _hover={bgHover}
            _focus={bgFocus}
            _active={bgFocus}
            w='37px'
            h='37px'
            lineHeight='100%'
            borderRadius='10px'
            {...rest}>
            <Icon as={MdBarChart} color={iconColor} w='24px' h='24px' />
          </Button> */}
        </Flex>
      </Flex>
      <Flex w='100%' flexDirection={{ base: "column", lg: "row" }}>
        <Flex flexDirection='column' me='20px' mt='28px'>
          <Text
            color={textColor}
            fontSize='34px'
            textAlign='start'
            fontWeight='700'
            lineHeight='100%'>
            클릭율
          </Text>
          <Flex align='center' mb='20px'>
            <Text
              color='secondaryGray.600'
              fontSize='sm'
              fontWeight='500'
              mt='4px'
              me='12px'>
              Total Traffic
            </Text>
            <Flex align='center'>
              <Icon as={RiArrowUpSFill} color='green.500' me='2px' mt='2px' />
              <Text color='green.500' fontSize='sm' fontWeight='700'>
                +12.45%
              </Text>
            </Flex>
          </Flex>

          <Flex align='center'>
            <Icon as={IoCheckmarkCircle} color='green.500' me='4px' />
            <Text color='green.500' fontSize='md' fontWeight='700'>
              On track
            </Text>
          </Flex>
        </Flex>
        <Box minH='260px' minW='75%' mt='auto'>
          <LineChart
            chartData={lineChartDataTotalTraffic}
            //chartData = {lineChartDataCategory}
            chartOptions={lineChartOptionsTotalTraffic}
          />
        </Box>
      </Flex>
    </Card>
  );
}
