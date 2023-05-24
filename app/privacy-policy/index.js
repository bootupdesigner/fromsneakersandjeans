import { View, Image, ImageBackground, TouchableOpacity, Text, ScrollView } from 'react-native';
import React from 'react';
import { Link, useRouter } from "expo-router";
import Swiper from 'react-native-web-swiper';
import * as Speech from 'expo-speech';
import StyleSheet from 'react-native-media-query';

import backgroundImage from '../../assets/images/sneakers_app_background.jpg';
import referenceButton from '../../assets/images/references.png';
import chapterTitle from '../../assets/images/privacyTitle.png';
import backButton from '../../assets/images/backButton.png';
import privacyThumbnail from '../../assets/images/informationIcon.png';

import StopPlay from '../../assets/stopPlay';

const privacypolicy = () => {
    const chapterTitleAlt = 'privacy policy title';

    const router = useRouter();

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}>

                {/* page header and navigation */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => {
                        router.push(href = '/chapters')
                    }}>
                        <Image style={styles.navImages} source={backButton} accessibilityLabel='back to chapters' />
                    </TouchableOpacity>

                    <Image style={styles.titleImages} dataSet={{media: ids.titleImages}} source={chapterTitle} accessibilityLabel={chapterTitleAlt} />

                    <TouchableOpacity onPress={() => {
                        router.push(href = '/references')
                    }} >
                        <Image style={styles.navImages} source={referenceButton} accessibilityLabel='visit references and citations page' />
                    </TouchableOpacity>

                </View>
                {/* end of page header and navigation */}

                <Swiper controlsProps={{ dotsPos: 'bottom' }} onIndexChanged={(i) => { setCurrentSlide(slides[i]) }} showsButtons={true} loop={false} >

                    <View style={styles.content}>

                        <View style={styles.left}>
                            <Image style={styles.image} source={privacyThumbnail} accessibilityLabel='help websites Candi' />
                        </View>

                        <View style={styles.center} dataSet={{ media: ids.center }}>
                            <ScrollView>
                                <Text style={styles.paragraph}>Notary Works (&quot;Notary Works&quot;) values its users&#39; privacy. This Privacy Policy (&quot;Policy&quot;) will help you understand
                                    how we collect and use personal information from those who visit our website, download our app, or make use of
                                    our online facilities and services, and what we will and will not do with the information we collect. Our Policy has
                                    been designed and created to ensure those affiliated with Notary Works of our commitment and realization of our
                                    obligation not only to meet, but to exceed, most existing privacy standards.</Text>
                                <Text style={styles.paragraph}>We reserve the right to make changes to this Policy at any given time. If you want to make sure that you are up to
                                    date with the latest changes, we advise you to frequently visit this page. If at any point in time Notary Works
                                    decides to make use of any personally identifiable information on file, in a manner vastly different from that which
                                    was stated when this information was initially collected, the user or users shall be promptly notified by email.
                                    Users at that time shall have the option as to whether to permit the use of their information in this separate
                                    manner.</Text>
                                <Text style={styles.paragraph}>
                                    This Policy applies to Notary Works and any subsidiary company listed below, and it governs any and all data
                                    collection and usage by us. Through the use of www.NotaryWorksLA.com and any subsidiary website listed
                                    below, you are therefore consenting to the data collection procedures expressed in this Policy.</Text>
                                <View style={styles.row}>
                                    <View style={{ width: "50%", marginRight: 15 }}>
                                        <Text style={styles.bold}>Subsidiary Company:</Text>
                                        <Text style={styles.paragraph}>Pink Pos Girls</Text>
                                        <Text style={styles.paragraph}>From Sneakers and Jeans Android and iOS App</Text>
                                    </View>
                                    <View style={{ width: "50%", marginLeftl: 15 }}>
                                        <Text style={styles.bold}>Subsidiary Website:</Text>
                                        <Text style={styles.paragraph}>www.PinkPosGirls.com</Text>
                                        <Text style={styles.paragraph}>https://fromsneakersandjeans.netIify.app/</Text>
                                    </View>
                                </View>
                                <Text style={styles.paragraph}>Please note that this Policy does not govern the collection and use of information by companies that Notary
                                    Works does not control, nor by individuals not employed or managed by us. If you visit a website that we mention
                                    or link to, be sure to review its privacy policy before providing the site with information. It is highly recommended
                                    and suggested that you review the privacy policies and statements of any website you choose to use or frequent
                                    to better understand the way in which websites garner, make use of and share the information collected.</Text>

                                <View>
                                    <Text style={styles.paragraph}>Specifically, this Policy will inform you of the following:</Text>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bulletNumbers}>1.</Text>
                                            <Text style={styles.listData}>What personally identifiable information is collected from you through our website or app;</Text>
                                        </View>
                                        <View style={styles.list}>
                                            <Text style={styles.bulletNumbers}>2.</Text>
                                            <Text style={styles.listData}>Why we collect personally identifiable information and the legal basis for such collection;</Text>
                                        </View>
                                        <View style={styles.list}>
                                            <Text style={styles.bulletNumbers}>3.</Text>
                                            <Text style={styles.listData}>What personally identifiable information is collected from you through our website or app;</Text>
                                        </View>
                                        <View style={styles.list}>
                                            <Text style={styles.bulletNumbers}>4.</Text>
                                            <Text style={styles.listData}>What personally identifiable information is collected from you through our website or app;</Text>
                                        </View>
                                        <View style={styles.list}>
                                            <Text style={styles.bulletNumbers}>5.</Text>
                                            <Text style={styles.listData}>What personally identifiable information is collected from you through our website or app;</Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.boldUnderline}>Information We Collect</Text>
                                    <Text style={styles.paragraph}>
                                        It is always up to you whether to disclose personally identifiable information to us, although if you elect not to do
                                        so, we reserve the right not to register you as a user or provide you with any products or services.</Text>
                                    <Text style={styles.paragraph}>
                                        In addition, Notary Works may have the occasion to collect non-personal anonymous demographic information,
                                        such as age, gender, household income, political affiliation, race and religion, as well as the type of browser you
                                        are using, IP address, or type of operating system, which will assist us in providing and maintaining superior
                                        quality service.
                                    </Text>
                                </View>
                                <View>
                                    <Text style={styles.boldUnderline}>Why We Collect Information and For How Long</Text>
                                    <View>
                                        <Text style={styles.paragraph}>We are collecting your data for several reasons:</Text>
                                        <View style={{ width: '80%' }}>
                                            <View style={styles.list}>
                                                <Text style={styles.bullets}>{'\u2022'}</Text>
                                                <Text style={styles.listData}>
                                                    To better understand your needs and provide you with the services you have requested;
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <View style={styles.list}>
                                                <Text style={styles.bullets}>{'\u2022'}</Text>
                                                <Text style={styles.listData}>
                                                    To fulfill our legitimate interest in improving our services and products;
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <View style={styles.list}>
                                                <Text style={styles.bullets}>{'\u2022'}</Text>
                                                <Text style={styles.listData}>
                                                    To send you promotional emails containing information we think you may like when we have your consent to do so;
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <View style={styles.list}>
                                                <Text style={styles.bullets}>{'\u2022'}</Text>
                                                <Text style={styles.listData}>
                                                    To contact you to fill out surveys or participate in other types of market research, when we have your consent to do so;
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <View style={styles.list}>
                                                <Text style={styles.bullets}>{'\u2022'}</Text>
                                                <Text style={styles.listData}>
                                                    To customize our website and/or app according to your online behavior and personal preferences.
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.paragraph}>The data we collect from you will be stored for no longer than necessary. The length of time we retain said information will be determined based upon the following criteria: the length of time your personal information remains relevant; the length of time it is reasonable to keep records to demonstrate that we have fulfilled our duties and obligations; any limitation periods within which claims might be made; any retention periods prescribed by law or recommended by regulators, professional bodies or associations; the type of contract we have with you, the existence of your consent, and our legitimate interest in keeping such information as stated in this Policy.</Text>
                                </View>
                                <View>
                                    <Text style={styles.boldUnderline}>Use of Information Collected</Text>
                                    <Text style={styles.paragraph}>Notary Works does not now, nor will it in the future, sell, rent or lease any of its customer lists and/or names to any third parties.</Text>
                                    <Text style={styles.paragraph}>Notary Works may collect and may make use of personal information to assist in the operation of our website or app and to ensure delivery of the services you need and request. At times, we may find it necessary to use personally identifiable information as a means to keep you informed of other possible products and/or services that may be available to you from www.NotaryWorksLA.com and its subsidiaries.</Text>
                                    <Text style={styles.paragraph}>Notary Works and its subsidiaries may also be in contact with you with regards to  completing surveys and/or research questionnaires related to your opinion of current or potential future services that may be offered.</Text>
                                    <Text style={styles.paragraph}>Notary Works uses various third-party social media features including but not limited to Facebook, Instagram and other interactive programs. These may collect your IP address and require cookies to work properly. These services are governed by the privacy policies of the providers and are not within Notary Works’ control.</Text>
                                </View>
                                <View>
                                    <Text style={styles.boldUnderline}>Disclosure of Information</Text>
                                    <Text style={styles.paragraph}>Notary Works may not use or disclose the information provided by you except under the following circumstances:</Text>

                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                as necessary to provide services or products you have ordered;
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                in other ways described in this Policy or to which you have otherwise consented;
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                in the aggregate with other information in such a way so that your identity cannot reasonably be determined;
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                as required by law, or in response to a subpoena or search warrant;
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                to outside auditors who have agreed to keep the information confidential;
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                as necessary to enforce the Terms of Service;
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                as necessary to maintain, safeguard and preserve all the rights and property of Notary Works.
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.boldUnderline}>Non-Marketing Purposes</Text>
                                    <Text style={styles.paragraph}>Notary Works greatly respects your privacy. We do maintain and reserve the right to contact you if needed for non-marketing purposes (such as bug alerts, security breaches, account issues, and/or changes in Notary Works products and services). In certain circumstances, we may use our website, app, newspapers, or other public means to post a notice.</Text>
                                    <Text style={styles.boldUnderline}>Protecting Children&#39;s Privacy Under the Age of 13</Text>
                                    <Text style={styles.paragraph}>Anyone under the age of thirteen (13) must seek and obtain parent or guardian permission to use this website, it’s subsidiary websites and/or download apps.</Text>

                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                We do not collect personal contact information from children at Notary Works without the consent of a parent or legal guardian, except in limited circumstances authorized by law.
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                We collect some information (like IP address, mobile device UDID, operating system, etc.) automatically and use technology to provide functionality and support our operations. We obtain consent where required.
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                We do not ask for more personal information than is necessary for a child to participate in an activity.
                                            </Text>
                                        </View>
                                    </View>
                                    <View style={{ width: '80%' }}>
                                        <View style={styles.list}>
                                            <Text style={styles.bullets}>{'\u2022'}</Text>
                                            <Text style={styles.listData}>
                                                We take steps to prevent children from posting or publicly  disclosing personal information.
                                            </Text>
                                        </View>
                                    </View>
                                    <Text style={styles.paragraph}>If it is determined that personal information has been inadvertently collected on anyone under the age of thirteen (13), we shall immediately take the necessary steps to ensure that such information is deleted from our system&#39;s database, or in the alternative, that verifiable parental consent is obtained for the use and storage of such information. If you believe that we might have any information from or about a child under the age of thirteen (13), please contact us at NotaryWorksLA@gmail.com . If we learn that we have collected personal information from a child  under the age of thirteen (13), we will delete that information as quickly as possible.</Text>
                                </View>
                                <View>
                                    <Text style={styles.boldUnderline}>Unsubscribe or Opt-Out</Text>
                                    <Text style={styles.paragraph}>All users and visitors to our website and app have the option to discontinue receiving communications from us by way of email or newsletters. To discontinue or unsubscribe from our website or app please send an email that you wish to unsubscribe to NotaryWorksLA@gmaiI.com. If you wish to unsubscribe or opt-out from any third-party websites, you must go to that specific website to unsubscribe or opt-out. Notary Works will continue to adhere to this Policy with respect to any personal information previously collected.</Text>

                                    <Text style={styles.boldUnderline}>Links to Other Websites</Text>
                                    <Text style={styles.paragraph}>Our website does contain links to affiliate and other websites. Notary Works does not claim nor accept responsibility for any privacy policies, practices and/or procedures of other such websites. Therefore, we encourage all users and visitors to be aware when they leave our website and to read the privacy statements of every website that collects personally identifiable information. This Privacy Policy Agreement applies only and solely to the information collected by our website.</Text>

                                    <Text style={styles.boldUnderline}>Notice to European Union Users</Text>
                                    <Text style={styles.paragraph}>Notary Works’ operations are located primarily in the United States. If you provide information to us, the information will be transferred out of the European Union (EU) and sent to the United States. (The adequacy decision on the EU-US Privacy became operational on August 1, 2016. This framework protects the fundamental rights of anyone in the EU whose personal data is transferred to the United States for commercial purposes. It allows the free transfer of data to companies that are certified in the US under the Privacy Shield.) By providing personal information to us, you are consenting to its storage and use as described in this Policy.</Text>

                                    <Text style={styles.boldUnderline}>Security</Text>
                                    <Text style={styles.paragraph}>Notary Works takes precautions to protect your information. When you submit sensitive information via the website or app, your information is protected both online and offline. Wherever we collect sensitive information (e.g. credit card information), that information is encrypted and transmitted to us in a secure way. You can verify this by looking for a lock icon in the address bar and looking for &quot;https&quot; at the beginning of the address of the webpage.</Text>
                                    <Text style={styles.paragraph}>
                                        While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers and servers in which we store personally identifiable information are kept in a secure environment. This is all done to prevent any loss, misuse, unauthorized access, disclosure or modification of the user&#39;s personal information under our control.</Text>
                                    <Text style={styles.paragraph}>
                                        The company also uses Secure Socket Layer (SSL) for authentication and private communications to build users&#39; trust and confidence in the internet and website use by providing simple and secure access and communication of credit card and personal information.</Text>

                                    <Text style={styles.boldUnderline}>Acceptance of Terms</Text>
                                    <Text style={styles.paragraph}>By using this website or app, you are hereby accepting the terms and conditions stipulated within the Privacy Policy Agreement. If you are not in agreement with our terms and conditions, then you should refrain from further use of our sites. In addition, your continued use of our website or app following the posting of any updates or changes to our terms and conditions shall mean that you agree and acceptance of such changes.</Text>
                                </View>
                                <View>
                                    <Text style={styles.boldUnderline}>How to Contact Us</Text>
                                    <Text style={styles.paragraph}>If you have any questions or concerns regarding the Privacy Policy Agreement related to our website or app, please feel free to contact us at the following email, telephone number or mailing address.</Text>
                                    <Text style={styles.bold}>Email:</Text><Text>NotaryWorksLA@gmaiI.com</Text>
                                    <Text style={styles.bold}>Telephone Number:</Text><Text>(504) 290-7857</Text>
                                    <Text style={styles.bold}>Mailing Address: </Text>
                                    <Text style={styles.paragraph}>Notary Works</Text>
                                    <Text style={styles.paragraph}>349 Robinson Ave</Text>
                                    <Text style={styles.paragraph}>Marrero, Louisiana 70072</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.right}>
                            <StopPlay />
                        </View>
                    </View>

                </Swiper>

                <View style={{ flexDirection: "row", marginHorizontal: 15, marginBottom: 10 }}>
                    <Link style={styles.paragraph} href="/information">Information</Link>
                </View>

            </ImageBackground>
        </View>
    )
}


