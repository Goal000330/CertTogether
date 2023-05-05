/* eslint-disable tailwindcss/classnames-order */
// eslint-disable-next-line tailwindcss/classnames-order
"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import AliceCarousel from "react-alice-carousel"

import { Button } from "@/components/ui/button"

import { question_data } from "../config/mockupData"

const responsive1 = {
  0: {
    items: 1,
  },
  550: {
    items: 1,
  },
  780: {
    items: 3,
  },
  1024: {
    items: 3,
  },
}

export function CGuide() {
  const [questionData, setQuestionData] = useState<any>([])
  useEffect(() => {
    setQuestionData(question_data)
  }, [])
  return (
    <>
      <div className="relative">
        <div className="z-20 absolute w-full flex justify-center top-[-25px] sm:relative sm:top-[0px] xs:relative xs:top-[0px] ">
          <Button className=" bg-[#679696] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-l-[5px] rounded-r-[0px] p-[20px] pb-[22px] text-white h-[61px] font-normal text-[18px] leading-6 sm:w-full xs:w-full">
            Overview
          </Button>
          <Button className=" bg-gradient-to-b from-gray-700 to-gray-900 rounded-[0px] p-[20px] pb-[22px] text-white h-[61px] font-normal text-[18px] leading-6 sm:w-full xs:w-full">
            Questions
          </Button>
          <Button className=" bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-[0px] rounded-r-[5px] p-[20px] pb-[22px] text-white h-[61px] font-normal text-[18px] leading-6 sm:w-full xs:w-full">
            Quiz
          </Button>
        </div>
        <div className=" relative min-h-[300px] w-full bg-[#679696] px-[78px] pb-[30px] pt-[57px] xs:px-[16px] xs:pt-[20px] sm:px-[16px] sm:pt-[20px] md:px-[34px] sm:pb-[50px] xs:pb-[50px]">
          <div className="c-guideCatagoryContainer mb-[27px] flex items-center justify-center">
            <span
              // className="c-categoryTxt"
              className="font-Gelasio cursor-pointer text-[16px] font-normal italic leading-[20px] text-[#fffdcf] hover:opacity-80"
            >
              Overview
            </span>
            <div className="divideLine"></div>
            <span
              // className="c-categoryTxt"
              className="font-Gelasio cursor-pointer text-[16px] font-normal italic leading-[20px] text-[#fffdcf] hover:opacity-80"
            >
              Common Questions
            </span>
            <div className="divideLine"></div>
            <span
              // className="c-categoryTxt"
              className="font-Gelasio cursor-pointer text-[16px] font-normal italic leading-[20px] text-[#fffdcf] hover:opacity-80"
            >
              Common Questions
            </span>
          </div>

          <div
            //   className="c-catagory-mainConainer"
            className="flex gap-[38px] xs:flex-col xs:gap-[17px] sm:flex-col sm:gap-[17px] md:gap-[27px]"
          >
            <img
              src="/images/badge1.png"
              alt="img"
              //   className="c-category-bagdgeImg"
              className="w-[152px] h-[152px] md:w-[118px] md:h-[122px] sm:w-[118px] sm:h-[122px] xs:w-[118px] xs:h-[122px] sm:mt-[0px] sm:mb-[0px] sm:mx-auto
              xs:mt-[0px] xs:mb-[0px] xs:mx-auto"
              //   width={}
            />
            <div className="c-guide-catagoryRightPart">
              <div
                //   className="c-guide-catagoryWhiteTitle"
                className="font-Hepta Slab font-normal font-600 text-[24px] text-white mb-[14px] sm:text-center xs:text-center"
              >
                Overview
              </div>
              <div className="c-guide-catagoryContent">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit .{" "}
                <span className="c-guideTxt">Read more</span>
              </div>
              <div
                //   className="c-guide-catagoryWhiteTitle"
                className="font-Hepta Slab font-normal font-600 text-[24px] text-white mb-[14px] sm:text-center xs:text-center"
              >
                Common Questions
              </div>
              <div
                //   className="c-guide-questionBlockContainer"
                className="flex gap-[37px]"
              >
                <div
                  // className="c-guide-questionBlock"
                  className="max-w-[220px] p-0 pl-[16px] border-l-[2px] border-[#e0dbb1]"
                >
                  <div
                    //   className="c-guide-questionTitleTxt"
                    className="font-bold text-[16px] text-[#223030] leading-[18px] mb-[7px] font-Roboto"
                  >
                    How much does it cost?
                  </div>
                  <div className="c-guide-questionContentTxt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </div>
                </div>
                <div
                  // className="c-guide-questionBlock"
                  className="max-w-[220px] p-0 pl-[16px] border-l-[2px] border-[#e0dbb1]"
                >
                  <div
                    //   className="c-guide-questionTitleTxt"
                    className="font-bold text-[16px] text-[#223030] leading-[18px] mb-[7px] font-Roboto"
                  >
                    How long does it last?
                  </div>
                  <div className="c-guide-questionContentTxt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt.
                  </div>
                </div>
                <div
                  // className="c-guide-questionBlock"
                  className="max-w-[220px] p-0 pl-[16px] border-l-[2px] border-[#e0dbb1]"
                >
                  <div
                    //   className="c-guide-questionTitleTxt"
                    className="font-bold text-[16px] text-[#223030] leading-[18px] mb-[7px] font-Roboto"
                  >
                    How difficult is it compare to other certifications?
                  </div>
                  <div className="c-guide-questionContentTxt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam.
                  </div>
                </div>
              </div>
              {/* <div style={{ width: "100%" }}>
                <AliceCarousel
                  mouseTracking
                  keyboardNavigation={true}
                  responsive={responsive1}
                  // disableButtonsControls={true}
                  autoPlayInterval={1000}
                  infinite
                  autoPlay={true}
                  items={
                    questionData &&
                    questionData?.map((item: any, i: number) => {
                      return (
                        //   <div
                        //     // className="c-guide-questionBlock"
                        //     className="max-w-[220px] p-0 pl-[16px] border-l-[2px] border-[#e0dbb1]"
                        //   >
                        //     <div
                        //       //   className="c-guide-questionTitleTxt"
                        //       className="font-bold text-[16px] text-[#223030] leading-[18px] mb-[7px] font-Roboto"
                        //     >
                        //       {item?.title}
                        //     </div>
                        //     <div className="c-guide-questionContentTxt">
                        //       {item?.content}
                        //     </div>
                        //   </div>
                        <div
                          style={{
                            width: "300px",
                            height: "300px",
                            background: "red",
                          }}
                        >
                          hello world
                        </div>
                      )
                    })
                  }
                />
              </div> */}
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </>
  )
}
