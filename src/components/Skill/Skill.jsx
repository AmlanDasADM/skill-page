import React, {useState }from 'react'
import "./skill.css"
import amlan from "../../images/amlan2.jpg"
import cartoon from "../../images/cartoon.png"
import cartoon2 from "../../images/crt2.png"
import cartoo3 from "../../images/crt3.jpg"
import cartoon4 from "../../images/crt4.jpg"
import Preview from './Preview'
import Item from "./Item";
import Carousel from "react-elastic-carousel";
import ReactPlayer from 'react-player'



function ReadMore({ children, maxcharacterCount = 100 })
{
    const text = children 
    const [trunked, setTrunked] = useState(true)
    const resultString = trunked ? text.slice(0, 100) : text;
     const handleOnClick = () =>
    {
        setTrunked(!trunked)
    }

    return (
        <div className="collapsed-div">
            <p className='has-text-left'>
            {resultString}
                <span onClick={handleOnClick} className='collapsed-button'> {trunked ? "...Read more" : "...Read less"} </span>
            </p>
        </div>    
    )
}


function skill()
{
    const bp = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 },
      ];
  
    return (
        <>
            <div className="skill-container ">
                <div className="left-side">
                    <div className="left-side-title">
                        <div className="title-heading">
                            <h3>Spoken English</h3>
                        </div>
                        <div className="title-para">
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus voluptatibus expedita reprehenderit tempore .</p>
                        </div>
                    </div>
                    <div className="left-side-teacher">
                        <div className="teacher-heading">
                            <h3>Teacher</h3>
                        </div>
                        <div className="teacher-items">
                        <div className="teacher-image">
                            <img src={cartoon} alt="" srcset="" />
                        </div>
                        <div className="teacher-para">
                            <h4>Lorem </h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quas?Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                        </div>
                    </div>
                    {/* <div className="left-side-certificate"></div> */}
                    <div className="left-side-aboutUs">
                        <div className="about-us-heading">
                            <div className="about-title">
                                <h3>About Us</h3>
                            </div>
                            <div className="about-para">
                                <ReadMore> 
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet magni quia distinctio quae, numquam quis atque odio doloribus eni Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolor veritatis rerum eveniet, fugiat consequatur eos iste cum, inventore, deleniti voluptatum! Aperiam at odio soluta vel fugiat quis, necessitatibus sequi?
                                </ReadMore>
                            </div>
                        </div>
                    </div>



                    {/* priview content  */}
                    <Preview />
                    <div className="students-review">
                        <div className="slidebar">
                        <h3 style={{ textAlign: "center" }} className='review-title'>What students are saying</h3>
                            <div className="slidebaritem">
                                <Carousel breakPoints={bp}>
                                    <Item>
                                        <div className="item-img">
                                        <img src={cartoo3} alt="" srcset="" /> 
                                            <div className="student-name">
                                                <h3>amlan das</h3>
                                                <p>jalalabad cantonment public school and collage</p>
                                            </div>
                                        </div>
                                        <div className="item-para">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti minus, perferendis voluptatum temporibus ducimus facilis molestias obcaecati quis autem cupiditate nisi distinctio consequatur ipsa dolorem qui eum, asperiores doloremque commodi perspiciatis, quos nobis maiores vero! Consectetur rerum distinctio aliquam fuga, reprehenderit possimus. Similique necessitatibus optio cupiditate aliquam est nam.</p>
                                        </div>
                                    </Item>
                                <Item>   <div className="item-img">
                                        <img src={cartoon2} alt="" srcset="" /> 
                                            <div className="student-name">
                                                <h3>amlan das</h3>
                                                <p>jalalabad cantonment public school and collage</p>
                                            </div>
                                        </div>
                                        <div className="item-para">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti minus, perferendis voluptatum temporibus ducimus facilis molestias obcaecati quis autem cupiditate nisi distinctio consequatur ipsa dolorem qui eum, asperiores doloremque commodi perspiciatis, quos nobis maiores vero! Consectetur rerum distinctio aliquam fuga, reprehenderit possimus. Similique necessitatibus optio cupiditate aliquam est nam.</p>
                                        </div>
                                </Item>
                                <Item>   <div className="item-img">
                                        <img src={cartoo3} alt="" srcset="" /> 
                                            <div className="student-name">
                                                <h3>amlan das</h3>
                                                <p>jalalabad cantonment public school and collage</p>
                                            </div>
                                        </div>
                                        <div className="item-para">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti minus, perferendis voluptatum temporibus ducimus facilis molestias obcaecati quis autem cupiditate nisi distinctio consequatur ipsa dolorem qui eum, asperiores doloremque commodi perspiciatis, quos nobis maiores vero! Consectetur rerum distinctio aliquam fuga, reprehenderit possimus. Similique necessitatibus optio cupiditate aliquam est nam.</p>
                                        </div>
                                </Item>
                                <Item>   <div className="item-img">
                                        <img src={amlan} alt="" srcset="" /> 
                                            <div className="student-name">
                                                <h3>amlan das</h3>
                                                <p>jalalabad cantonment public school and collage</p>
                                            </div>
                                        </div>
                                        <div className="item-para">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti minus, perferendis voluptatum temporibus ducimus facilis molestias obcaecati quis autem cupiditate nisi distinctio consequatur ipsa dolorem qui eum, asperiores doloremque commodi perspiciatis, quos nobis maiores vero! Consectetur rerum distinctio aliquam fuga, reprehenderit possimus. Similique necessitatibus optio cupiditate aliquam est nam.</p>
                                        </div>
                                </Item>
                                <Item>
                                    <div className="item-img">
                                        <img src={amlan} alt="" srcset="" /> 
                                            <div className="student-name">
                                                <h3>amlan das</h3>
                                                <p>jalalabad cantonment public school and collage</p>
                                            </div>
                                        </div>
                                        <div className="item-para">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad corrupti minus, perferendis voluptatum temporibus ducimus facilis molestias obcaecati quis autem cupiditate nisi distinctio consequatur ipsa dolorem qui eum, asperiores doloremque commodi perspiciatis, quos nobis maiores vero! Consectetur rerum distinctio aliquam fuga, reprehenderit possimus. Similique necessitatibus optio cupiditate aliquam est nam.</p>
                                        </div>
                                </Item>
                                </Carousel>
                             </div>   
                        </div>
                    </div>

                    {/* FAQ  */}
                    <div className="faq">
                        <div className="faq-body">
                            <div className="faq">
                                <h3>FAQ (Frequently Asked Questions)</h3>
                            </div>
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            কোর্সটি কীভাবে কিনবো?
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">"কোর্সটি কিনুন" বাটনে ক্লিক করুন।
আপনি যেই ফোন নম্বর বা ইমেইল দিয়ে কোর্সটি কিনতে চান সেটি প্রদান করে “এগিয়ে যান” বাটনে ক্লিক করুন।
“প্রশ্ন-চিহ্ন” আইকনে ক্লিক করে পেমেন্ট করার নিয়মটি জেনে নিন।
আপনার মোবাইল নাম্বার বা ইমেইল দিয়ে “কোর্সটি কিনুন” অপশনে ক্লিক করুন। 
পেমেন্ট মেথড নির্বাচন করুন।
আপনাকে পেমেন্ট সেকশনে নিয়ে যাওয়া হবে যেখানে আপনার পেমেন্ট করতে পারবেন।
পেমেন্ট সম্পন্ন করার পর আপনার একাউন্টে “আপনার কোর্সসমূহ” সেকশনে কোর্সটি চলে আসবে।</div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            ইনএক্টিভ একাউন্ট কিভাবে পুনরায় এক্টিভ করব/পাসওয়ার্ড ভুলে গিয়েছি/পাসওয়ার্ড কিভাবে পরিবর্তন করব?
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">লগ-ইন করার সময় নিচে "Forget Password/পাসওয়ার্ড ভুলে গিয়েছি" নামে একটি অপশন পাবেন। সেটির মাধ্যমে আপনি পাসওয়ার্ড রিসেট করে নতুন পাসওয়ার্ড নিতে পারবেন। পাসওয়ার্ড রিসেট করার পরে আপনি পুনরায় নতুন পাসওয়ার্ড সেট করতে পারবেন।
                                </div>            
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            কোনো টেকনিকাল সমস্যা কিভাবে রিপোর্ট করব?
                            </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">যেকোনো সমস্যার ক্ষেত্রে, কল করুনঃ                      ০৯৬১-২০০-১০১০ (দুপুর ২টা - রাত ১০টা) ইমেইল করুনঃ support@10minuteschool.com অথবা এই ফর্মটি পূরণ করুনঃ https://forms.gle/buwAfFXP8V6c7gbY7
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                    </div>
                    {/* recomended courses  */}
                    <div className="course">
                        <div className="course-body">
                            <div className="course-heading">
                                <h3>Recommended courses for you</h3>
                            </div>
        <div class="skillListWrapper">

                <div class="skillDivContainer">
                <a href="#">
              <div class="thumb"><img src={cartoon}/></div>
                <div class="txt">
                   <a href="https://youtube.com/playlist?list=PLepBPQGnIXKqjlVcAq2G8MWi6OZVkybyx"> <h3>Book Review</h3></a>
                    <a href="https://youtube.com/playlist?list=PLepBPQGnIXKqjlVcAq2G8MWi6OZVkybyx"> <p>Midhad Ahmed</p></a>
                </div>
                <div class="pricing">
                    <div class="price"><p><a class="v-link"href="https://youtube.com/playlist?list=PLepBPQGnIXKqjlVcAq2G8MWi6OZVkybyx">Visit</a></p></div>
                    <div class="time"><i class="far fa-clock"></i><span>20 hr</span></div>
                </div>
                </a>
            </div>
            <div class="skillDivContainer">
                <a href="#">
                                    <div class="thumb"><img src={ cartoon4}/></div>
                <div class="txt">
                   <a href="https://youtube.com/playlist?list=PLepBPQGnIXKoqOEbeXKJ9Z7ii6jlOj6Nj"> <h3>Basic IT Hacks   </h3></a>
                    <a href="https://youtube.com/playlist?list=PLepBPQGnIXKoqOEbeXKJ9Z7ii6jlOj6Nj"> <p>Sheikh Abir Ali</p></a>
                </div>
                <div class="pricing">
                    <div class="price"><p><a class="v-link"href="https://youtube.com/playlist?list=PLepBPQGnIXKoqOEbeXKJ9Z7ii6jlOj6Nj">Visit</a></p></div>
                    <div class="time"><i class="far fa-clock"></i><span>20 hr</span></div>
                </div>
                </a>
            </div>
            <div class="skillDivContainer">
                <a href="#">
                                    <div class="thumb"><img src={cartoon2}/></div>
                <div class="txt">
                   <a href="https://youtube.com/playlist?list=PLepBPQGnIXKrRaz9GtED7kZOG9zPcgYlT"> <h3>HSC Physics</h3></a>
                    <a href="https://youtube.com/playlist?list=PLepBPQGnIXKrRaz9GtED7kZOG9zPcgYlT"> <p>Faysal Ahmed</p></a>
                </div>
                <div class="pricing">
                    <div class="price"><p><a class="v-link"href="https://youtube.com/playlist?list=PLepBPQGnIXKrRaz9GtED7kZOG9zPcgYlT">Visit</a></p></div>
                    <div class="time"><i class="far fa-clock"></i><span>20 hr</span></div>
                </div>
                </a>
            </div>
            <div class="skillDivContainer">
                <a href="#">
                                    <div class="thumb"><img src={ cartoo3 }/></div>
                <div class="txt">
                   <a href="https://youtube.com/playlist?list=PLepBPQGnIXKp5EMGiXYJSwRQDlgpLDttQ"> <h3>Bangladeshi Legends</h3></a>
                    <a href="https://youtube.com/playlist?list=PLepBPQGnIXKp5EMGiXYJSwRQDlgpLDttQ"> <p>Creative School Members</p></a>
                </div>
                <div class="pricing">
                    <div class="price"><p><a class="v-link"href="https://youtube.com/playlist?list=PLepBPQGnIXKp5EMGiXYJSwRQDlgpLDttQ">Visit</a></p></div>
                    <div class="time"><i class="far fa-clock"></i><span>20 hr</span></div>
                </div>
                </a>
            </div>
            </div>
                        </div>
                    </div>
                </div>

                {/* right side  */}
                <div className="right-side">
                    <div className="right-side-container">
                                    <div class="right-side-modal-body">
                                       <ReactPlayer url="https://www.youtube.com/watch?v=oluY633rkgI" controls={true} height="100%" width="100%"/>
                                    </div>
                        <div className="course-details">
                            <div className="course-people">
                            <h6>কোর্সটি করছেন</h6>
                            <p>110,035</p></div>
                            <div className="course-time">
                            <h6>সময় লাগবে</h6>
                            <p>20 ঘন্টা</p>
                            </div>
                        </div>
                        <div className="course-more-details">
                            <p>৮৩টি ভিডিও লেকচার</p>
                            <p>৮৩টি ভিডিও লেকচার</p>
                            <p>৮৩টি ভিডিও লেকচার</p>
                            <p>৮৩টি ভিডিও লেকচার</p>
                            <p>৮৩টি ভিডিও লেকচার</p>
                            <p>৮৩টি ভিডিও লেকচার</p>
                            <p>৮৩টি ভিডিও লেকচার</p>
                            <p>৮৩টি ভিডিও লেকচার</p>
                        </div>
                    </div>
                </div>
                </div>

        </>
    )
}

export default skill

