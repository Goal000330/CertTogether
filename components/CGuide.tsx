/* eslint-disable tailwindcss/classnames-order */
// eslint-disable-next-line tailwindcss/classnames-order

import Image from "next/image"

import { Button } from "@/components/ui/button"

// import {Img} from 'next/image';
export function CGuide() {
  return (
    <>
      <div className="relative">
        <div className=" bg-[#679696] w-full px-[78px] pt-[57px] pb-[30px] min-h-[300px] relative md:px-[34px] sm:px-[34px] xs:px-[34px]">
          <div className="flex justify-center items-center c-guideCatagoryContainer mb-[27px]">
            <span className="c-categoryTxt">Overview</span>
            <div className="divideLine"></div>
            <span className="c-categoryTxt">Common Questions</span>
            <div className="divideLine"></div>
            <span className="c-categoryTxt">Common Questions</span>
          </div>

          <div className="c-catagory-mainConainer">
            <img
              src="/images/badge1.png"
              alt="img"
              className="
              c-category-bagdgeImg 
              sm:w-[118px] sm:h-[122px] w-[152px] h-[152px]"
              //   width={}
            />
            <div className="c-guide-catagoryRightPart">
              <div className="c-guide-catagoryWhiteTitle">Overview</div>
              <div className="c-guide-catagoryContent">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel
                illum dolore eu feugiat nulla facilisis at vero eros et accumsan
                et iusto odio dignissim qui blandit .
              </div>
              <div className="c-guide-catagoryWhiteTitle">Common Questions</div>
              <div className="c-guide-questionBlockContainer">
                <div className="c-guide-questionBlock">
                  <div className="c-guide-questionTitleTxt">
                    How much does it cost?
                  </div>
                  <div className="c-guide-questionContentTxt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </div>
                </div>
                <div className="c-guide-questionBlock">
                  <div className="c-guide-questionTitleTxt">
                    How long does it last?
                  </div>
                  <div className="c-guide-questionContentTxt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt.
                  </div>
                </div>
                <div className="c-guide-questionBlock">
                  <div className="c-guide-questionTitleTxt">
                    How difficult is it compare to other certifications?
                  </div>
                  <div className="c-guide-questionContentTxt">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="absolute w-full flex justify-center top-[-25px]">
          <Button className=" bg-[#679696] bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-l-[5px] rounded-r-[0px] p-[20px] pb-[22px] text-white h-[61px] font-normal text-[18px] leading-6">
            Overview
          </Button>
          <Button className=" bg-gradient-to-b from-gray-700 to-gray-900 rounded-[0px] p-[20px] pb-[22px] text-white h-[61px] font-normal text-[18px] leading-6">
            Questions
          </Button>
          <Button className=" bg-gradient-to-b from-gray-700 to-gray-900 rounded-l-[0px] rounded-r-[5px] p-[20px] pb-[22px] text-white h-[61px] font-normal text-[18px] leading-6">
            Quiz
          </Button>
        </div>
      </div>
    </>
  )
}