const {ids, styles} = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 0
    },
    backgroundImage: {
        resizeMode: 'cover',
        height: '100%',
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 0
    },
    navImages: {
        height: 80,
        width: 80,
        backgroundColor: 'rgba(255,255,255,0)'
    },
    titleImages: {
        backgroundColor: 'rgba(255,255,255,0)',
        marginVertical: 5,
        '@media (min-height: 320px) and (max-height: 480px)': {
            height: 80,
            width: '50%',
        },
        '@media (min-height: 481px) and (max-height: 768px)': {
            width: '50%',
        },
    },
    image: {
        resizeMode: 'contain',
        height: 200,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        width: '80%'
    },
    list: {
        flexDirection: 'row',
    },
    bulletNumbers: {
        marginVertical: 5,
        fontSize: 16
    },
    listData: {
        paddingLeft: 5,
        fontSize: 16,
        marginVertical: 5
    },
    bullets: {
        marginVertical: 5
    },
    left: {
        width: '30%',
    },
    center: {
        width: '50%',
        justifyContent: 'center',
        '@media (min-height: 320px) and (max-height: 480px)': {
            height: '100%',
            justifyContent: 'center',
        },
        '@media (min-height: 481px) and (max-height: 768px)': {
            height: '80%',
            justifyContent: 'center',
        },
        '@media (min-height: 769px) and (max-height: 1024px)': {
            height: '70%',
            justifyContent: 'center',
        },
        '@media (min-height: 1025px) and (max-height: 1200px)': {
            height: '50%',
            justifyContent: 'center',
        }
    },
    right: {
        alignItems: 'center',
        width: '20%',
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        marginBottom: 35
    },
    paragraph: {
        fontSize: 16,
        marginVertical: 5
    },
    bold: {
        fontSize: 16,
        marginVertical: 5,
        fontWeight: "bold",
    },
    listen: {
        flexDirection: 'row',
        margin: 5,
        paddingVertical: 3
    },
    playOptions: {
        width: 24,
        height: 24
    },
    boldUnderline: {
        textDecorationLine: 'underline',
        fontSize: 16,
        fontWeight: 'bold'
    },
});

export default privacypolicy;