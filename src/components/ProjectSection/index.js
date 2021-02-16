import React from 'react';
import { Button } from '../ButtonElement';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  includeImage,
  Img
} from './ProjectElements';

function ProjectSection({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  buttonLabelEmail,
  buttonLabelLinkedIn,
  includeImage,
  img,
  alt,
  primary,
  dark,
  dark2
}) {
  return (
    <>
      <ProjectContainer lightBg={lightBg} id={id}>
        <ProjectWrapper>
          <ProjectRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText}>
                  {headline}
                </Heading>
                <Subtitle darkText={darkText}>
                  {description}
                </Subtitle>
                <BtnWrap>
                  {buttonLabel ? (
                    <Button
                      to="home"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  ) : null}
                  {buttonLabelEmail ? (
                    <IconButton>
                      <EmailIcon style={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                  ) : null}
                  {buttonLabelLinkedIn ? (
                    <IconButton>
                      <LinkedInIcon style={{ fontSize: 40, color: 'white' }} />
                    </IconButton>
                  ) : null}
                </BtnWrap>
              </TextWrapper>
            </Column1>
            {includeImage ? (
              <Column2>
                <ImgWrap>
                  <Img src={img} alt={alt} />
                </ImgWrap>
              </Column2>
            ) : null}
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    </>
    // <>
    //   <ProjectContainer lightBg={lightBg} id={id}>
    //     <ProjectWrapper>
    //       <ProjectRow imgStart={imgStart}>
    //         <Column1>
    //           <TextWrapper>
    //             <TopLine>
    //               {topLine}
    //             </TopLine>
    //             <Heading lightText={lightText}>
    //               {headline}
    //             </Heading>
    //             <Subtitle darkText={darkText}>
    //               {description}
    //             </Subtitle>
    //             <BtnWrap>
    //               {buttonLabel ? (
    //                 <Button
    //                   to="home"
    //                   smooth={true}
    //                   duration={500}
    //                   spy={true}
    //                   exact="true"
    //                   offset={80}
    //                   primary={primary ? 1 : 0}
    //                   dark={dark ? 1 : 0}
    //                   dark2={dark2 ? 1 : 0}
    //                 >
    //                   {buttonLabel}
    //                 </Button>
    //               ) : null}
    //             </BtnWrap>
    //           </TextWrapper>
    //         </Column1>
    //         <Column2>
    //           <ImgWrap>
    //             <Img src={img} alt={alt} />
    //           </ImgWrap>
    //         </Column2>
    //       </ProjectRow>
    //     </ProjectWrapper>
    //   </ProjectContainer>
    // </>
  )
}

export default ProjectSection
