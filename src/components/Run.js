import React from "react";
import {Fragment} from "react";

const Run = () => {
    return (
        <Fragment>
            <div
                style={{
                    maxWidth: '800px',
                    margin: '0 auto',
                    fontFamily: 'Arial, sans-serif',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    lineHeight: '1.8',
                    color: '#333',
                }}
            >
                {/* Image Section */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <img
                        src="/run.jpeg" // Replace with the correct path to your image
                        alt="Runner supporting Ability Bow"
                        style={{
                            width: '70%',
                            borderRadius: '8px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </div>

                {/* Title Section */}
                <h2
                    style={{
                        fontSize: '26px',
                        fontWeight: 'bold',
                        color: '#0056b3', // A visually appealing blue for emphasis
                        marginBottom: '20px',
                        textAlign: 'center',
                    }}
                >
                    Running for a Dream: Support Ability Bow
                </h2>

                {/* Story Content */}
                <div style={{ textAlign: 'justify' }}>
                    <p>
                        I grew up in a small village in India 🇮🇳 where <strong>running marathons and fitness awareness</strong> were not
                        a common part of life. Despite this, I pursued my education, moved to the city for higher studies, and later
                        worked with leading corporates. A freelancing opportunity eventually brought me to London two years ago,
                        where I now work as a software engineer.
                    </p>
                    <p>
                        Running has always been close to my heart. Back in <strong>2021, I participated in the TCS Open 10K Marathon</strong>, which
                        sparked my dream of completing a full marathon. Now, I’m preparing to run the <strong>2025 TCS London Marathon</strong>, a
                        goal I’ve cherished for years. When I didn’t secure a spot through the ballot, I decided to run for <strong>Ability
                        Bow</strong>, a cause that deeply resonates with me.
                    </p>
                    <p>
                        <strong>Ability Bow</strong> is a charity gym in East London that provides tailored exercise programs for
                        individuals with disabilities or long-term health conditions, empowering them to regain independence and
                        improve their quality of life. This mission is personal to me. My <strong>70-year-old mother struggled with arthritis</strong>
                        for over a decade, and only after her knee surgery last year did she find relief. Her journey showed me how
                        vital accessible fitness solutions are for those facing similar challenges.
                    </p>
                    <p>
                        This marathon is about much more than running; it’s my way of giving back and honoring the
                        resilience of people like my mother. Over the years, I’ve <strong>logged over 1,000 kilometers</strong> on the <strong>Nike Run app</strong> and,
                        with guidance from an ultra-marathon runner at my gym, I’m building my pace for this monumental challenge.
                    </p>
                    <p>
                        However, this journey isn’t just about running; it’s also about raising funds. <strong>This is my first
                        time fundraising</strong>, and it’s been much harder than I imagined 😓 So far, I’ve raised <strong>£75</strong>, but I still
                        have a long way to go. <strong>Every donation, no matter the size, brings me closer to my goal</strong>. Even <strong>£16 can make a big
                        difference</strong> and get me <strong>1% closer</strong>.
                    </p>
                    <p>
                        To encourage support, <strong>I’m willing to match your generosity</strong> - for every donation you make, I’ll
                        contribute the same amount. If you donate <strong>£50</strong>, I’ll add another <strong>£50</strong> from my side. This is my way of showing how
                        much this means to me and the people we’re helping together.
                    </p>
                    <p>
                        Running this marathon in London, a city that has become my second home, is a surreal and fulfilling
                        experience. Growing up in a place where marathons weren’t part of the culture, achieving this dream feels
                        incredible. But <strong>I can’t do it alone. I need your support to make this dream a reality.</strong>
                    </p>
                </div>

                {/* Call to Action */}
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                        Help me make a difference! Every donation, big or small, helps change lives.
                    </p>
                    <a
                        href="https://abilitybow.enthuse.com/pf/aishwat-singh"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-block',
                            backgroundColor: '#28a745', // A strong green color for action
                            color: '#ffffff',
                            padding: '12px 24px',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontSize: '18px',
                            fontWeight: 'bold',
                            marginTop: '10px',
                        }}
                    >
                        Donate to Ability Bow
                    </a>
                </div>

                {/* Thank You Note */}
                <p style={{ marginTop: '20px', textAlign: 'center', fontStyle: 'italic', color: '#555' }}>
                    Thank you from the bottom of my heart for being part of this journey 🍀
                </p>
            </div>
        </Fragment>

    );
};

export default Run;
