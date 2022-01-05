import React, {useState }from 'react'
import "./skill.css"
import cartoon from "../../images/cartoon.png"
import Preview from './Preview'
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

    return (
        <>

            <div className="skill-container">
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
                                            পেমেন্ট সম্পন্ন করার পর আপনার একাউন্টে “আপনার কোর্সসমূহ” সেকশনে কোর্সটি চলে আসবে।
                                </div>
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
                     {/* about our course   */}
                     <div className="about-our-course">
                        <div className="our-course-heading">
                            <h3> About Our Course </h3>
                        </div>    
                        <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Accordion Item #1
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Accordion Item #3
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
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
                            <h6>Enrolled</h6>
                            <p>110,035</p></div>
                            <div className="course-time">
                            <h6>Hours Required  </h6>
                            <p>20 Hours</p>
                            </div>
                        </div>
                        <div className="course-more-details">
                            <p> ✅ 83 Video Lectures</p>
                            <p> ✅ 83 Video Lectures</p>
                            <p> ✅ 83 Video Lectures</p>
                            <p> ✅ 83 Video Lectures</p>
                            <p> ✅ 83 Video Lectures</p>
                        </div>
                    </div>
                </div>
                </div>
                


        </>
            

    )
}

export default skill

