import React from 'react'
import { PiChartBarFill, PiChartLineDownBold, PiChartPolarFill } from 'react-icons/pi'

export default function ChooseUs() {
  return (
    <div class="section-about style-seven-second style-seven-third pt-80 pb-80">
        <div class="container"> 
          <div class="row row-gap-40 flex-between">
            <div class="col-12 col-lg-5 col-md-8 col-sm-10"><img class="w-100" src={require("../../images/component/about-third7.png")} alt="img"/></div>
            <div class="col-12 col-lg-7 pl-65 pl-col-lg-0">
              <div class="text-label bg-black-10percents text-on-surface-variant1 pt-4 pb-4 pl-12 pr-12 display-inline-block">Why choose us</div>
              <div class="heading3 mt-20">Elevate Productivity with Our Expert Help Desk Services</div>
              <div class="desc mt-20">Welcome to Bytewave, your trusted companion in the realm of IoT services. We take pride in being a dedicated partner, committed to delivering state-of-the-art IoT solutions that propel the future of your business.</div>
              <div class="border-line mt-28"> </div>
              <div class="benefit-item flex-item-center mt-28"> <i class="fs-42 display-block"><PiChartPolarFill /></i>
                <div class="title pl-16">
                  <div class="heading5">Efficient Technical Support</div>
                  <p>Quick and effective resolution of technical issues.</p>
                </div>
              </div>
              <div class="benefit-item flex-item-center mt-28"> <i class="fs-42 display-block"><PiChartBarFill /></i>
                <div class="title pl-16">
                  <div class="heading5">Enhanced Productivity</div>
                  <p>Time saved through prompt guidance.</p>
                </div>
              </div>
              <div class="benefit-item flex-item-center mt-28"> <i class="fs-42 display-block"><PiChartLineDownBold /></i>
                <div class="title pl-16">
                  <div class="heading5">Minimized Incidents</div>
                  <p>Consistent support to minimize disruptions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
