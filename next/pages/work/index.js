import React from 'react'
import { render, hydrate } from 'react-dom'
import Card from '@material-ui/core/Card';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactGA from 'react-ga';
import Head from 'next/head'
const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    }
});

function App() {
    return (
        <div style={{
            fontDisplay: 'swap'
        }}>
            <Head>
                <title>Jackson Moore</title>
                <meta name="description" content="Jackson Moore: Babysitting, Tech Help and Kids Coding Classes in London" />
            </Head>
            <style global="true" jsx>
                {
                    ` @font-face {
                        font-family: spartan;
                        src: url("./work/LeagueSpartan-Bold.otf");
                        font-display: swap; 
                    }
                    @font-face {
                        font-family: indiference;
                        src: url("./work/GlacialIndifference-Italic.otf");
                        font-display: swap; 
                    }
                     `
                }</style>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <SvgEl></SvgEl>
                <div
                    style={{
                        width: '100%',
                        height: '90vh',
                        zIndex: '2'
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            height: '100vh',
                            justifyContent: 'center',
                            zIndex: '2',
                            position: 'relative'
                        }}>
                        <div
                            style={{
                                margin: '16px'
                            }}>
                            <h1
                                style={{
                                    fontSize: '70px',
                                    fontFamily: 'spartan',
                                    color: 'rgb(255, 198, 80)'
                                }}>
                                Jackson Moore
                            </h1>
                            <p
                                style={{
                                    fontSize: '20px',
                                    fontFamily: 'indiference',
                                    color: 'rgb(34, 65, 98)'
                                }}>
                                I provide babysitting, tech help and kids coding classes
                            </p>
                            <h3
                                style={{
                                    fontSize: '30px',
                                    fontFamily: 'spartan',
                                    color: 'rgb(255, 198, 80)'
                                }}>
                                Contact me
                            </h3>
                            <p
                                style={{
                                    fontSize: '20px',
                                    fontFamily: 'indiference',
                                    color: 'rgb(34, 65, 98)'
                                }}>
                                Phone: +44737 860 3733<br />
                                Email:
                                <a href='mailto:jackson@ckjom.com'>jackson@ckjom.com</a>
                            </p>
                            <h3
                                style={{
                                    fontSize: '30px',
                                    fontFamily: 'spartan',
                                    color: 'rgb(255, 198, 80)'
                                }}>Scroll for details &darr;</h3>
                        </div>
                    </div>
                </div>
                <div style={{
                    minHeight: '100vh'
                }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            width: '100%',
                            height: '100vh',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}>
                        <Card
                            style={{
                                maxWidth: '345px',
                                backgroundColor: 'white',
                                zIndex: '2',
                                margin: '8px',
                                WebkitTransform: 'translate3d(0,0,0)'
                            }}>
                            <CardActionArea>
                                < CardMedia component='img' image='./work/babysitting.webp' title="Babysitting" height="230" />
                                <CardContent
                                    style={{
                                        paddingBottom: '64px'
                                    }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        style={{
                                            fontFamily: 'spartan',
                                            color: 'rgb(255, 198, 80)'
                                        }}>
                                        Babysitting
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'spartan',
                                            marginBottom: 12
                                        }}
                                        color="textSecondary">
                                        £5/Hour
                                    </Typography>
                                    <Typography
                                        component="p"
                                        style={{
                                            fontFamily: 'indiference'
                                        }}>
                                        I can take your kids to the park if you need to work or look after them in the
                                        evening if you need a night out. I have two younger brothers and experience in
                                        looking after them and other children
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    style={{
                                        color: '#224162'
                                    }}>
                                    <a
                                        style={{
                                            color: 'rgb(255, 198, 80)',
                                            textDecoration: 'none '
                                        }}
                                        href='mailto:jackson@ckjom.com'>Enquire</a>
                                </Button>
                            </CardActions>
                        </Card>
                        <Card
                            style={{
                                maxWidth: '345px',
                                backgroundColor: 'white',
                                zIndex: '2',
                                margin: '8px',
                                WebkitTransform: 'translate3d(0,0,0)'
                            }}>
                            <CardActionArea>
                                <CardMedia
                                    component='img'
                                    image='./work/tech-help.webp'
                                    title="Tech Help"
                                    height="230" />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        style={{
                                            fontFamily: 'spartan',
                                            color: 'rgb(255, 198, 80)'
                                        }}>
                                        Tech Help
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'spartan',
                                            marginBottom: 12
                                        }}
                                        color="textSecondary">
                                        £5/Hour
                                    </Typography>
                                    <Typography
                                        component="p"
                                        style={{
                                            fontFamily: 'indiference'
                                        }}>
                                        Computer running slowly? Unorganised files? Need help learning an app or
                                        program? Want your phone and computer in sync? Would like to understand the
                                        cloud? Want to backup your files? I have a passion for computers, I'm my
                                        family's tech manager and my grandparents tech support
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    style={{
                                        color: '#224162'
                                    }}>
                                    <a
                                        style={{
                                            color: 'rgb(255, 198, 80)',
                                            textDecoration: 'none '
                                        }}
                                        href='mailto:jackson@ckjom.com'>Enquire</a>
                                </Button>
                            </CardActions>
                        </Card>
                        <Card
                            style={{
                                maxWidth: '345px',
                                backgroundColor: 'white',
                                zIndex: '2',
                                margin: '8px',
                                WebkitTransform: 'translate3d(0,0,0)'
                            }}>
                            <CardActionArea>
                                <CardMedia component='img' image='./work/coding.webp' title="Coding" height="230" />
                                <CardContent
                                    style={{
                                        paddingBottom: '40px'
                                    }}>
                                    <Typography
                                        gutterBottom
                                        variant="h5"
                                        component="h2"
                                        style={{
                                            fontFamily: 'spartan',
                                            color: 'rgb(255, 198, 80)'
                                        }}>
                                        Kids Coding Classes
                                    </Typography>
                                    <Typography
                                        style={{
                                            fontFamily: 'spartan',
                                            marginBottom: 12
                                        }}
                                        color="textSecondary">
                                        £5/Hour
                                    </Typography>
                                    <Typography
                                        component="p"
                                        style={{
                                            fontFamily: 'indiference'
                                        }}>
                                        Is you child interested in coding or computer science? How about building
                                        websites or apps? I offer lessons in many programming languages for kids aged
                                        7-12, and have much experience building apps and websites myself

                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    size="small"
                                    style={{
                                        color: '#224162'
                                    }}>
                                    <a
                                        style={{
                                            color: 'rgb(255, 198, 80)',
                                            textDecoration: 'none '
                                        }}
                                        href='mailto:jackson@ckjom.com'>Enquire</a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div >
            </ThemeProvider>
        </div >
    )
}
function SvgEl() {
    return (
        <div style={{
            zIndex: '-1'
        }}>

            <div
                style={{
                    position: 'fixed',
                    transform: 'translate(-70%, 50%)',
                    width: '40vw',
                    height: '40vh'
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 495 495"
                    enableBackground="new 0 0 495 495"
                    xmlSpace="preserve"
                    style={{
                        fill: 'rgb(0, 0, 0)'
                    }}>
                    <g>
                        <g id="__id2078_sw0hdxcc1"><path
                            d="M479.2,163.2l0.8-0.8c-0.2-0.6-0.4-1.1-0.6-1.7l-0.1,0.1V163.2L479.2,163.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2079_sw0hdxcc1"><path
                            d="M489.5,195.3c-0.1-0.6-0.3-1.3-0.4-1.9l-3.9,3.9h2.3L489.5,195.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2080_sw0hdxcc1"><path
                            d="M483.6,173c-0.2-0.6-0.4-1.2-0.6-1.7l-3.8,3.8v2.3v0L483.6,173z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2081_sw0hdxcc1"><path
                            d="M479.2,191.4l5.4-5.4l2.1-2.1c-0.2-0.6-0.3-1.2-0.5-1.8l-7,7V191.4L479.2,191.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2082_sw0hdxcc1"><path
                            d="M493.4,219.5c-0.1-0.7-0.2-1.4-0.2-2.1l-2.7,2.7l0,0l-5.4,5.4h2.3L493.4,219.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2083_sw0hdxcc1"><polygon
                            points="479.2,205.5 484.6,200.2 487.4,197.3 485.1,197.3 479.2,203.2 479.2,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2084_sw0hdxcc1"><path
                            d="M479.2,219.6l5.4-5.4l7.1-7.1c-0.1-0.7-0.2-1.3-0.3-2l-0.9,0.9l0,0l-11.3,11.3V219.6L479.2,219.6z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2085_sw0hdxcc1"><path
                            d="M495,246.2c0-0.8,0-1.5,0-2.3l-4.5,4.5l0,0l-5.4,5.4h2.3L495,246.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2086_sw0hdxcc1"><polygon
                            points="479.2,233.7 484.6,228.4 487.4,225.5 485.1,225.5 479.2,231.4 479.2,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2087_sw0hdxcc1"><path
                            d="M479.2,247.8l5.4-5.4l9.9-9.9c0-0.7-0.1-1.4-0.1-2.2l-3.9,3.9l0,0l-11.3,11.3V247.8L479.2,247.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2088_sw0hdxcc1"><path
                            d="M493.4,276c0.1-0.9,0.2-1.7,0.3-2.6l-3.2,3.2l0,0l-5.4,5.4h2.3L493.4,276z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2089_sw0hdxcc1"><polygon
                            points="479.2,261.9 484.6,256.6 487.4,253.7 485.1,253.7 479.2,259.6 479.2,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2090_sw0hdxcc1"><path
                            d="M479.2,276l5.4-5.4l10.1-10.1c0-0.8,0.1-1.6,0.1-2.4l-4.3,4.3l0,0l-11.3,11.3V276L479.2,276z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2091_sw0hdxcc1"><path
                            d="M487.6,307.6l-2.5,2.5h1.9C487.2,309.3,487.4,308.4,487.6,307.6z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2092_sw0hdxcc1"><polygon
                            points="479.2,290.1 484.6,284.7 487.4,281.9 485.1,281.9 479.2,287.8 479.2,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2093_sw0hdxcc1"><path
                            d="M479.2,304.2l5.4-5.4l6.3-6.3c0.2-0.9,0.3-1.9,0.5-2.8l-0.9,0.9l0,0l-11.3,11.3V304.2L479.2,304.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2094_sw0hdxcc1"><path
                            d="M479.2,318.3l5.4-5.4l2.2-2.2c0.1-0.2,0.1-0.4,0.2-0.6h-1.9l-5.9,5.9V318.3L479.2,318.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2095_sw0hdxcc1"><path
                            d="M479.2,332.4l1.3-1.3c0.4-1.2,0.8-2.4,1.2-3.5l-2.5,2.5V332.4L479.2,332.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2096_sw0hdxcc1"><path
                            d="M451.1,106.9L451.1,106.9c0-0.1,0-0.1,0-0.2V106.9L451.1,106.9z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2097_sw0hdxcc1"><path
                            d="M467,133.2c-0.3-0.5-0.5-1-0.8-1.5l-3.9,3.9l0,0L457,141h2.3L467,133.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2098_sw0hdxcc1"><path
                            d="M451.1,121l5.4-5.4l0.3-0.3c-0.3-0.5-0.6-0.9-0.9-1.4l-4.8,4.8V121L451.1,121z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2099_sw0hdxcc1"><path
                            d="M456.4,129.7l5.6-5.6c-0.3-0.5-0.6-1-0.9-1.4l-10.2,10.2v2.3v0L456.4,129.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2100_sw0hdxcc1"><path
                            d="M470.5,157.9L470.5,157.9l5.5-5.5c-0.2-0.5-0.4-1.1-0.7-1.6l-13.1,13.1l0,0l-5.4,5.4h2.3L470.5,157.9z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2101_sw0hdxcc1"><polygon
                            points="451.1,149.1 456.4,143.8 459.2,141 457,141 451.1,146.9 451.1,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2102_sw0hdxcc1"><path
                            d="M456.4,157.9l14.1-14.1h0l1.2-1.2c-0.2-0.5-0.5-1-0.7-1.6l-8.7,8.7l0,0l-11.3,11.3v2.3v0L456.4,157.9z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2103_sw0hdxcc1"><polygon
                            points="479.2,163.2 479.2,160.9 479.2,160.9 476.4,163.8 476.4,163.8 471,169.1 473.3,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2104_sw0hdxcc1"><polygon
                            points="479.2,175 476.4,177.9 476.4,177.9 462.3,192 462.3,192 457,197.3 459.2,197.3 470.5,186.1    470.5,186.1 479.2,177.3 479.2,175  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2105_sw0hdxcc1"><polygon
                            points="451.1,177.3 456.4,172 459.2,169.1 457,169.1 451.1,175 451.1,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2106_sw0hdxcc1"><polygon
                            points="451.1,191.4 456.4,186.1 470.5,172 470.5,172 473.3,169.1 471,169.1 462.3,177.9 462.3,177.9    451.1,189.1 451.1,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2107_sw0hdxcc1"><polygon
                            points="479.2,191.4 479.2,189.1 479.2,189.1 476.4,192 476.4,192 471,197.3 473.3,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2108_sw0hdxcc1"><polygon
                            points="470.5,214.3 470.5,214.3 479.2,205.5 479.2,203.2 479.2,203.2 476.4,206.1 476.4,206.1    462.3,220.2 462.3,220.2 457,225.5 459.2,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2109_sw0hdxcc1"><polygon
                            points="451.1,203.2 451.1,205.5 451.1,205.5 456.4,200.2 459.2,197.3 457,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2110_sw0hdxcc1"><polygon
                            points="451.1,219.6 456.4,214.3 470.5,200.2 470.5,200.2 473.3,197.3 471,197.3 462.3,206.1 462.3,206.1    451.1,217.3 451.1,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2111_sw0hdxcc1"><polygon
                            points="479.2,219.6 479.2,217.3 479.2,217.3 476.4,220.2 476.4,220.2 471,225.5 473.3,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2112_sw0hdxcc1"><polygon
                            points="470.5,242.5 470.5,242.5 479.2,233.7 479.2,231.4 479.2,231.4 476.4,234.3 476.4,234.3    462.3,248.4 462.3,248.4 457,253.7 459.2,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2113_sw0hdxcc1"><polygon
                            points="451.1,233.7 456.4,228.4 459.2,225.5 457,225.5 451.1,231.4 451.1,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2114_sw0hdxcc1"><polygon
                            points="451.1,247.8 456.4,242.5 470.5,228.4 470.5,228.4 473.3,225.5 471,225.5 462.3,234.3 462.3,234.3    451.1,245.5 451.1,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2115_sw0hdxcc1"><polygon
                            points="479.2,247.8 479.2,245.5 479.2,245.5 476.4,248.4 476.4,248.4 471,253.7 473.3,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2116_sw0hdxcc1"><polygon
                            points="470.5,270.6 470.5,270.6 479.2,261.9 479.2,259.6 479.2,259.6 476.4,262.5 476.4,262.5    462.3,276.5 462.3,276.5 457,281.9 459.2,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2117_sw0hdxcc1"><polygon
                            points="451.1,261.9 456.4,256.6 459.2,253.7 457,253.7 451.1,259.6 451.1,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2118_sw0hdxcc1"><polygon
                            points="451.1,276 456.4,270.6 470.5,256.6 470.5,256.6 473.3,253.7 471,253.7 462.3,262.5 462.3,262.5    451.1,273.7 451.1,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2119_sw0hdxcc1"><polygon
                            points="479.2,276 479.2,273.7 479.2,273.7 476.4,276.5 476.4,276.5 471,281.9 473.3,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2120_sw0hdxcc1"><polygon
                            points="470.5,298.8 470.5,298.8 479.2,290.1 479.2,287.8 479.2,287.8 476.4,290.6 476.4,290.6    462.3,304.7 462.3,304.7 457,310.1 459.2,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2121_sw0hdxcc1"><polygon
                            points="451.1,290.1 456.4,284.7 459.2,281.9 457,281.9 451.1,287.8 451.1,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2122_sw0hdxcc1"><polygon
                            points="451.1,304.2 456.4,298.8 470.5,284.7 470.5,284.7 473.3,281.9 471,281.9 462.3,290.6 462.3,290.6    451.1,301.9 451.1,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2123_sw0hdxcc1"><polygon
                            points="479.2,304.2 479.2,301.9 479.2,301.9 476.4,304.7 476.4,304.7 471,310.1 473.3,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2124_sw0hdxcc1"><polygon
                            points="470.5,327 470.5,327 479.2,318.3 479.2,316 479.2,316 476.4,318.8 476.4,318.8 462.3,332.9    462.3,332.9 457,338.3 459.2,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2125_sw0hdxcc1"><polygon
                            points="451.1,318.3 456.4,312.9 459.2,310.1 457,310.1 451.1,316 451.1,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2126_sw0hdxcc1"><polygon
                            points="451.1,332.4 456.4,327 470.5,312.9 470.5,312.9 473.3,310.1 471,310.1 462.3,318.8 462.3,318.8    451.1,330.1 451.1,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2127_sw0hdxcc1"><polygon
                            points="479.2,332.4 479.2,330.1 479.2,330.1 476.4,332.9 476.4,332.9 471,338.3 473.3,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2128_sw0hdxcc1"><path
                            d="M470.3,355.5c0.7-1.4,1.4-2.9,2-4.3l-10,10l0,0l-5.4,5.4h2.3L470.3,355.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2129_sw0hdxcc1"><polygon
                            points="451.1,346.5 456.4,341.1 459.2,338.3 457,338.3 451.1,344.2 451.1,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2130_sw0hdxcc1"><polygon
                            points="451.1,360.6 456.4,355.2 470.5,341.1 470.5,341.1 473.3,338.3 471,338.3 462.3,347 462.3,347    451.1,358.3 451.1,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2131_sw0hdxcc1"><polygon
                            points="451.1,374.7 456.4,369.3 459.2,366.5 457,366.5 451.1,372.4 451.1,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2132_sw0hdxcc1"><path
                            d="M454.8,382.7l-3.8,3.8v1.8C452.3,386.5,453.6,384.6,454.8,382.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2133_sw0hdxcc1"><path
                            d="M432.5,83.1c-0.4-0.4-0.7-0.8-1.1-1.2l-2.7,2.7h2.3L432.5,83.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2134_sw0hdxcc1"><path
                            d="M422.9,78.7l2.9-2.9c-0.4-0.4-0.8-0.8-1.1-1.2l-1.7,1.7V78.7L422.9,78.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2135_sw0hdxcc1"><path
                            d="M442.3,101.5L442.3,101.5l2.9-2.9c-0.3-0.4-0.7-0.9-1-1.3l-10.1,10.1l0,0l-5.4,5.4h2.3L442.3,101.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2136_sw0hdxcc1"><polygon
                            points="422.9,92.8 428.2,87.4 431.1,84.6 428.8,84.6 422.9,90.5 422.9,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2137_sw0hdxcc1"><path
                            d="M428.2,101.5L439,90.7c-0.3-0.4-0.7-0.8-1-1.3l-3.9,3.9l0,0l-11.3,11.3v2.3v0L428.2,101.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2138_sw0hdxcc1"><path
                            d="M451.1,106.9v-0.2c-0.3-0.4-0.6-0.8-0.9-1.3l-2,2l0,0l-5.4,5.4h2.3L451.1,106.9z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2139_sw0hdxcc1"><polygon
                            points="442.3,129.7 442.3,129.7 451.1,121 451.1,118.7 451.1,118.7 448.2,121.5 448.2,121.5 434.1,135.6    434.1,135.6 428.8,141 431.1,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2140_sw0hdxcc1"><polygon
                            points="428.2,115.6 431.1,112.8 428.8,112.8 422.9,118.7 422.9,121 422.9,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2141_sw0hdxcc1"><polygon
                            points="422.9,135.1 428.2,129.7 442.3,115.6 442.3,115.6 445.2,112.8 442.9,112.8 434.1,121.5    434.1,121.5 422.9,132.8 422.9,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2142_sw0hdxcc1"><polygon
                            points="451.1,132.8 448.2,135.6 448.2,135.6 442.9,141 445.2,141 451.1,135.1 451.1,132.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2143_sw0hdxcc1"><polygon
                            points="442.3,157.9 442.3,157.9 451.1,149.1 451.1,146.9 451.1,146.9 448.2,149.7 448.2,149.7    434.1,163.8 434.1,163.8 428.8,169.1 431.1,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2144_sw0hdxcc1"><polygon
                            points="422.9,149.1 428.2,143.8 431.1,141 428.8,141 422.9,146.9 422.9,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2145_sw0hdxcc1"><polygon
                            points="434.1,149.7 434.1,149.7 422.9,160.9 422.9,163.2 422.9,163.2 428.2,157.9 442.3,143.8    442.3,143.8 445.2,141 442.9,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2146_sw0hdxcc1"><polygon
                            points="451.1,160.9 448.2,163.8 448.2,163.8 442.9,169.1 445.2,169.1 451.1,163.2 451.1,160.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2147_sw0hdxcc1"><polygon
                            points="442.3,186.1 442.3,186.1 451.1,177.3 451.1,175 451.1,175 448.2,177.9 448.2,177.9 434.1,192    434.1,192 428.8,197.3 431.1,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2148_sw0hdxcc1"><polygon
                            points="422.9,177.3 428.2,172 431.1,169.1 428.8,169.1 422.9,175 422.9,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2149_sw0hdxcc1"><polygon
                            points="434.1,177.9 434.1,177.9 422.9,189.1 422.9,191.4 422.9,191.4 428.2,186.1 442.3,172 442.3,172    445.2,169.1 442.9,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2150_sw0hdxcc1"><polygon
                            points="451.1,191.4 451.1,189.1 451.1,189.1 448.2,192 448.2,192 442.9,197.3 445.2,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2151_sw0hdxcc1"><polygon
                            points="451.1,203.2 448.2,206.1 448.2,206.1 434.1,220.2 434.1,220.2 428.8,225.5 431.1,225.5    442.3,214.3 442.3,214.3 451.1,205.5 451.1,203.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2152_sw0hdxcc1"><polygon
                            points="422.9,205.5 428.2,200.2 431.1,197.3 428.8,197.3 422.9,203.2 422.9,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2153_sw0hdxcc1"><polygon
                            points="422.9,219.6 428.2,214.3 442.3,200.2 442.3,200.2 445.2,197.3 442.9,197.3 434.1,206.1    434.1,206.1 422.9,217.3 422.9,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2154_sw0hdxcc1"><polygon
                            points="451.1,219.6 451.1,217.3 451.1,217.3 448.2,220.2 448.2,220.2 442.9,225.5 445.2,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2155_sw0hdxcc1"><polygon
                            points="442.3,242.5 442.3,242.5 451.1,233.7 451.1,231.4 451.1,231.4 448.2,234.3 448.2,234.3    434.1,248.4 434.1,248.4 428.8,253.7 431.1,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2156_sw0hdxcc1"><polygon
                            points="422.9,231.4 422.9,233.7 422.9,233.7 428.2,228.4 431.1,225.5 428.8,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2157_sw0hdxcc1"><polygon
                            points="422.9,247.8 428.2,242.5 442.3,228.4 442.3,228.4 445.2,225.5 442.9,225.5 434.1,234.3    434.1,234.3 422.9,245.5 422.9,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2158_sw0hdxcc1"><polygon
                            points="451.1,247.8 451.1,245.5 451.1,245.5 448.2,248.4 448.2,248.4 442.9,253.7 445.2,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2159_sw0hdxcc1"><polygon
                            points="442.3,270.6 442.3,270.6 451.1,261.9 451.1,259.6 451.1,259.6 448.2,262.5 448.2,262.5    434.1,276.5 434.1,276.5 428.8,281.9 431.1,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2160_sw0hdxcc1"><polygon
                            points="422.9,261.9 428.2,256.6 431.1,253.7 428.8,253.7 422.9,259.6 422.9,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2161_sw0hdxcc1"><polygon
                            points="422.9,276 428.2,270.6 442.3,256.6 442.3,256.6 445.2,253.7 442.9,253.7 434.1,262.5 434.1,262.5    422.9,273.7 422.9,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2162_sw0hdxcc1"><polygon
                            points="451.1,276 451.1,273.7 451.1,273.7 448.2,276.5 448.2,276.5 442.9,281.9 445.2,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2163_sw0hdxcc1"><polygon
                            points="442.3,298.8 442.3,298.8 451.1,290.1 451.1,287.8 451.1,287.8 448.2,290.6 448.2,290.6    434.1,304.7 434.1,304.7 428.8,310.1 431.1,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2164_sw0hdxcc1"><polygon
                            points="422.9,290.1 428.2,284.7 431.1,281.9 428.8,281.9 422.9,287.8 422.9,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2165_sw0hdxcc1"><polygon
                            points="422.9,304.2 428.2,298.8 442.3,284.7 442.3,284.7 445.2,281.9 442.9,281.9 434.1,290.6    434.1,290.6 422.9,301.9 422.9,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2166_sw0hdxcc1"><polygon
                            points="451.1,304.2 451.1,301.9 451.1,301.9 448.2,304.7 448.2,304.7 442.9,310.1 445.2,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2167_sw0hdxcc1"><polygon
                            points="442.3,327 442.3,327 451.1,318.3 451.1,316 451.1,316 448.2,318.8 448.2,318.8 434.1,332.9    434.1,332.9 428.8,338.3 431.1,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2168_sw0hdxcc1"><polygon
                            points="422.9,318.3 428.2,312.9 431.1,310.1 428.8,310.1 422.9,316 422.9,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2169_sw0hdxcc1"><polygon
                            points="422.9,332.4 428.2,327 442.3,312.9 442.3,312.9 445.2,310.1 442.9,310.1 434.1,318.8 434.1,318.8    422.9,330.1 422.9,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2170_sw0hdxcc1"><polygon
                            points="451.1,332.4 451.1,330.1 451.1,330.1 448.2,332.9 448.2,332.9 442.9,338.3 445.2,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2171_sw0hdxcc1"><polygon
                            points="442.3,355.2 442.3,355.2 451.1,346.5 451.1,344.2 451.1,344.2 448.2,347 448.2,347 434.1,361.1    434.1,361.1 428.8,366.5 431.1,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2172_sw0hdxcc1"><polygon
                            points="422.9,346.5 428.2,341.1 431.1,338.3 428.8,338.3 422.9,344.2 422.9,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2173_sw0hdxcc1"><polygon
                            points="422.9,360.6 428.2,355.2 442.3,341.1 442.3,341.1 445.2,338.3 442.9,338.3 434.1,347 434.1,347    422.9,358.3 422.9,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2174_sw0hdxcc1"><polygon
                            points="451.1,360.6 451.1,358.3 451.1,358.3 448.2,361.1 448.2,361.1 442.9,366.5 445.2,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2175_sw0hdxcc1"><polygon
                            points="442.3,383.4 442.3,383.4 451.1,374.7 451.1,372.4 451.1,372.4 448.2,375.2 448.2,375.2    434.1,389.3 434.1,389.3 428.8,394.7 431.1,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2176_sw0hdxcc1"><polygon
                            points="422.9,374.7 428.2,369.3 431.1,366.5 428.8,366.5 422.9,372.4 422.9,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2177_sw0hdxcc1"><polygon
                            points="422.9,388.8 428.2,383.4 442.3,369.3 442.3,369.3 445.2,366.5 442.9,366.5 434.1,375.2    434.1,375.2 422.9,386.5 422.9,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2178_sw0hdxcc1"><path
                            d="M450,389.8c0.4-0.5,0.7-1,1-1.5v-1.8v0l-2.8,2.8l0,0l-5.4,5.4h2.3L450,389.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2179_sw0hdxcc1"><polygon
                            points="422.9,402.9 428.2,397.5 431.1,394.7 428.8,394.7 422.9,400.6 422.9,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2180_sw0hdxcc1"><polygon
                            points="422.9,417 428.2,411.6 442.3,397.5 442.3,397.5 445.2,394.7 442.9,394.7 434.1,403.4 434.1,403.4    422.9,414.7 422.9,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2181_sw0hdxcc1"><path
                            d="M403.7,55.5c-0.4-0.3-0.8-0.7-1.3-1l-1.9,1.9h2.3L403.7,55.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2182_sw0hdxcc1"><path
                            d="M394.7,50.5L394.7,50.5l1.1-1.1c-0.4-0.3-0.8-0.6-1.1-0.8V50.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2183_sw0hdxcc1"><path
                            d="M414.1,73.3L414.1,73.3l4.6-4.6c-0.4-0.4-0.8-0.7-1.2-1.1l-11.6,11.6l0,0l-5.4,5.4h2.3L414.1,73.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2184_sw0hdxcc1"><polygon
                            points="394.7,64.6 400,59.2 402.9,56.4 400.6,56.4 394.7,62.3 394.7,64.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2185_sw0hdxcc1"><path
                            d="M405.9,65.1l-11.3,11.3v2.3v0l5.4-5.4L411.3,62c-0.4-0.4-0.8-0.7-1.2-1.1L405.9,65.1L405.9,65.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2186_sw0hdxcc1"><polygon
                            points="422.9,78.7 422.9,76.4 422.9,76.4 420,79.2 420,79.2 414.7,84.6 417,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2187_sw0hdxcc1"><polygon
                            points="414.1,101.5 414.1,101.5 422.9,92.8 422.9,90.5 422.9,90.5 420,93.3 420,93.3 405.9,107.4    405.9,107.4 400.6,112.8 402.9,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2188_sw0hdxcc1"><polygon
                            points="394.7,92.8 400,87.4 402.9,84.6 400.6,84.6 394.7,90.5 394.7,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2189_sw0hdxcc1"><polygon
                            points="394.7,106.9 400,101.5 414.1,87.4 414.1,87.4 417,84.6 414.7,84.6 405.9,93.3 405.9,93.3    394.7,104.6 394.7,106.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2190_sw0hdxcc1"><polygon
                            points="422.9,104.6 420,107.4 420,107.4 414.7,112.8 417,112.8 422.9,106.9 422.9,104.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2191_sw0hdxcc1"><polygon
                            points="422.9,118.7 420,121.5 420,121.5 405.9,135.6 405.9,135.6 400.6,141 402.9,141 414.1,129.7    414.1,129.7 422.9,121 422.9,118.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2192_sw0hdxcc1"><polygon
                            points="394.7,121 400,115.6 402.9,112.8 400.6,112.8 394.7,118.7 394.7,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2193_sw0hdxcc1"><polygon
                            points="405.9,121.5 405.9,121.5 394.7,132.8 394.7,135.1 394.7,135.1 400,129.7 414.1,115.6 414.1,115.6    417,112.8 414.7,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2194_sw0hdxcc1"><polygon
                            points="422.9,135.1 422.9,132.8 422.9,132.8 420,135.6 420,135.6 414.7,141 417,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2195_sw0hdxcc1"><polygon
                            points="414.1,157.9 414.1,157.9 422.9,149.1 422.9,146.9 422.9,146.9 420,149.7 420,149.7 405.9,163.8    405.9,163.8 400.6,169.1 402.9,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2196_sw0hdxcc1"><polygon
                            points="394.7,146.9 394.7,149.1 394.7,149.1 400,143.8 402.9,141 400.6,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2197_sw0hdxcc1"><polygon
                            points="394.7,163.2 400,157.9 414.1,143.8 414.1,143.8 417,141 414.7,141 405.9,149.7 405.9,149.7    394.7,160.9 394.7,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2198_sw0hdxcc1"><polygon
                            points="422.9,160.9 420,163.8 420,163.8 414.7,169.1 417,169.1 422.9,163.2 422.9,160.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2199_sw0hdxcc1"><polygon
                            points="414.1,186.1 414.1,186.1 422.9,177.3 422.9,175 422.9,175 420,177.9 420,177.9 405.9,192    405.9,192 400.6,197.3 402.9,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2200_sw0hdxcc1"><polygon
                            points="394.7,177.3 400,172 402.9,169.1 400.6,169.1 394.7,175 394.7,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2201_sw0hdxcc1"><polygon
                            points="405.9,177.9 405.9,177.9 394.7,189.1 394.7,191.4 394.7,191.4 400,186.1 414.1,172 414.1,172    417,169.1 414.7,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2202_sw0hdxcc1"><polygon
                            points="422.9,189.1 420,192 420,192 414.7,197.3 417,197.3 422.9,191.4 422.9,189.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2203_sw0hdxcc1"><polygon
                            points="414.1,214.3 414.1,214.3 422.9,205.5 422.9,203.2 422.9,203.2 420,206.1 420,206.1 405.9,220.2    405.9,220.2 400.6,225.5 402.9,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2204_sw0hdxcc1"><polygon
                            points="394.7,205.5 400,200.2 402.9,197.3 400.6,197.3 394.7,203.2 394.7,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2205_sw0hdxcc1"><polygon
                            points="405.9,206.1 405.9,206.1 394.7,217.3 394.7,219.6 394.7,219.6 400,214.3 414.1,200.2 414.1,200.2    417,197.3 414.7,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2206_sw0hdxcc1"><polygon
                            points="422.9,219.6 422.9,217.3 422.9,217.3 420,220.2 420,220.2 414.7,225.5 417,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2207_sw0hdxcc1"><polygon
                            points="422.9,231.4 420,234.3 420,234.3 405.9,248.4 405.9,248.4 400.6,253.7 402.9,253.7 414.1,242.5    414.1,242.5 422.9,233.7 422.9,231.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2208_sw0hdxcc1"><polygon
                            points="394.7,233.7 400,228.4 402.9,225.5 400.6,225.5 394.7,231.4 394.7,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2209_sw0hdxcc1"><polygon
                            points="394.7,247.8 400,242.5 414.1,228.4 414.1,228.4 417,225.5 414.7,225.5 405.9,234.3 405.9,234.3    394.7,245.5 394.7,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2210_sw0hdxcc1"><polygon
                            points="422.9,247.8 422.9,245.5 422.9,245.5 420,248.4 420,248.4 414.7,253.7 417,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2211_sw0hdxcc1"><polygon
                            points="414.1,270.6 414.1,270.6 422.9,261.9 422.9,259.6 422.9,259.6 420,262.5 420,262.5 405.9,276.5    405.9,276.5 400.6,281.9 402.9,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2212_sw0hdxcc1"><polygon
                            points="394.7,259.6 394.7,261.9 394.7,261.9 400,256.6 402.9,253.7 400.6,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2213_sw0hdxcc1"><polygon
                            points="394.7,276 400,270.6 414.1,256.6 414.1,256.6 417,253.7 414.7,253.7 405.9,262.5 405.9,262.5    394.7,273.7 394.7,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2214_sw0hdxcc1"><polygon
                            points="422.9,276 422.9,273.7 422.9,273.7 420,276.5 420,276.5 414.7,281.9 417,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2215_sw0hdxcc1"><polygon
                            points="414.1,298.8 414.1,298.8 422.9,290.1 422.9,287.8 422.9,287.8 420,290.6 420,290.6 405.9,304.7    405.9,304.7 400.6,310.1 402.9,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2216_sw0hdxcc1"><polygon
                            points="394.7,290.1 400,284.7 402.9,281.9 400.6,281.9 394.7,287.8 394.7,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2217_sw0hdxcc1"><polygon
                            points="394.7,304.2 400,298.8 414.1,284.7 414.1,284.7 417,281.9 414.7,281.9 405.9,290.6 405.9,290.6    394.7,301.9 394.7,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2218_sw0hdxcc1"><polygon
                            points="422.9,304.2 422.9,301.9 422.9,301.9 420,304.7 420,304.7 414.7,310.1 417,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2219_sw0hdxcc1"><polygon
                            points="414.1,327 414.1,327 422.9,318.3 422.9,316 422.9,316 420,318.8 420,318.8 405.9,332.9    405.9,332.9 400.6,338.3 402.9,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2220_sw0hdxcc1"><polygon
                            points="394.7,318.3 400,312.9 402.9,310.1 400.6,310.1 394.7,316 394.7,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2221_sw0hdxcc1"><polygon
                            points="394.7,332.4 400,327 414.1,312.9 414.1,312.9 417,310.1 414.7,310.1 405.9,318.8 405.9,318.8    394.7,330.1 394.7,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2222_sw0hdxcc1"><polygon
                            points="422.9,332.4 422.9,330.1 422.9,330.1 420,332.9 420,332.9 414.7,338.3 417,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2223_sw0hdxcc1"><polygon
                            points="414.1,355.2 414.1,355.2 422.9,346.5 422.9,344.2 422.9,344.2 420,347 420,347 405.9,361.1    405.9,361.1 400.6,366.5 402.9,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2224_sw0hdxcc1"><polygon
                            points="394.7,346.5 400,341.1 402.9,338.3 400.6,338.3 394.7,344.2 394.7,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2225_sw0hdxcc1"><polygon
                            points="394.7,360.6 400,355.2 414.1,341.1 414.1,341.1 417,338.3 414.7,338.3 405.9,347 405.9,347    394.7,358.3 394.7,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2226_sw0hdxcc1"><polygon
                            points="422.9,360.6 422.9,358.3 422.9,358.3 420,361.1 420,361.1 414.7,366.5 417,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2227_sw0hdxcc1"><polygon
                            points="414.1,383.4 414.1,383.4 422.9,374.7 422.9,372.4 422.9,372.4 420,375.2 420,375.2 405.9,389.3    405.9,389.3 400.6,394.7 402.9,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2228_sw0hdxcc1"><polygon
                            points="394.7,374.7 400,369.3 402.9,366.5 400.6,366.5 394.7,372.4 394.7,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2229_sw0hdxcc1"><polygon
                            points="394.7,388.8 400,383.4 414.1,369.3 414.1,369.3 417,366.5 414.7,366.5 405.9,375.2 405.9,375.2    394.7,386.5 394.7,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2230_sw0hdxcc1"><polygon
                            points="422.9,388.8 422.9,386.5 422.9,386.5 420,389.3 420,389.3 414.7,394.7 417,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2231_sw0hdxcc1"><polygon
                            points="414.1,411.6 414.1,411.6 422.9,402.9 422.9,400.6 422.9,400.6 420,403.4 420,403.4 405.9,417.5    405.9,417.5 400.6,422.9 402.9,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2232_sw0hdxcc1"><polygon
                            points="394.7,402.9 400,397.5 402.9,394.7 400.6,394.7 394.7,400.6 394.7,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2233_sw0hdxcc1"><polygon
                            points="394.7,417 400,411.6 414.1,397.5 414.1,397.5 417,394.7 414.7,394.7 405.9,403.4 405.9,403.4    394.7,414.7 394.7,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2234_sw0hdxcc1"><polygon
                            points="422.9,417 422.9,414.7 422.9,414.7 420,417.5 420,417.5 414.7,422.9 417,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2235_sw0hdxcc1"><polygon
                            points="394.7,431.1 400,425.7 402.9,422.9 400.6,422.9 394.7,428.8 394.7,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2236_sw0hdxcc1"><polygon
                            points="394.7,445.1 400,439.8 414.1,425.7 414.1,425.7 417,422.9 414.7,422.9 405.9,431.6 405.9,431.6    394.7,442.9 394.7,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2237_sw0hdxcc1"><path
                            d="M385.9,45.1L385.9,45.1l1.7-1.7c-0.5-0.3-0.9-0.6-1.4-0.9l-8.5,8.5l0,0l-5.4,5.4h2.3L385.9,45.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2238_sw0hdxcc1"><path
                            d="M366.5,36.4l3.8-3.8c-0.5-0.3-1-0.5-1.5-0.8l-2.3,2.3V36.4L366.5,36.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2239_sw0hdxcc1"><path
                            d="M366.5,50.5L366.5,50.5l5.4-5.4l7.3-7.3c-0.5-0.3-0.9-0.6-1.4-0.9l-11.2,11.2V50.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2240_sw0hdxcc1"><path
                            d="M394.5,48.4l-2.7,2.7l0,0l-5.4,5.4h2.3l5.9-5.9v-2C394.6,48.5,394.5,48.4,394.5,48.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2241_sw0hdxcc1"><polygon
                            points="385.9,73.3 385.9,73.3 394.7,64.6 394.7,62.3 394.7,62.3 391.8,65.1 391.8,65.1 377.7,79.2    377.7,79.2 372.4,84.6 374.7,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2242_sw0hdxcc1"><polygon
                            points="366.5,64.6 371.8,59.2 374.7,56.4 372.4,56.4 366.5,62.3 366.5,64.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2243_sw0hdxcc1"><polygon
                            points="377.7,65.1 377.7,65.1 366.5,76.4 366.5,78.7 366.5,78.7 371.8,73.3 385.9,59.2 385.9,59.2    388.8,56.4 386.5,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2244_sw0hdxcc1"><polygon
                            points="394.7,76.4 391.8,79.2 391.8,79.2 386.5,84.6 388.8,84.6 394.7,78.7 394.7,76.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2245_sw0hdxcc1"><polygon
                            points="385.9,101.5 385.9,101.5 394.7,92.8 394.7,90.5 394.7,90.5 391.8,93.3 391.8,93.3 377.7,107.4    377.7,107.4 372.4,112.8 374.7,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2246_sw0hdxcc1"><polygon
                            points="366.5,92.8 371.8,87.4 374.7,84.6 372.4,84.6 366.5,90.5 366.5,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2247_sw0hdxcc1"><polygon
                            points="377.7,93.3 377.7,93.3 366.5,104.6 366.5,106.9 366.5,106.9 371.8,101.5 385.9,87.4 385.9,87.4    388.8,84.6 386.5,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2248_sw0hdxcc1"><polygon
                            points="394.7,106.9 394.7,104.6 394.7,104.6 391.8,107.4 391.8,107.4 386.5,112.8 388.8,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2249_sw0hdxcc1"><polygon
                            points="385.9,129.7 385.9,129.7 394.7,121 394.7,118.7 394.7,118.7 391.8,121.5 391.8,121.5 377.7,135.6    377.7,135.6 372.4,141 374.7,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2250_sw0hdxcc1"><polygon
                            points="366.5,121 371.8,115.6 374.7,112.8 372.4,112.8 366.5,118.7 366.5,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2251_sw0hdxcc1"><polygon
                            points="366.5,135.1 371.8,129.7 385.9,115.6 385.9,115.6 388.8,112.8 386.5,112.8 377.7,121.5    377.7,121.5 366.5,132.8 366.5,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2252_sw0hdxcc1"><polygon
                            points="394.7,132.8 391.8,135.6 391.8,135.6 386.5,141 388.8,141 394.7,135.1 394.7,132.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2253_sw0hdxcc1"><polygon
                            points="394.7,146.9 391.8,149.7 391.8,149.7 377.7,163.8 377.7,163.8 372.4,169.1 374.7,169.1    385.9,157.9 385.9,157.9 394.7,149.1 394.7,146.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2254_sw0hdxcc1"><polygon
                            points="366.5,149.1 371.8,143.8 374.7,141 372.4,141 366.5,146.9 366.5,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2255_sw0hdxcc1"><polygon
                            points="377.7,149.7 377.7,149.7 366.5,160.9 366.5,163.2 366.5,163.2 371.8,157.9 385.9,143.8    385.9,143.8 388.8,141 386.5,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2256_sw0hdxcc1"><polygon
                            points="394.7,163.2 394.7,160.9 394.7,160.9 391.8,163.8 391.8,163.8 386.5,169.1 388.8,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2257_sw0hdxcc1"><polygon
                            points="385.9,186.1 385.9,186.1 394.7,177.3 394.7,175 394.7,175 391.8,177.9 391.8,177.9 377.7,192    377.7,192 372.4,197.3 374.7,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2258_sw0hdxcc1"><polygon
                            points="366.5,175 366.5,177.3 366.5,177.3 371.8,172 374.7,169.1 372.4,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2259_sw0hdxcc1"><polygon
                            points="366.5,191.4 371.8,186.1 385.9,172 385.9,172 388.8,169.1 386.5,169.1 377.7,177.9 377.7,177.9    366.5,189.1 366.5,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2260_sw0hdxcc1"><polygon
                            points="394.7,189.1 391.8,192 391.8,192 386.5,197.3 388.8,197.3 394.7,191.4 394.7,189.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2261_sw0hdxcc1"><polygon
                            points="385.9,214.3 385.9,214.3 394.7,205.5 394.7,203.2 394.7,203.2 391.8,206.1 391.8,206.1    377.7,220.2 377.7,220.2 372.4,225.5 374.7,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2262_sw0hdxcc1"><polygon
                            points="366.5,205.5 371.8,200.2 374.7,197.3 372.4,197.3 366.5,203.2 366.5,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2263_sw0hdxcc1"><polygon
                            points="377.7,206.1 377.7,206.1 366.5,217.3 366.5,219.6 366.5,219.6 371.8,214.3 385.9,200.2    385.9,200.2 388.8,197.3 386.5,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2264_sw0hdxcc1"><polygon
                            points="394.7,217.3 391.8,220.2 391.8,220.2 386.5,225.5 388.8,225.5 394.7,219.6 394.7,217.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2265_sw0hdxcc1"><polygon
                            points="385.9,242.5 385.9,242.5 394.7,233.7 394.7,231.4 394.7,231.4 391.8,234.3 391.8,234.3    377.7,248.4 377.7,248.4 372.4,253.7 374.7,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2266_sw0hdxcc1"><polygon
                            points="366.5,233.7 371.8,228.4 374.7,225.5 372.4,225.5 366.5,231.4 366.5,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2267_sw0hdxcc1"><polygon
                            points="377.7,234.3 377.7,234.3 366.5,245.5 366.5,247.8 366.5,247.8 371.8,242.5 385.9,228.4    385.9,228.4 388.8,225.5 386.5,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2268_sw0hdxcc1"><polygon
                            points="394.7,247.8 394.7,245.5 394.7,245.5 391.8,248.4 391.8,248.4 386.5,253.7 388.8,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2269_sw0hdxcc1"><polygon
                            points="394.7,259.6 391.8,262.5 391.8,262.5 377.7,276.5 377.7,276.5 372.4,281.9 374.7,281.9    385.9,270.6 385.9,270.6 394.7,261.9 394.7,259.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2270_sw0hdxcc1"><polygon
                            points="366.5,261.9 371.8,256.6 374.7,253.7 372.4,253.7 366.5,259.6 366.5,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2271_sw0hdxcc1"><polygon
                            points="366.5,276 371.8,270.6 385.9,256.6 385.9,256.6 388.8,253.7 386.5,253.7 377.7,262.5 377.7,262.5    366.5,273.7 366.5,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2272_sw0hdxcc1"><polygon
                            points="394.7,276 394.7,273.7 394.7,273.7 391.8,276.5 391.8,276.5 386.5,281.9 388.8,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2273_sw0hdxcc1"><polygon
                            points="385.9,298.8 385.9,298.8 394.7,290.1 394.7,287.8 394.7,287.8 391.8,290.6 391.8,290.6    377.7,304.7 377.7,304.7 372.4,310.1 374.7,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2274_sw0hdxcc1"><polygon
                            points="366.5,287.8 366.5,290.1 366.5,290.1 371.8,284.7 374.7,281.9 372.4,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2275_sw0hdxcc1"><polygon
                            points="366.5,304.2 371.8,298.8 385.9,284.7 385.9,284.7 388.8,281.9 386.5,281.9 377.7,290.6    377.7,290.6 366.5,301.9 366.5,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2276_sw0hdxcc1"><polygon
                            points="394.7,304.2 394.7,301.9 394.7,301.9 391.8,304.7 391.8,304.7 386.5,310.1 388.8,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2277_sw0hdxcc1"><polygon
                            points="385.9,327 385.9,327 394.7,318.3 394.7,316 394.7,316 391.8,318.8 391.8,318.8 377.7,332.9    377.7,332.9 372.4,338.3 374.7,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2278_sw0hdxcc1"><polygon
                            points="366.5,318.3 371.8,312.9 374.7,310.1 372.4,310.1 366.5,316 366.5,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2279_sw0hdxcc1"><polygon
                            points="366.5,332.4 371.8,327 385.9,312.9 385.9,312.9 388.8,310.1 386.5,310.1 377.7,318.8 377.7,318.8    366.5,330.1 366.5,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2280_sw0hdxcc1"><polygon
                            points="394.7,332.4 394.7,330.1 394.7,330.1 391.8,332.9 391.8,332.9 386.5,338.3 388.8,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2281_sw0hdxcc1"><polygon
                            points="385.9,355.2 385.9,355.2 394.7,346.5 394.7,344.2 394.7,344.2 391.8,347 391.8,347 377.7,361.1    377.7,361.1 372.4,366.5 374.7,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2282_sw0hdxcc1"><polygon
                            points="366.5,346.5 371.8,341.1 374.7,338.3 372.4,338.3 366.5,344.2 366.5,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2283_sw0hdxcc1"><polygon
                            points="366.5,360.6 371.8,355.2 385.9,341.1 385.9,341.1 388.8,338.3 386.5,338.3 377.7,347 377.7,347    366.5,358.3 366.5,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2284_sw0hdxcc1"><polygon
                            points="394.7,360.6 394.7,358.3 394.7,358.3 391.8,361.1 391.8,361.1 386.5,366.5 388.8,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2285_sw0hdxcc1"><polygon
                            points="385.9,383.4 385.9,383.4 394.7,374.7 394.7,372.4 394.7,372.4 391.8,375.2 391.8,375.2    377.7,389.3 377.7,389.3 372.4,394.7 374.7,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2286_sw0hdxcc1"><polygon
                            points="366.5,374.7 371.8,369.3 374.7,366.5 372.4,366.5 366.5,372.4 366.5,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2287_sw0hdxcc1"><polygon
                            points="366.5,388.8 371.8,383.4 385.9,369.3 385.9,369.3 388.8,366.5 386.5,366.5 377.7,375.2    377.7,375.2 366.5,386.5 366.5,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2288_sw0hdxcc1"><polygon
                            points="394.7,388.8 394.7,386.5 394.7,386.5 391.8,389.3 391.8,389.3 386.5,394.7 388.8,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2289_sw0hdxcc1"><polygon
                            points="385.9,411.6 385.9,411.6 394.7,402.9 394.7,400.6 394.7,400.6 391.8,403.4 391.8,403.4    377.7,417.5 377.7,417.5 372.4,422.9 374.7,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2290_sw0hdxcc1"><polygon
                            points="366.5,402.9 371.8,397.5 374.7,394.7 372.4,394.7 366.5,400.6 366.5,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2291_sw0hdxcc1"><polygon
                            points="366.5,417 371.8,411.6 385.9,397.5 385.9,397.5 388.8,394.7 386.5,394.7 377.7,403.4 377.7,403.4    366.5,414.7 366.5,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2292_sw0hdxcc1"><polygon
                            points="394.7,417 394.7,414.7 394.7,414.7 391.8,417.5 391.8,417.5 386.5,422.9 388.8,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2293_sw0hdxcc1"><polygon
                            points="385.9,439.8 385.9,439.8 394.7,431.1 394.7,428.8 394.7,428.8 391.8,431.6 391.8,431.6    377.7,445.7 377.7,445.7 372.4,451 374.7,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2294_sw0hdxcc1"><polygon
                            points="366.5,431.1 371.8,425.7 374.7,422.9 372.4,422.9 366.5,428.8 366.5,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2295_sw0hdxcc1"><polygon
                            points="366.5,445.1 371.8,439.8 385.9,425.7 385.9,425.7 388.8,422.9 386.5,422.9 377.7,431.6    377.7,431.6 366.5,442.9 366.5,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2296_sw0hdxcc1"><path
                            d="M388.3,451c0.5-0.3,1-0.7,1.5-1l4.9-4.9v-2.3v0l-2.8,2.8l0,0l-5.4,5.4H388.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2297_sw0hdxcc1"><polygon
                            points="366.5,459.2 371.8,453.9 374.7,451 372.4,451 366.5,456.9 366.5,459.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2298_sw0hdxcc1"><path
                            d="M382.7,454.8c1.9-1.2,3.8-2.5,5.6-3.8h-1.8L382.7,454.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2299_sw0hdxcc1"><path
                            d="M349.5,22.8l-5.4,5.4h2.3l5.2-5.2c-0.5-0.2-1-0.5-1.6-0.7L349.5,22.8L349.5,22.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2300_sw0hdxcc1"><path
                            d="M338.3,22.3L338.3,22.3l3.6-3.6c-0.5-0.2-1.1-0.4-1.6-0.7l-2,2V22.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2301_sw0hdxcc1"><path
                            d="M361.2,27.6c-0.5-0.3-1-0.5-1.5-0.8l-1.4,1.4h2.3L361.2,27.6z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2302_sw0hdxcc1"><polygon
                            points="357.7,45.1 357.7,45.1 366.5,36.4 366.5,34.1 366.5,34.1 363.6,36.9 363.6,36.9 349.5,51 349.5,51    344.2,56.4 346.5,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2303_sw0hdxcc1"><polygon
                            points="338.3,34.1 338.3,36.4 338.3,36.4 343.6,31 346.5,28.2 344.2,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2304_sw0hdxcc1"><polygon
                            points="338.3,50.5 343.6,45.1 357.7,31 357.7,31 360.6,28.2 358.3,28.2 349.5,36.9 349.5,36.9 338.3,48.2    338.3,50.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2305_sw0hdxcc1"><polygon
                            points="366.5,48.2 363.6,51 363.6,51 358.3,56.4 360.6,56.4 366.5,50.5 366.5,48.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2306_sw0hdxcc1"><polygon
                            points="357.7,73.3 357.7,73.3 366.5,64.6 366.5,62.3 366.5,62.3 363.6,65.1 363.6,65.1 349.5,79.2    349.5,79.2 344.2,84.6 346.5,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2307_sw0hdxcc1"><polygon
                            points="338.3,64.6 343.6,59.2 346.5,56.4 344.2,56.4 338.3,62.3 338.3,64.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2308_sw0hdxcc1"><polygon
                            points="349.5,65.1 349.5,65.1 338.3,76.4 338.3,78.7 338.3,78.7 343.6,73.3 357.7,59.2 357.7,59.2    360.6,56.4 358.3,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2309_sw0hdxcc1"><polygon
                            points="366.5,76.4 363.6,79.2 363.6,79.2 358.3,84.6 360.6,84.6 366.5,78.7 366.5,76.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2310_sw0hdxcc1"><polygon
                            points="357.7,101.5 357.7,101.5 366.5,92.8 366.5,90.5 366.5,90.5 363.6,93.3 363.6,93.3 349.5,107.4    349.5,107.4 344.2,112.8 346.5,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2311_sw0hdxcc1"><polygon
                            points="338.3,92.8 343.6,87.4 346.5,84.6 344.2,84.6 338.3,90.5 338.3,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2312_sw0hdxcc1"><polygon
                            points="349.5,93.3 349.5,93.3 338.3,104.6 338.3,106.9 338.3,106.9 343.6,101.5 357.7,87.4 357.7,87.4    360.6,84.6 358.3,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2313_sw0hdxcc1"><polygon
                            points="366.5,104.6 363.6,107.4 363.6,107.4 358.3,112.8 360.6,112.8 366.5,106.9 366.5,104.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2314_sw0hdxcc1"><polygon
                            points="357.7,129.7 357.7,129.7 366.5,121 366.5,118.7 366.5,118.7 363.6,121.5 363.6,121.5 349.5,135.6    349.5,135.6 344.2,141 346.5,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2315_sw0hdxcc1"><polygon
                            points="338.3,121 343.6,115.6 346.5,112.8 344.2,112.8 338.3,118.7 338.3,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2316_sw0hdxcc1"><polygon
                            points="349.5,121.5 349.5,121.5 338.3,132.8 338.3,135.1 338.3,135.1 343.6,129.7 357.7,115.6    357.7,115.6 360.6,112.8 358.3,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2317_sw0hdxcc1"><polygon
                            points="366.5,135.1 366.5,132.8 366.5,132.8 363.6,135.6 363.6,135.6 358.3,141 360.6,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2318_sw0hdxcc1"><polygon
                            points="357.7,157.9 357.7,157.9 366.5,149.1 366.5,146.9 366.5,146.9 363.6,149.7 363.6,149.7    349.5,163.8 349.5,163.8 344.2,169.1 346.5,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2319_sw0hdxcc1"><polygon
                            points="338.3,149.1 343.6,143.8 346.5,141 344.2,141 338.3,146.9 338.3,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2320_sw0hdxcc1"><polygon
                            points="338.3,163.2 343.6,157.9 357.7,143.8 357.7,143.8 360.6,141 358.3,141 349.5,149.7 349.5,149.7    338.3,160.9 338.3,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2321_sw0hdxcc1"><polygon
                            points="366.5,160.9 363.6,163.8 363.6,163.8 358.3,169.1 360.6,169.1 366.5,163.2 366.5,160.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2322_sw0hdxcc1"><polygon
                            points="366.5,175 363.6,177.9 363.6,177.9 349.5,192 349.5,192 344.2,197.3 346.5,197.3 357.7,186.1    357.7,186.1 366.5,177.3 366.5,175  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2323_sw0hdxcc1"><polygon
                            points="338.3,177.3 343.6,172 346.5,169.1 344.2,169.1 338.3,175 338.3,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2324_sw0hdxcc1"><polygon
                            points="349.5,177.9 349.5,177.9 338.3,189.1 338.3,191.4 338.3,191.4 343.6,186.1 357.7,172 357.7,172    360.6,169.1 358.3,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2325_sw0hdxcc1"><polygon
                            points="366.5,191.4 366.5,189.1 366.5,189.1 363.6,192 363.6,192 358.3,197.3 360.6,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2326_sw0hdxcc1"><polygon
                            points="357.7,214.3 357.7,214.3 366.5,205.5 366.5,203.2 366.5,203.2 363.6,206.1 363.6,206.1    349.5,220.2 349.5,220.2 344.2,225.5 346.5,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2327_sw0hdxcc1"><polygon
                            points="338.3,203.2 338.3,205.5 338.3,205.5 343.6,200.2 346.5,197.3 344.2,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2328_sw0hdxcc1"><polygon
                            points="338.3,219.6 343.6,214.3 357.7,200.2 357.7,200.2 360.6,197.3 358.3,197.3 349.5,206.1    349.5,206.1 338.3,217.3 338.3,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2329_sw0hdxcc1"><polygon
                            points="366.5,217.3 363.6,220.2 363.6,220.2 358.3,225.5 360.6,225.5 366.5,219.6 366.5,217.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2330_sw0hdxcc1"><polygon
                            points="357.7,242.5 357.7,242.5 366.5,233.7 366.5,231.4 366.5,231.4 363.6,234.3 363.6,234.3    349.5,248.4 349.5,248.4 344.2,253.7 346.5,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2331_sw0hdxcc1"><polygon
                            points="338.3,233.7 343.6,228.4 346.5,225.5 344.2,225.5 338.3,231.4 338.3,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2332_sw0hdxcc1"><polygon
                            points="349.5,234.3 349.5,234.3 338.3,245.5 338.3,247.8 338.3,247.8 343.6,242.5 357.7,228.4    357.7,228.4 360.6,225.5 358.3,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2333_sw0hdxcc1"><polygon
                            points="366.5,245.5 363.6,248.4 363.6,248.4 358.3,253.7 360.6,253.7 366.5,247.8 366.5,245.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2334_sw0hdxcc1"><polygon
                            points="357.7,270.6 357.7,270.6 366.5,261.9 366.5,259.6 366.5,259.6 363.6,262.5 363.6,262.5    349.5,276.5 349.5,276.5 344.2,281.9 346.5,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2335_sw0hdxcc1"><polygon
                            points="338.3,261.9 343.6,256.6 346.5,253.7 344.2,253.7 338.3,259.6 338.3,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2336_sw0hdxcc1"><polygon
                            points="349.5,262.5 349.5,262.5 338.3,273.7 338.3,276 338.3,276 343.6,270.6 357.7,256.6 357.7,256.6    360.6,253.7 358.3,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2337_sw0hdxcc1"><polygon
                            points="366.5,276 366.5,273.7 366.5,273.7 363.6,276.5 363.6,276.5 358.3,281.9 360.6,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2338_sw0hdxcc1"><polygon
                            points="366.5,287.8 363.6,290.6 363.6,290.6 349.5,304.7 349.5,304.7 344.2,310.1 346.5,310.1    357.7,298.8 357.7,298.8 366.5,290.1 366.5,287.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2339_sw0hdxcc1"><polygon
                            points="338.3,290.1 343.6,284.7 346.5,281.9 344.2,281.9 338.3,287.8 338.3,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2340_sw0hdxcc1"><polygon
                            points="338.3,304.2 343.6,298.8 357.7,284.7 357.7,284.7 360.6,281.9 358.3,281.9 349.5,290.6    349.5,290.6 338.3,301.9 338.3,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2341_sw0hdxcc1"><polygon
                            points="366.5,304.2 366.5,301.9 366.5,301.9 363.6,304.7 363.6,304.7 358.3,310.1 360.6,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2342_sw0hdxcc1"><polygon
                            points="357.7,327 357.7,327 366.5,318.3 366.5,316 366.5,316 363.6,318.8 363.6,318.8 349.5,332.9    349.5,332.9 344.2,338.3 346.5,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2343_sw0hdxcc1"><polygon
                            points="338.3,316 338.3,318.3 338.3,318.3 343.6,312.9 346.5,310.1 344.2,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2344_sw0hdxcc1"><polygon
                            points="338.3,332.4 343.6,327 357.7,312.9 357.7,312.9 360.6,310.1 358.3,310.1 349.5,318.8 349.5,318.8    338.3,330.1 338.3,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2345_sw0hdxcc1"><polygon
                            points="366.5,332.4 366.5,330.1 366.5,330.1 363.6,332.9 363.6,332.9 358.3,338.3 360.6,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2346_sw0hdxcc1"><polygon
                            points="357.7,355.2 357.7,355.2 366.5,346.5 366.5,344.2 366.5,344.2 363.6,347 363.6,347 349.5,361.1    349.5,361.1 344.2,366.5 346.5,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2347_sw0hdxcc1"><polygon
                            points="338.3,346.5 343.6,341.1 346.5,338.3 344.2,338.3 338.3,344.2 338.3,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2348_sw0hdxcc1"><polygon
                            points="338.3,360.6 343.6,355.2 357.7,341.1 357.7,341.1 360.6,338.3 358.3,338.3 349.5,347 349.5,347    338.3,358.3 338.3,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2349_sw0hdxcc1"><polygon
                            points="366.5,360.6 366.5,358.3 366.5,358.3 363.6,361.1 363.6,361.1 358.3,366.5 360.6,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2350_sw0hdxcc1"><polygon
                            points="357.7,383.4 357.7,383.4 366.5,374.7 366.5,372.4 366.5,372.4 363.6,375.2 363.6,375.2    349.5,389.3 349.5,389.3 344.2,394.7 346.5,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2351_sw0hdxcc1"><polygon
                            points="338.3,374.7 343.6,369.3 346.5,366.5 344.2,366.5 338.3,372.4 338.3,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2352_sw0hdxcc1"><polygon
                            points="338.3,388.8 343.6,383.4 357.7,369.3 357.7,369.3 360.6,366.5 358.3,366.5 349.5,375.2    349.5,375.2 338.3,386.5 338.3,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2353_sw0hdxcc1"><polygon
                            points="366.5,388.8 366.5,386.5 366.5,386.5 363.6,389.3 363.6,389.3 358.3,394.7 360.6,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2354_sw0hdxcc1"><polygon
                            points="357.7,411.6 357.7,411.6 366.5,402.9 366.5,400.6 366.5,400.6 363.6,403.4 363.6,403.4    349.5,417.5 349.5,417.5 344.2,422.9 346.5,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2355_sw0hdxcc1"><polygon
                            points="338.3,402.9 343.6,397.5 346.5,394.7 344.2,394.7 338.3,400.6 338.3,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2356_sw0hdxcc1"><polygon
                            points="338.3,417 343.6,411.6 357.7,397.5 357.7,397.5 360.6,394.7 358.3,394.7 349.5,403.4 349.5,403.4    338.3,414.7 338.3,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2357_sw0hdxcc1"><polygon
                            points="366.5,417 366.5,414.7 366.5,414.7 363.6,417.5 363.6,417.5 358.3,422.9 360.6,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2358_sw0hdxcc1"><polygon
                            points="357.7,439.8 357.7,439.8 366.5,431.1 366.5,428.8 366.5,428.8 363.6,431.6 363.6,431.6    349.5,445.7 349.5,445.7 344.2,451 346.5,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2359_sw0hdxcc1"><polygon
                            points="338.3,431.1 343.6,425.7 346.5,422.9 344.2,422.9 338.3,428.8 338.3,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2360_sw0hdxcc1"><polygon
                            points="338.3,445.1 343.6,439.8 357.7,425.7 357.7,425.7 360.6,422.9 358.3,422.9 349.5,431.6    349.5,431.6 338.3,442.9 338.3,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2361_sw0hdxcc1"><polygon
                            points="366.5,445.1 366.5,442.9 366.5,442.9 363.6,445.7 363.6,445.7 358.3,451 360.6,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2362_sw0hdxcc1"><path
                            d="M357.7,468l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-12.5,12.5c1.5-0.7,2.9-1.3,4.3-2L357.7,468L357.7,468z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2363_sw0hdxcc1"><polygon
                            points="338.3,459.2 343.6,453.9 346.5,451 344.2,451 338.3,456.9 338.3,459.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2364_sw0hdxcc1"><polygon
                            points="338.3,473.3 343.6,468 357.7,453.9 357.7,453.9 360.6,451 358.3,451 349.5,459.8 349.5,459.8    338.3,471 338.3,473.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2365_sw0hdxcc1"><path
                            d="M321.4,22.8l-5.4,5.4h2.3l11.3-11.3h0l2.2-2.2c-0.6-0.2-1.1-0.4-1.7-0.6L321.4,22.8L321.4,22.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2366_sw0hdxcc1"><path
                            d="M310.1,8.2l0.2-0.2c-0.1,0-0.1,0-0.2,0V8.2L310.1,8.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2367_sw0hdxcc1"><path
                            d="M310.1,22.3l5.4-5.4l5.8-5.8c-0.6-0.2-1.2-0.4-1.8-0.5l-9.4,9.4V22.3L310.1,22.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2368_sw0hdxcc1"><polygon
                            points="338.3,20 335.5,22.8 335.5,22.8 330.1,28.2 332.4,28.2 338.3,22.3 338.3,20  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2369_sw0hdxcc1"><polygon
                            points="338.3,34.1 335.5,36.9 335.5,36.9 321.4,51 321.4,51 316,56.4 318.3,56.4 329.5,45.1 329.5,45.1    338.3,36.4 338.3,34.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2370_sw0hdxcc1"><polygon
                            points="310.1,34.1 310.1,36.4 310.1,36.4 315.5,31 318.3,28.2 316,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2371_sw0hdxcc1"><polygon
                            points="321.4,36.9 321.4,36.9 310.1,48.2 310.1,50.5 310.1,50.5 315.5,45.1 329.5,31 329.5,31 332.4,28.2    330.1,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2372_sw0hdxcc1"><polygon
                            points="338.3,50.5 338.3,48.2 338.3,48.2 335.5,51 335.5,51 330.1,56.4 332.4,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2373_sw0hdxcc1"><polygon
                            points="329.5,73.3 329.5,73.3 338.3,64.6 338.3,62.3 338.3,62.3 335.5,65.1 335.5,65.1 321.4,79.2    321.4,79.2 316,84.6 318.3,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2374_sw0hdxcc1"><polygon
                            points="310.1,62.3 310.1,64.6 310.1,64.6 315.5,59.2 318.3,56.4 316,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2375_sw0hdxcc1"><polygon
                            points="310.1,78.7 315.5,73.3 329.5,59.2 329.5,59.2 332.4,56.4 330.1,56.4 321.4,65.1 321.4,65.1    310.1,76.4 310.1,78.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2376_sw0hdxcc1"><polygon
                            points="338.3,76.4 335.5,79.2 335.5,79.2 330.1,84.6 332.4,84.6 338.3,78.7 338.3,76.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2377_sw0hdxcc1"><polygon
                            points="329.5,101.5 329.5,101.5 338.3,92.8 338.3,90.5 338.3,90.5 335.5,93.3 335.5,93.3 321.4,107.4    321.4,107.4 316,112.8 318.3,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2378_sw0hdxcc1"><polygon
                            points="310.1,92.8 315.5,87.4 318.3,84.6 316,84.6 310.1,90.5 310.1,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2379_sw0hdxcc1"><polygon
                            points="321.4,93.3 321.4,93.3 310.1,104.6 310.1,106.9 310.1,106.9 315.5,101.5 329.5,87.4 329.5,87.4    332.4,84.6 330.1,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2380_sw0hdxcc1"><polygon
                            points="338.3,104.6 335.5,107.4 335.5,107.4 330.1,112.8 332.4,112.8 338.3,106.9 338.3,104.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2381_sw0hdxcc1"><polygon
                            points="329.5,129.7 329.5,129.7 338.3,121 338.3,118.7 338.3,118.7 335.5,121.5 335.5,121.5 321.4,135.6    321.4,135.6 316,141 318.3,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2382_sw0hdxcc1"><polygon
                            points="310.1,121 315.5,115.6 318.3,112.8 316,112.8 310.1,118.7 310.1,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2383_sw0hdxcc1"><polygon
                            points="321.4,121.5 321.4,121.5 310.1,132.8 310.1,135.1 310.1,135.1 315.5,129.7 329.5,115.6    329.5,115.6 332.4,112.8 330.1,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2384_sw0hdxcc1"><polygon
                            points="338.3,132.8 335.5,135.6 335.5,135.6 330.1,141 332.4,141 338.3,135.1 338.3,132.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2385_sw0hdxcc1"><polygon
                            points="329.5,157.9 329.5,157.9 338.3,149.1 338.3,146.9 338.3,146.9 335.5,149.7 335.5,149.7    321.4,163.8 321.4,163.8 316,169.1 318.3,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2386_sw0hdxcc1"><polygon
                            points="310.1,149.1 315.5,143.8 318.3,141 316,141 310.1,146.9 310.1,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2387_sw0hdxcc1"><polygon
                            points="321.4,149.7 321.4,149.7 310.1,160.9 310.1,163.2 310.1,163.2 315.5,157.9 329.5,143.8    329.5,143.8 332.4,141 330.1,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2388_sw0hdxcc1"><polygon
                            points="338.3,163.2 338.3,160.9 338.3,160.9 335.5,163.8 335.5,163.8 330.1,169.1 332.4,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2389_sw0hdxcc1"><polygon
                            points="329.5,186.1 329.5,186.1 338.3,177.3 338.3,175 338.3,175 335.5,177.9 335.5,177.9 321.4,192    321.4,192 316,197.3 318.3,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2390_sw0hdxcc1"><polygon
                            points="310.1,177.3 315.5,172 318.3,169.1 316,169.1 310.1,175 310.1,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2391_sw0hdxcc1"><polygon
                            points="310.1,191.4 315.5,186.1 329.5,172 329.5,172 332.4,169.1 330.1,169.1 321.4,177.9 321.4,177.9    310.1,189.1 310.1,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2392_sw0hdxcc1"><polygon
                            points="338.3,189.1 335.5,192 335.5,192 330.1,197.3 332.4,197.3 338.3,191.4 338.3,189.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2393_sw0hdxcc1"><polygon
                            points="338.3,203.2 335.5,206.1 335.5,206.1 321.4,220.2 321.4,220.2 316,225.5 318.3,225.5 329.5,214.3    329.5,214.3 338.3,205.5 338.3,203.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2394_sw0hdxcc1"><polygon
                            points="310.1,205.5 315.5,200.2 318.3,197.3 316,197.3 310.1,203.2 310.1,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2395_sw0hdxcc1"><polygon
                            points="321.4,206.1 321.4,206.1 310.1,217.3 310.1,219.6 310.1,219.6 315.5,214.3 329.5,200.2    329.5,200.2 332.4,197.3 330.1,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2396_sw0hdxcc1"><polygon
                            points="338.3,219.6 338.3,217.3 338.3,217.3 335.5,220.2 335.5,220.2 330.1,225.5 332.4,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2397_sw0hdxcc1"><polygon
                            points="329.5,242.5 329.5,242.5 338.3,233.7 338.3,231.4 338.3,231.4 335.5,234.3 335.5,234.3    321.4,248.4 321.4,248.4 316,253.7 318.3,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2398_sw0hdxcc1"><polygon
                            points="310.1,231.4 310.1,233.7 310.1,233.7 315.5,228.4 318.3,225.5 316,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2399_sw0hdxcc1"><polygon
                            points="310.1,247.8 315.5,242.5 329.5,228.4 329.5,228.4 332.4,225.5 330.1,225.5 321.4,234.3    321.4,234.3 310.1,245.5 310.1,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2400_sw0hdxcc1"><polygon
                            points="338.3,245.5 335.5,248.4 335.5,248.4 330.1,253.7 332.4,253.7 338.3,247.8 338.3,245.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2401_sw0hdxcc1"><polygon
                            points="329.5,270.6 329.5,270.6 338.3,261.9 338.3,259.6 338.3,259.6 335.5,262.5 335.5,262.5    321.4,276.5 321.4,276.5 316,281.9 318.3,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2402_sw0hdxcc1"><polygon
                            points="310.1,261.9 315.5,256.6 318.3,253.7 316,253.7 310.1,259.6 310.1,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2403_sw0hdxcc1"><polygon
                            points="321.4,262.5 321.4,262.5 310.1,273.7 310.1,276 310.1,276 315.5,270.6 329.5,256.6 329.5,256.6    332.4,253.7 330.1,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2404_sw0hdxcc1"><polygon
                            points="338.3,273.7 335.5,276.5 335.5,276.5 330.1,281.9 332.4,281.9 338.3,276 338.3,273.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2405_sw0hdxcc1"><polygon
                            points="329.5,298.8 329.5,298.8 338.3,290.1 338.3,287.8 338.3,287.8 335.5,290.6 335.5,290.6    321.4,304.7 321.4,304.7 316,310.1 318.3,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2406_sw0hdxcc1"><polygon
                            points="310.1,290.1 315.5,284.7 318.3,281.9 316,281.9 310.1,287.8 310.1,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2407_sw0hdxcc1"><polygon
                            points="321.4,290.6 321.4,290.6 310.1,301.9 310.1,304.2 310.1,304.2 315.5,298.8 329.5,284.7    329.5,284.7 332.4,281.9 330.1,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2408_sw0hdxcc1"><polygon
                            points="338.3,304.2 338.3,301.9 338.3,301.9 335.5,304.7 335.5,304.7 330.1,310.1 332.4,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2409_sw0hdxcc1"><polygon
                            points="338.3,316 335.5,318.8 335.5,318.8 321.4,332.9 321.4,332.9 316,338.3 318.3,338.3 329.5,327    329.5,327 338.3,318.3 338.3,316  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2410_sw0hdxcc1"><polygon
                            points="310.1,318.3 315.5,312.9 318.3,310.1 316,310.1 310.1,316 310.1,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2411_sw0hdxcc1"><polygon
                            points="310.1,332.4 315.5,327 329.5,312.9 329.5,312.9 332.4,310.1 330.1,310.1 321.4,318.8 321.4,318.8    310.1,330.1 310.1,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2412_sw0hdxcc1"><polygon
                            points="338.3,332.4 338.3,330.1 338.3,330.1 335.5,332.9 335.5,332.9 330.1,338.3 332.4,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2413_sw0hdxcc1"><polygon
                            points="329.5,355.2 329.5,355.2 338.3,346.5 338.3,344.2 338.3,344.2 335.5,347 335.5,347 321.4,361.1    321.4,361.1 316,366.5 318.3,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2414_sw0hdxcc1"><polygon
                            points="310.1,344.2 310.1,346.5 310.1,346.5 315.5,341.1 318.3,338.3 316,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2415_sw0hdxcc1"><polygon
                            points="310.1,360.6 315.5,355.2 329.5,341.1 329.5,341.1 332.4,338.3 330.1,338.3 321.4,347 321.4,347    310.1,358.3 310.1,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2416_sw0hdxcc1"><polygon
                            points="338.3,360.6 338.3,358.3 338.3,358.3 335.5,361.1 335.5,361.1 330.1,366.5 332.4,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2417_sw0hdxcc1"><polygon
                            points="329.5,383.4 329.5,383.4 338.3,374.7 338.3,372.4 338.3,372.4 335.5,375.2 335.5,375.2    321.4,389.3 321.4,389.3 316,394.7 318.3,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2418_sw0hdxcc1"><polygon
                            points="310.1,374.7 315.5,369.3 318.3,366.5 316,366.5 310.1,372.4 310.1,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2419_sw0hdxcc1"><polygon
                            points="310.1,388.8 315.5,383.4 329.5,369.3 329.5,369.3 332.4,366.5 330.1,366.5 321.4,375.2    321.4,375.2 310.1,386.5 310.1,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2420_sw0hdxcc1"><polygon
                            points="338.3,388.8 338.3,386.5 338.3,386.5 335.5,389.3 335.5,389.3 330.1,394.7 332.4,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2421_sw0hdxcc1"><polygon
                            points="329.5,411.6 329.5,411.6 338.3,402.9 338.3,400.6 338.3,400.6 335.5,403.4 335.5,403.4    321.4,417.5 321.4,417.5 316,422.9 318.3,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2422_sw0hdxcc1"><polygon
                            points="310.1,402.9 315.5,397.5 318.3,394.7 316,394.7 310.1,400.6 310.1,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2423_sw0hdxcc1"><polygon
                            points="310.1,417 315.5,411.6 329.5,397.5 329.5,397.5 332.4,394.7 330.1,394.7 321.4,403.4 321.4,403.4    310.1,414.7 310.1,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2424_sw0hdxcc1"><polygon
                            points="338.3,417 338.3,414.7 338.3,414.7 335.5,417.5 335.5,417.5 330.1,422.9 332.4,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2425_sw0hdxcc1"><polygon
                            points="329.5,439.8 329.5,439.8 338.3,431.1 338.3,428.8 338.3,428.8 335.5,431.6 335.5,431.6    321.4,445.7 321.4,445.7 316,451 318.3,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2426_sw0hdxcc1"><polygon
                            points="310.1,431.1 315.5,425.7 318.3,422.9 316,422.9 310.1,428.8 310.1,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2427_sw0hdxcc1"><polygon
                            points="310.1,445.1 315.5,439.8 329.5,425.7 329.5,425.7 332.4,422.9 330.1,422.9 321.4,431.6    321.4,431.6 310.1,442.9 310.1,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2428_sw0hdxcc1"><polygon
                            points="338.3,445.1 338.3,442.9 338.3,442.9 335.5,445.7 335.5,445.7 330.1,451 332.4,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2429_sw0hdxcc1"><polygon
                            points="329.5,468 329.5,468 338.3,459.2 338.3,456.9 338.3,456.9 335.5,459.8 335.5,459.8 321.4,473.9    321.4,473.9 316,479.2 318.3,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2430_sw0hdxcc1"><polygon
                            points="310.1,459.2 315.5,453.9 318.3,451 316,451 310.1,456.9 310.1,459.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2431_sw0hdxcc1"><polygon
                            points="310.1,473.3 315.5,468 329.5,453.9 329.5,453.9 332.4,451 330.1,451 321.4,459.8 321.4,459.8    310.1,471 310.1,473.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2432_sw0hdxcc1"><polygon
                            points="338.3,473.3 338.3,471 338.3,471 335.5,473.9 335.5,473.9 330.1,479.2 332.4,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2433_sw0hdxcc1"><path
                            d="M310.7,486.8l4.8-4.8l2.8-2.8H316l-5.9,5.9v1.9C310.3,487,310.5,486.9,310.7,486.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2434_sw0hdxcc1"><path
                            d="M330.1,479.2l-2.5,2.5c1.2-0.4,2.4-0.8,3.5-1.2l1.3-1.3H330.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2435_sw0hdxcc1"><path
                            d="M301.4,16.9L301.4,16.9l8.7-8.7V8c-0.6-0.1-1.1-0.3-1.7-0.4l-1.2,1.2l0,0l-14.1,14.1l0,0l-5.4,5.4h2.3   L301.4,16.9z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2436_sw0hdxcc1"><path
                            d="M281.9,8.2l5-5c-0.7-0.1-1.3-0.2-2-0.3l-3.1,3.1V8.2L281.9,8.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2437_sw0hdxcc1"><path
                            d="M281.9,22.3l5.4-5.4l11.6-11.6c-0.6-0.1-1.3-0.3-1.9-0.4l-3.8,3.8l0,0L281.9,20V22.3L281.9,22.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2438_sw0hdxcc1"><polygon
                            points="310.1,22.3 310.1,20 310.1,20 307.3,22.8 307.3,22.8 301.9,28.2 304.2,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2439_sw0hdxcc1"><polygon
                            points="310.1,34.1 307.3,36.9 307.3,36.9 293.2,51 293.2,51 287.8,56.4 290.1,56.4 301.4,45.1 301.4,45.1    310.1,36.4 310.1,34.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2440_sw0hdxcc1"><polygon
                            points="281.9,36.4 287.3,31 290.1,28.2 287.8,28.2 281.9,34.1 281.9,36.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2441_sw0hdxcc1"><polygon
                            points="281.9,50.5 287.3,45.1 301.4,31 301.4,31 304.2,28.2 301.9,28.2 293.2,36.9 293.2,36.9 281.9,48.2    281.9,50.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2442_sw0hdxcc1"><polygon
                            points="310.1,48.2 307.3,51 307.3,51 301.9,56.4 304.2,56.4 310.1,50.5 310.1,48.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2443_sw0hdxcc1"><polygon
                            points="310.1,62.3 307.3,65.1 307.3,65.1 293.2,79.2 293.2,79.2 287.8,84.6 290.1,84.6 301.4,73.3    301.4,73.3 310.1,64.6 310.1,62.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2444_sw0hdxcc1"><polygon
                            points="281.9,62.3 281.9,64.6 281.9,64.6 287.3,59.2 290.1,56.4 287.8,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2445_sw0hdxcc1"><polygon
                            points="293.2,65.1 293.2,65.1 281.9,76.4 281.9,78.7 281.9,78.7 287.3,73.3 301.4,59.2 301.4,59.2    304.2,56.4 301.9,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2446_sw0hdxcc1"><polygon
                            points="310.1,78.7 310.1,76.4 310.1,76.4 307.3,79.2 307.3,79.2 301.9,84.6 304.2,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2447_sw0hdxcc1"><polygon
                            points="301.4,101.5 301.4,101.5 310.1,92.8 310.1,90.5 310.1,90.5 307.3,93.3 307.3,93.3 293.2,107.4    293.2,107.4 287.8,112.8 290.1,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2448_sw0hdxcc1"><polygon
                            points="281.9,90.5 281.9,92.8 281.9,92.8 287.3,87.4 290.1,84.6 287.8,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2449_sw0hdxcc1"><polygon
                            points="281.9,106.9 287.3,101.5 301.4,87.4 301.4,87.4 304.2,84.6 301.9,84.6 293.2,93.3 293.2,93.3    281.9,104.6 281.9,106.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2450_sw0hdxcc1"><polygon
                            points="310.1,104.6 307.3,107.4 307.3,107.4 301.9,112.8 304.2,112.8 310.1,106.9 310.1,104.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2451_sw0hdxcc1"><polygon
                            points="301.4,129.7 301.4,129.7 310.1,121 310.1,118.7 310.1,118.7 307.3,121.5 307.3,121.5 293.2,135.6    293.2,135.6 287.8,141 290.1,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2452_sw0hdxcc1"><polygon
                            points="281.9,121 287.3,115.6 290.1,112.8 287.8,112.8 281.9,118.7 281.9,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2453_sw0hdxcc1"><polygon
                            points="293.2,121.5 293.2,121.5 281.9,132.8 281.9,135.1 281.9,135.1 287.3,129.7 301.4,115.6    301.4,115.6 304.2,112.8 301.9,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2454_sw0hdxcc1"><polygon
                            points="310.1,132.8 307.3,135.6 307.3,135.6 301.9,141 304.2,141 310.1,135.1 310.1,132.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2455_sw0hdxcc1"><polygon
                            points="301.4,157.9 301.4,157.9 310.1,149.1 310.1,146.9 310.1,146.9 307.3,149.7 307.3,149.7    293.2,163.8 293.2,163.8 287.8,169.1 290.1,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2456_sw0hdxcc1"><polygon
                            points="281.9,149.1 287.3,143.8 290.1,141 287.8,141 281.9,146.9 281.9,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2457_sw0hdxcc1"><polygon
                            points="293.2,149.7 293.2,149.7 281.9,160.9 281.9,163.2 281.9,163.2 287.3,157.9 301.4,143.8    301.4,143.8 304.2,141 301.9,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2458_sw0hdxcc1"><polygon
                            points="310.1,160.9 307.3,163.8 307.3,163.8 301.9,169.1 304.2,169.1 310.1,163.2 310.1,160.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2459_sw0hdxcc1"><polygon
                            points="301.4,186.1 301.4,186.1 310.1,177.3 310.1,175 310.1,175 307.3,177.9 307.3,177.9 293.2,192    293.2,192 287.8,197.3 290.1,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2460_sw0hdxcc1"><polygon
                            points="281.9,177.3 287.3,172 290.1,169.1 287.8,169.1 281.9,175 281.9,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2461_sw0hdxcc1"><polygon
                            points="293.2,177.9 293.2,177.9 281.9,189.1 281.9,191.4 281.9,191.4 287.3,186.1 301.4,172 301.4,172    304.2,169.1 301.9,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2462_sw0hdxcc1"><polygon
                            points="310.1,191.4 310.1,189.1 310.1,189.1 307.3,192 307.3,192 301.9,197.3 304.2,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2463_sw0hdxcc1"><polygon
                            points="301.4,214.3 301.4,214.3 310.1,205.5 310.1,203.2 310.1,203.2 307.3,206.1 307.3,206.1    293.2,220.2 293.2,220.2 287.8,225.5 290.1,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2464_sw0hdxcc1"><polygon
                            points="281.9,205.5 287.3,200.2 290.1,197.3 287.8,197.3 281.9,203.2 281.9,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2465_sw0hdxcc1"><polygon
                            points="281.9,219.6 287.3,214.3 301.4,200.2 301.4,200.2 304.2,197.3 301.9,197.3 293.2,206.1    293.2,206.1 281.9,217.3 281.9,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2466_sw0hdxcc1"><polygon
                            points="310.1,217.3 307.3,220.2 307.3,220.2 301.9,225.5 304.2,225.5 310.1,219.6 310.1,217.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2467_sw0hdxcc1"><polygon
                            points="310.1,231.4 307.3,234.3 307.3,234.3 293.2,248.4 293.2,248.4 287.8,253.7 290.1,253.7    301.4,242.5 301.4,242.5 310.1,233.7 310.1,231.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2468_sw0hdxcc1"><polygon
                            points="281.9,233.7 287.3,228.4 290.1,225.5 287.8,225.5 281.9,231.4 281.9,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2469_sw0hdxcc1"><polygon
                            points="293.2,234.3 293.2,234.3 281.9,245.5 281.9,247.8 281.9,247.8 287.3,242.5 301.4,228.4    301.4,228.4 304.2,225.5 301.9,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2470_sw0hdxcc1"><polygon
                            points="310.1,247.8 310.1,245.5 310.1,245.5 307.3,248.4 307.3,248.4 301.9,253.7 304.2,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2471_sw0hdxcc1"><polygon
                            points="301.4,270.6 301.4,270.6 310.1,261.9 310.1,259.6 310.1,259.6 307.3,262.5 307.3,262.5    293.2,276.5 293.2,276.5 287.8,281.9 290.1,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2472_sw0hdxcc1"><polygon
                            points="281.9,259.6 281.9,261.9 281.9,261.9 287.3,256.6 290.1,253.7 287.8,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2473_sw0hdxcc1"><polygon
                            points="281.9,276 287.3,270.6 301.4,256.6 301.4,256.6 304.2,253.7 301.9,253.7 293.2,262.5 293.2,262.5    281.9,273.7 281.9,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2474_sw0hdxcc1"><polygon
                            points="310.1,273.7 307.3,276.5 307.3,276.5 301.9,281.9 304.2,281.9 310.1,276 310.1,273.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2475_sw0hdxcc1"><polygon
                            points="301.4,298.8 301.4,298.8 310.1,290.1 310.1,287.8 310.1,287.8 307.3,290.6 307.3,290.6    293.2,304.7 293.2,304.7 287.8,310.1 290.1,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2476_sw0hdxcc1"><polygon
                            points="281.9,290.1 287.3,284.7 290.1,281.9 287.8,281.9 281.9,287.8 281.9,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2477_sw0hdxcc1"><polygon
                            points="293.2,290.6 293.2,290.6 281.9,301.9 281.9,304.2 281.9,304.2 287.3,298.8 301.4,284.7    301.4,284.7 304.2,281.9 301.9,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2478_sw0hdxcc1"><polygon
                            points="310.1,301.9 307.3,304.7 307.3,304.7 301.9,310.1 304.2,310.1 310.1,304.2 310.1,301.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2479_sw0hdxcc1"><polygon
                            points="301.4,327 301.4,327 310.1,318.3 310.1,316 310.1,316 307.3,318.8 307.3,318.8 293.2,332.9    293.2,332.9 287.8,338.3 290.1,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2480_sw0hdxcc1"><polygon
                            points="281.9,318.3 287.3,312.9 290.1,310.1 287.8,310.1 281.9,316 281.9,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2481_sw0hdxcc1"><polygon
                            points="293.2,318.8 293.2,318.8 281.9,330.1 281.9,332.4 281.9,332.4 287.3,327 301.4,312.9 301.4,312.9    304.2,310.1 301.9,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2482_sw0hdxcc1"><polygon
                            points="310.1,332.4 310.1,330.1 310.1,330.1 307.3,332.9 307.3,332.9 301.9,338.3 304.2,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2483_sw0hdxcc1"><polygon
                            points="310.1,344.2 307.3,347 307.3,347 293.2,361.1 293.2,361.1 287.8,366.5 290.1,366.5 301.4,355.2    301.4,355.2 310.1,346.5 310.1,344.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2484_sw0hdxcc1"><polygon
                            points="281.9,346.5 287.3,341.1 290.1,338.3 287.8,338.3 281.9,344.2 281.9,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2485_sw0hdxcc1"><polygon
                            points="281.9,360.6 287.3,355.2 301.4,341.1 301.4,341.1 304.2,338.3 301.9,338.3 293.2,347 293.2,347    281.9,358.3 281.9,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2486_sw0hdxcc1"><polygon
                            points="310.1,360.6 310.1,358.3 310.1,358.3 307.3,361.1 307.3,361.1 301.9,366.5 304.2,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2487_sw0hdxcc1"><polygon
                            points="301.4,383.4 301.4,383.4 310.1,374.7 310.1,372.4 310.1,372.4 307.3,375.2 307.3,375.2    293.2,389.3 293.2,389.3 287.8,394.7 290.1,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2488_sw0hdxcc1"><polygon
                            points="281.9,372.4 281.9,374.7 281.9,374.7 287.3,369.3 290.1,366.5 287.8,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2489_sw0hdxcc1"><polygon
                            points="281.9,388.8 287.3,383.4 301.4,369.3 301.4,369.3 304.2,366.5 301.9,366.5 293.2,375.2    293.2,375.2 281.9,386.5 281.9,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2490_sw0hdxcc1"><polygon
                            points="310.1,388.8 310.1,386.5 310.1,386.5 307.3,389.3 307.3,389.3 301.9,394.7 304.2,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2491_sw0hdxcc1"><polygon
                            points="301.4,411.6 301.4,411.6 310.1,402.9 310.1,400.6 310.1,400.6 307.3,403.4 307.3,403.4    293.2,417.5 293.2,417.5 287.8,422.9 290.1,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2492_sw0hdxcc1"><polygon
                            points="281.9,402.9 287.3,397.5 290.1,394.7 287.8,394.7 281.9,400.6 281.9,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2493_sw0hdxcc1"><polygon
                            points="281.9,417 287.3,411.6 301.4,397.5 301.4,397.5 304.2,394.7 301.9,394.7 293.2,403.4 293.2,403.4    281.9,414.7 281.9,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2494_sw0hdxcc1"><polygon
                            points="310.1,417 310.1,414.7 310.1,414.7 307.3,417.5 307.3,417.5 301.9,422.9 304.2,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2495_sw0hdxcc1"><polygon
                            points="301.4,439.8 301.4,439.8 310.1,431.1 310.1,428.8 310.1,428.8 307.3,431.6 307.3,431.6    293.2,445.7 293.2,445.7 287.8,451 290.1,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2496_sw0hdxcc1"><polygon
                            points="281.9,431.1 287.3,425.7 290.1,422.9 287.8,422.9 281.9,428.8 281.9,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2497_sw0hdxcc1"><polygon
                            points="281.9,445.1 287.3,439.8 301.4,425.7 301.4,425.7 304.2,422.9 301.9,422.9 293.2,431.6    293.2,431.6 281.9,442.9 281.9,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2498_sw0hdxcc1"><polygon
                            points="310.1,445.1 310.1,442.9 310.1,442.9 307.3,445.7 307.3,445.7 301.9,451 304.2,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2499_sw0hdxcc1"><polygon
                            points="301.4,468 301.4,468 310.1,459.2 310.1,456.9 310.1,456.9 307.3,459.8 307.3,459.8 293.2,473.9    293.2,473.9 287.8,479.2 290.1,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2500_sw0hdxcc1"><polygon
                            points="281.9,459.2 287.3,453.9 290.1,451 287.8,451 281.9,456.9 281.9,459.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2501_sw0hdxcc1"><polygon
                            points="281.9,473.3 287.3,468 301.4,453.9 301.4,453.9 304.2,451 301.9,451 293.2,459.8 293.2,459.8    281.9,471 281.9,473.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2502_sw0hdxcc1"><polygon
                            points="310.1,473.3 310.1,471 310.1,471 307.3,473.9 307.3,473.9 301.9,479.2 304.2,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2503_sw0hdxcc1"><path
                            d="M310.1,485.1L310.1,485.1l-2.5,2.5c0.8-0.2,1.7-0.4,2.5-0.6V485.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2504_sw0hdxcc1"><polygon
                            points="281.9,487.4 287.3,482.1 290.1,479.2 287.8,479.2 281.9,485.1 281.9,487.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2505_sw0hdxcc1"><path
                            d="M301.4,482.1L301.4,482.1l2.8-2.8h-2.3l-8.7,8.7l0,0l-3.4,3.4c0.9-0.2,1.9-0.3,2.8-0.5L301.4,482.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2506_sw0hdxcc1"><polygon
                            points="273.2,16.9 273.2,16.9 281.9,8.2 281.9,5.9 281.9,5.9 279.1,8.7 279.1,8.7 265,22.8 265,22.8    259.6,28.2 261.9,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2507_sw0hdxcc1"><path
                            d="M253.7,8.2l5.4-5.4l2.4-2.4c-0.7,0-1.5-0.1-2.2-0.1l-5.6,5.6V8.2L253.7,8.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2508_sw0hdxcc1"><path
                            d="M253.7,22.3l5.4-5.4l14.1-14.1h0l1.4-1.4c-0.7-0.1-1.4-0.2-2.1-0.2L265,8.7l0,0L253.7,20V22.3L253.7,22.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2509_sw0hdxcc1"><polygon
                            points="281.9,22.3 281.9,20 281.9,20 279.1,22.8 279.1,22.8 273.7,28.2 276,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2510_sw0hdxcc1"><polygon
                            points="273.2,45.1 273.2,45.1 281.9,36.4 281.9,34.1 281.9,34.1 279.1,36.9 279.1,36.9 265,51 265,51    259.6,56.4 261.9,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2511_sw0hdxcc1"><polygon
                            points="253.7,36.4 259.1,31 261.9,28.2 259.6,28.2 253.7,34.1 253.7,36.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2512_sw0hdxcc1"><polygon
                            points="253.7,50.5 259.1,45.1 273.2,31 273.2,31 276,28.2 273.7,28.2 265,36.9 265,36.9 253.7,48.2    253.7,50.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2513_sw0hdxcc1"><polygon
                            points="281.9,50.5 281.9,48.2 281.9,48.2 279.1,51 279.1,51 273.7,56.4 276,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2514_sw0hdxcc1"><polygon
                            points="281.9,62.3 279.1,65.1 279.1,65.1 265,79.2 265,79.2 259.6,84.6 261.9,84.6 273.2,73.3 273.2,73.3    281.9,64.6 281.9,62.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2515_sw0hdxcc1"><polygon
                            points="253.7,64.6 259.1,59.2 261.9,56.4 259.6,56.4 253.7,62.3 253.7,64.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2516_sw0hdxcc1"><polygon
                            points="253.7,78.7 259.1,73.3 273.2,59.2 273.2,59.2 276,56.4 273.7,56.4 265,65.1 265,65.1 253.7,76.4    253.7,78.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2517_sw0hdxcc1"><polygon
                            points="281.9,76.4 279.1,79.2 279.1,79.2 273.7,84.6 276,84.6 281.9,78.7 281.9,76.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2518_sw0hdxcc1"><polygon
                            points="281.9,90.5 279.1,93.3 279.1,93.3 265,107.4 265,107.4 259.6,112.8 261.9,112.8 273.2,101.5    273.2,101.5 281.9,92.8 281.9,90.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2519_sw0hdxcc1"><polygon
                            points="253.7,90.5 253.7,92.8 253.7,92.8 259.1,87.4 261.9,84.6 259.6,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2520_sw0hdxcc1"><polygon
                            points="265,93.3 265,93.3 253.7,104.6 253.7,106.9 253.7,106.9 259.1,101.5 273.2,87.4 273.2,87.4    276,84.6 273.7,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2521_sw0hdxcc1"><polygon
                            points="281.9,106.9 281.9,104.6 281.9,104.6 279.1,107.4 279.1,107.4 273.7,112.8 276,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2522_sw0hdxcc1"><polygon
                            points="273.2,129.7 273.2,129.7 281.9,121 281.9,118.7 281.9,118.7 279.1,121.5 279.1,121.5 265,135.6    265,135.6 259.6,141 261.9,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2523_sw0hdxcc1"><polygon
                            points="253.7,118.7 253.7,121 253.7,121 259.1,115.6 261.9,112.8 259.6,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2524_sw0hdxcc1"><polygon
                            points="253.7,135.1 259.1,129.7 273.2,115.6 273.2,115.6 276,112.8 273.7,112.8 265,121.5 265,121.5    253.7,132.8 253.7,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2525_sw0hdxcc1"><polygon
                            points="281.9,132.8 279.1,135.6 279.1,135.6 273.7,141 276,141 281.9,135.1 281.9,132.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2526_sw0hdxcc1"><polygon
                            points="273.2,157.9 273.2,157.9 281.9,149.1 281.9,146.9 281.9,146.9 279.1,149.7 279.1,149.7 265,163.8    265,163.8 259.6,169.1 261.9,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2527_sw0hdxcc1"><polygon
                            points="253.7,149.1 259.1,143.8 261.9,141 259.6,141 253.7,146.9 253.7,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2528_sw0hdxcc1"><polygon
                            points="265,149.7 265,149.7 253.7,160.9 253.7,163.2 253.7,163.2 259.1,157.9 273.2,143.8 273.2,143.8    276,141 273.7,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2529_sw0hdxcc1"><polygon
                            points="281.9,160.9 279.1,163.8 279.1,163.8 273.7,169.1 276,169.1 281.9,163.2 281.9,160.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2530_sw0hdxcc1"><polygon
                            points="273.2,186.1 273.2,186.1 281.9,177.3 281.9,175 281.9,175 279.1,177.9 279.1,177.9 265,192    265,192 259.6,197.3 261.9,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2531_sw0hdxcc1"><polygon
                            points="253.7,177.3 259.1,172 261.9,169.1 259.6,169.1 253.7,175 253.7,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2532_sw0hdxcc1"><polygon
                            points="265,177.9 265,177.9 253.7,189.1 253.7,191.4 253.7,191.4 259.1,186.1 273.2,172 273.2,172    276,169.1 273.7,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2533_sw0hdxcc1"><polygon
                            points="281.9,189.1 279.1,192 279.1,192 273.7,197.3 276,197.3 281.9,191.4 281.9,189.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2534_sw0hdxcc1"><polygon
                            points="273.2,214.3 273.2,214.3 281.9,205.5 281.9,203.2 281.9,203.2 279.1,206.1 279.1,206.1 265,220.2    265,220.2 259.6,225.5 261.9,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2535_sw0hdxcc1"><polygon
                            points="253.7,205.5 259.1,200.2 261.9,197.3 259.6,197.3 253.7,203.2 253.7,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2536_sw0hdxcc1"><polygon
                            points="265,206.1 265,206.1 253.7,217.3 253.7,219.6 253.7,219.6 259.1,214.3 273.2,200.2 273.2,200.2    276,197.3 273.7,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2537_sw0hdxcc1"><polygon
                            points="281.9,219.6 281.9,217.3 281.9,217.3 279.1,220.2 279.1,220.2 273.7,225.5 276,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2538_sw0hdxcc1"><polygon
                            points="273.2,242.5 273.2,242.5 281.9,233.7 281.9,231.4 281.9,231.4 279.1,234.3 279.1,234.3 265,248.4    265,248.4 259.6,253.7 261.9,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2539_sw0hdxcc1"><polygon
                            points="253.7,233.7 259.1,228.4 261.9,225.5 259.6,225.5 253.7,231.4 253.7,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2540_sw0hdxcc1"><polygon
                            points="253.7,247.8 259.1,242.5 273.2,228.4 273.2,228.4 276,225.5 273.7,225.5 265,234.3 265,234.3    253.7,245.5 253.7,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2541_sw0hdxcc1"><polygon
                            points="281.9,245.5 279.1,248.4 279.1,248.4 273.7,253.7 276,253.7 281.9,247.8 281.9,245.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2542_sw0hdxcc1"><polygon
                            points="281.9,259.6 279.1,262.5 279.1,262.5 265,276.5 265,276.5 259.6,281.9 261.9,281.9 273.2,270.6    273.2,270.6 281.9,261.9 281.9,259.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2543_sw0hdxcc1"><polygon
                            points="253.7,261.9 259.1,256.6 261.9,253.7 259.6,253.7 253.7,259.6 253.7,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2544_sw0hdxcc1"><polygon
                            points="265,262.5 265,262.5 253.7,273.7 253.7,276 253.7,276 259.1,270.6 273.2,256.6 273.2,256.6    276,253.7 273.7,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2545_sw0hdxcc1"><polygon
                            points="281.9,276 281.9,273.7 281.9,273.7 279.1,276.5 279.1,276.5 273.7,281.9 276,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2546_sw0hdxcc1"><polygon
                            points="273.2,298.8 273.2,298.8 281.9,290.1 281.9,287.8 281.9,287.8 279.1,290.6 279.1,290.6 265,304.7    265,304.7 259.6,310.1 261.9,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2547_sw0hdxcc1"><polygon
                            points="253.7,287.8 253.7,290.1 253.7,290.1 259.1,284.7 261.9,281.9 259.6,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2548_sw0hdxcc1"><polygon
                            points="253.7,304.2 259.1,298.8 273.2,284.7 273.2,284.7 276,281.9 273.7,281.9 265,290.6 265,290.6    253.7,301.9 253.7,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2549_sw0hdxcc1"><polygon
                            points="281.9,301.9 279.1,304.7 279.1,304.7 273.7,310.1 276,310.1 281.9,304.2 281.9,301.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2550_sw0hdxcc1"><polygon
                            points="273.2,327 273.2,327 281.9,318.3 281.9,316 281.9,316 279.1,318.8 279.1,318.8 265,332.9    265,332.9 259.6,338.3 261.9,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2551_sw0hdxcc1"><polygon
                            points="253.7,318.3 259.1,312.9 261.9,310.1 259.6,310.1 253.7,316 253.7,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2552_sw0hdxcc1"><polygon
                            points="265,318.8 265,318.8 253.7,330.1 253.7,332.4 253.7,332.4 259.1,327 273.2,312.9 273.2,312.9    276,310.1 273.7,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2553_sw0hdxcc1"><polygon
                            points="281.9,330.1 279.1,332.9 279.1,332.9 273.7,338.3 276,338.3 281.9,332.4 281.9,330.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2554_sw0hdxcc1"><polygon
                            points="273.2,355.2 273.2,355.2 281.9,346.5 281.9,344.2 281.9,344.2 279.1,347 279.1,347 265,361.1    265,361.1 259.6,366.5 261.9,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2555_sw0hdxcc1"><polygon
                            points="253.7,346.5 259.1,341.1 261.9,338.3 259.6,338.3 253.7,344.2 253.7,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2556_sw0hdxcc1"><polygon
                            points="265,347 265,347 253.7,358.3 253.7,360.6 253.7,360.6 259.1,355.2 273.2,341.1 273.2,341.1    276,338.3 273.7,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2557_sw0hdxcc1"><polygon
                            points="281.9,360.6 281.9,358.3 281.9,358.3 279.1,361.1 279.1,361.1 273.7,366.5 276,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2558_sw0hdxcc1"><polygon
                            points="281.9,372.4 279.1,375.2 279.1,375.2 265,389.3 265,389.3 259.6,394.7 261.9,394.7 273.2,383.4    273.2,383.4 281.9,374.7 281.9,372.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2559_sw0hdxcc1"><polygon
                            points="253.7,374.7 259.1,369.3 261.9,366.5 259.6,366.5 253.7,372.4 253.7,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2560_sw0hdxcc1"><polygon
                            points="253.7,388.8 259.1,383.4 273.2,369.3 273.2,369.3 276,366.5 273.7,366.5 265,375.2 265,375.2    253.7,386.5 253.7,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2561_sw0hdxcc1"><polygon
                            points="281.9,388.8 281.9,386.5 281.9,386.5 279.1,389.3 279.1,389.3 273.7,394.7 276,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2562_sw0hdxcc1"><polygon
                            points="273.2,411.6 273.2,411.6 281.9,402.9 281.9,400.6 281.9,400.6 279.1,403.4 279.1,403.4 265,417.5    265,417.5 259.6,422.9 261.9,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2563_sw0hdxcc1"><polygon
                            points="253.7,400.6 253.7,402.9 253.7,402.9 259.1,397.5 261.9,394.7 259.6,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2564_sw0hdxcc1"><polygon
                            points="253.7,417 259.1,411.6 273.2,397.5 273.2,397.5 276,394.7 273.7,394.7 265,403.4 265,403.4    253.7,414.7 253.7,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2565_sw0hdxcc1"><polygon
                            points="281.9,417 281.9,414.7 281.9,414.7 279.1,417.5 279.1,417.5 273.7,422.9 276,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2566_sw0hdxcc1"><polygon
                            points="273.2,439.8 273.2,439.8 281.9,431.1 281.9,428.8 281.9,428.8 279.1,431.6 279.1,431.6 265,445.7    265,445.7 259.6,451 261.9,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2567_sw0hdxcc1"><polygon
                            points="253.7,431.1 259.1,425.7 261.9,422.9 259.6,422.9 253.7,428.8 253.7,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2568_sw0hdxcc1"><polygon
                            points="253.7,445.1 259.1,439.8 273.2,425.7 273.2,425.7 276,422.9 273.7,422.9 265,431.6 265,431.6    253.7,442.9 253.7,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2569_sw0hdxcc1"><polygon
                            points="281.9,445.1 281.9,442.9 281.9,442.9 279.1,445.7 279.1,445.7 273.7,451 276,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2570_sw0hdxcc1"><polygon
                            points="273.2,468 273.2,468 281.9,459.2 281.9,456.9 281.9,456.9 279.1,459.8 279.1,459.8 265,473.9    265,473.9 259.6,479.2 261.9,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2571_sw0hdxcc1"><polygon
                            points="253.7,459.2 259.1,453.9 261.9,451 259.6,451 253.7,456.9 253.7,459.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2572_sw0hdxcc1"><polygon
                            points="253.7,473.3 259.1,468 273.2,453.9 273.2,453.9 276,451 273.7,451 265,459.8 265,459.8 253.7,471    253.7,473.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2573_sw0hdxcc1"><polygon
                            points="281.9,473.3 281.9,471 281.9,471 279.1,473.9 279.1,473.9 273.7,479.2 276,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2574_sw0hdxcc1"><path
                            d="M281.9,487.4v-2.3v0l-2.8,2.8l0,0l-5.7,5.7c0.9-0.1,1.7-0.2,2.6-0.3L281.9,487.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2575_sw0hdxcc1"><polygon
                            points="253.7,487.4 259.1,482.1 261.9,479.2 259.6,479.2 253.7,485.1 253.7,487.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2576_sw0hdxcc1"><path
                            d="M273.2,482.1L273.2,482.1l2.8-2.8h-2.3L265,488l0,0l-6.8,6.8c0.8,0,1.6-0.1,2.4-0.1L273.2,482.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2577_sw0hdxcc1"><polygon
                            points="245,16.9 245,16.9 253.7,8.2 253.7,5.9 253.7,5.9 250.9,8.7 250.9,8.7 236.8,22.8 236.8,22.8    231.4,28.2 233.7,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2578_sw0hdxcc1"><path
                            d="M230.9,2.8l2.4-2.4c-0.8,0-1.6,0.1-2.4,0.2l-5.3,5.3v2.3v0L230.9,2.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2579_sw0hdxcc1"><path
                            d="M225.5,22.3l5.4-5.4L245,2.8h0l2.8-2.8c-0.1,0-0.2,0-0.3,0c-0.7,0-1.3,0-2,0l-8.7,8.7l0,0L225.5,20V22.3   L225.5,22.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2580_sw0hdxcc1"><polygon
                            points="253.7,22.3 253.7,20 253.7,20 250.9,22.8 250.9,22.8 245.5,28.2 247.8,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2581_sw0hdxcc1"><polygon
                            points="245,45.1 245,45.1 253.7,36.4 253.7,34.1 253.7,34.1 250.9,36.9 250.9,36.9 236.8,51 236.8,51    231.4,56.4 233.7,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2582_sw0hdxcc1"><polygon
                            points="225.5,36.4 230.9,31 233.7,28.2 231.4,28.2 225.5,34.1 225.5,36.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2583_sw0hdxcc1"><polygon
                            points="225.5,50.5 230.9,45.1 245,31 245,31 247.8,28.2 245.5,28.2 236.8,36.9 236.8,36.9 225.5,48.2    225.5,50.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2584_sw0hdxcc1"><polygon
                            points="253.7,50.5 253.7,48.2 253.7,48.2 250.9,51 250.9,51 245.5,56.4 247.8,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2585_sw0hdxcc1"><polygon
                            points="245,73.3 245,73.3 253.7,64.6 253.7,62.3 253.7,62.3 250.9,65.1 250.9,65.1 236.8,79.2 236.8,79.2    231.4,84.6 233.7,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2586_sw0hdxcc1"><polygon
                            points="225.5,64.6 230.9,59.2 233.7,56.4 231.4,56.4 225.5,62.3 225.5,64.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2587_sw0hdxcc1"><polygon
                            points="225.5,78.7 230.9,73.3 245,59.2 245,59.2 247.8,56.4 245.5,56.4 236.8,65.1 236.8,65.1 225.5,76.4    225.5,78.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2588_sw0hdxcc1"><polygon
                            points="253.7,78.7 253.7,76.4 253.7,76.4 250.9,79.2 250.9,79.2 245.5,84.6 247.8,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2589_sw0hdxcc1"><polygon
                            points="253.7,90.5 250.9,93.3 250.9,93.3 236.8,107.4 236.8,107.4 231.4,112.8 233.7,112.8 245,101.5    245,101.5 253.7,92.8 253.7,90.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2590_sw0hdxcc1"><polygon
                            points="225.5,92.8 230.9,87.4 233.7,84.6 231.4,84.6 225.5,90.5 225.5,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2591_sw0hdxcc1"><polygon
                            points="225.5,106.9 230.9,101.5 245,87.4 245,87.4 247.8,84.6 245.5,84.6 236.8,93.3 236.8,93.3    225.5,104.6 225.5,106.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2592_sw0hdxcc1"><polygon
                            points="253.7,104.6 250.9,107.4 250.9,107.4 245.5,112.8 247.8,112.8 253.7,106.9 253.7,104.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2593_sw0hdxcc1"><polygon
                            points="253.7,118.7 250.9,121.5 250.9,121.5 236.8,135.6 236.8,135.6 231.4,141 233.7,141 245,129.7    245,129.7 253.7,121 253.7,118.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2594_sw0hdxcc1"><polygon
                            points="225.5,118.7 225.5,121 225.5,121 230.9,115.6 233.7,112.8 231.4,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2595_sw0hdxcc1"><polygon
                            points="236.8,121.5 236.8,121.5 225.5,132.8 225.5,135.1 225.5,135.1 230.9,129.7 245,115.6 245,115.6    247.8,112.8 245.5,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2596_sw0hdxcc1"><polygon
                            points="253.7,135.1 253.7,132.8 253.7,132.8 250.9,135.6 250.9,135.6 245.5,141 247.8,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2597_sw0hdxcc1"><polygon
                            points="245,157.9 245,157.9 253.7,149.1 253.7,146.9 253.7,146.9 250.9,149.7 250.9,149.7 236.8,163.8    236.8,163.8 231.4,169.1 233.7,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2598_sw0hdxcc1"><polygon
                            points="225.5,146.9 225.5,149.1 225.5,149.1 230.9,143.8 233.7,141 231.4,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2599_sw0hdxcc1"><polygon
                            points="225.5,163.2 230.9,157.9 245,143.8 245,143.8 247.8,141 245.5,141 236.8,149.7 236.8,149.7    225.5,160.9 225.5,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2600_sw0hdxcc1"><polygon
                            points="253.7,160.9 250.9,163.8 250.9,163.8 245.5,169.1 247.8,169.1 253.7,163.2 253.7,160.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2601_sw0hdxcc1"><polygon
                            points="245,186.1 245,186.1 253.7,177.3 253.7,175 253.7,175 250.9,177.9 250.9,177.9 236.8,192    236.8,192 231.4,197.3 233.7,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2602_sw0hdxcc1"><polygon
                            points="225.5,177.3 230.9,172 233.7,169.1 231.4,169.1 225.5,175 225.5,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2603_sw0hdxcc1"><polygon
                            points="236.8,177.9 236.8,177.9 225.5,189.1 225.5,191.4 225.5,191.4 230.9,186.1 245,172 245,172    247.8,169.1 245.5,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2604_sw0hdxcc1"><polygon
                            points="253.7,189.1 250.9,192 250.9,192 245.5,197.3 247.8,197.3 253.7,191.4 253.7,189.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2605_sw0hdxcc1"><polygon
                            points="245,214.3 245,214.3 253.7,205.5 253.7,203.2 253.7,203.2 250.9,206.1 250.9,206.1 236.8,220.2    236.8,220.2 231.4,225.5 233.7,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2606_sw0hdxcc1"><polygon
                            points="225.5,205.5 230.9,200.2 233.7,197.3 231.4,197.3 225.5,203.2 225.5,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2607_sw0hdxcc1"><polygon
                            points="236.8,206.1 236.8,206.1 225.5,217.3 225.5,219.6 225.5,219.6 230.9,214.3 245,200.2 245,200.2    247.8,197.3 245.5,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2608_sw0hdxcc1"><polygon
                            points="253.7,217.3 250.9,220.2 250.9,220.2 245.5,225.5 247.8,225.5 253.7,219.6 253.7,217.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2609_sw0hdxcc1"><polygon
                            points="245,242.5 245,242.5 253.7,233.7 253.7,231.4 253.7,231.4 250.9,234.3 250.9,234.3 236.8,248.4    236.8,248.4 231.4,253.7 233.7,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2610_sw0hdxcc1"><polygon
                            points="225.5,233.7 230.9,228.4 233.7,225.5 231.4,225.5 225.5,231.4 225.5,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2611_sw0hdxcc1"><polygon
                            points="236.8,234.3 236.8,234.3 225.5,245.5 225.5,247.8 225.5,247.8 230.9,242.5 245,228.4 245,228.4    247.8,225.5 245.5,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2612_sw0hdxcc1"><polygon
                            points="253.7,247.8 253.7,245.5 253.7,245.5 250.9,248.4 250.9,248.4 245.5,253.7 247.8,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2613_sw0hdxcc1"><polygon
                            points="245,270.6 245,270.6 253.7,261.9 253.7,259.6 253.7,259.6 250.9,262.5 250.9,262.5 236.8,276.5    236.8,276.5 231.4,281.9 233.7,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2614_sw0hdxcc1"><polygon
                            points="225.5,261.9 230.9,256.6 233.7,253.7 231.4,253.7 225.5,259.6 225.5,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2615_sw0hdxcc1"><polygon
                            points="225.5,276 230.9,270.6 245,256.6 245,256.6 247.8,253.7 245.5,253.7 236.8,262.5 236.8,262.5    225.5,273.7 225.5,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2616_sw0hdxcc1"><polygon
                            points="253.7,273.7 250.9,276.5 250.9,276.5 245.5,281.9 247.8,281.9 253.7,276 253.7,273.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2617_sw0hdxcc1"><polygon
                            points="253.7,287.8 250.9,290.6 250.9,290.6 236.8,304.7 236.8,304.7 231.4,310.1 233.7,310.1 245,298.8    245,298.8 253.7,290.1 253.7,287.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2618_sw0hdxcc1"><polygon
                            points="225.5,290.1 230.9,284.7 233.7,281.9 231.4,281.9 225.5,287.8 225.5,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2619_sw0hdxcc1"><polygon
                            points="236.8,290.6 236.8,290.6 225.5,301.9 225.5,304.2 225.5,304.2 230.9,298.8 245,284.7 245,284.7    247.8,281.9 245.5,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2620_sw0hdxcc1"><polygon
                            points="253.7,304.2 253.7,301.9 253.7,301.9 250.9,304.7 250.9,304.7 245.5,310.1 247.8,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2621_sw0hdxcc1"><polygon
                            points="245,327 245,327 253.7,318.3 253.7,316 253.7,316 250.9,318.8 250.9,318.8 236.8,332.9    236.8,332.9 231.4,338.3 233.7,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2622_sw0hdxcc1"><polygon
                            points="225.5,316 225.5,318.3 225.5,318.3 230.9,312.9 233.7,310.1 231.4,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2623_sw0hdxcc1"><polygon
                            points="225.5,332.4 230.9,327 245,312.9 245,312.9 247.8,310.1 245.5,310.1 236.8,318.8 236.8,318.8    225.5,330.1 225.5,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2624_sw0hdxcc1"><polygon
                            points="253.7,330.1 250.9,332.9 250.9,332.9 245.5,338.3 247.8,338.3 253.7,332.4 253.7,330.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2625_sw0hdxcc1"><polygon
                            points="245,355.2 245,355.2 253.7,346.5 253.7,344.2 253.7,344.2 250.9,347 250.9,347 236.8,361.1    236.8,361.1 231.4,366.5 233.7,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2626_sw0hdxcc1"><polygon
                            points="225.5,346.5 230.9,341.1 233.7,338.3 231.4,338.3 225.5,344.2 225.5,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2627_sw0hdxcc1"><polygon
                            points="236.8,347 236.8,347 225.5,358.3 225.5,360.6 225.5,360.6 230.9,355.2 245,341.1 245,341.1    247.8,338.3 245.5,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2628_sw0hdxcc1"><polygon
                            points="253.7,358.3 250.9,361.1 250.9,361.1 245.5,366.5 247.8,366.5 253.7,360.6 253.7,358.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2629_sw0hdxcc1"><polygon
                            points="245,383.4 245,383.4 253.7,374.7 253.7,372.4 253.7,372.4 250.9,375.2 250.9,375.2 236.8,389.3    236.8,389.3 231.4,394.7 233.7,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2630_sw0hdxcc1"><polygon
                            points="225.5,374.7 230.9,369.3 233.7,366.5 231.4,366.5 225.5,372.4 225.5,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2631_sw0hdxcc1"><polygon
                            points="236.8,375.2 236.8,375.2 225.5,386.5 225.5,388.8 225.5,388.8 230.9,383.4 245,369.3 245,369.3    247.8,366.5 245.5,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2632_sw0hdxcc1"><polygon
                            points="253.7,388.8 253.7,386.5 253.7,386.5 250.9,389.3 250.9,389.3 245.5,394.7 247.8,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2633_sw0hdxcc1"><polygon
                            points="253.7,400.6 250.9,403.4 250.9,403.4 236.8,417.5 236.8,417.5 231.4,422.9 233.7,422.9 245,411.6    245,411.6 253.7,402.9 253.7,400.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2634_sw0hdxcc1"><polygon
                            points="225.5,402.9 230.9,397.5 233.7,394.7 231.4,394.7 225.5,400.6 225.5,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2635_sw0hdxcc1"><polygon
                            points="225.5,417 230.9,411.6 245,397.5 245,397.5 247.8,394.7 245.5,394.7 236.8,403.4 236.8,403.4    225.5,414.7 225.5,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2636_sw0hdxcc1"><polygon
                            points="253.7,417 253.7,414.7 253.7,414.7 250.9,417.5 250.9,417.5 245.5,422.9 247.8,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2637_sw0hdxcc1"><polygon
                            points="245,439.8 245,439.8 253.7,431.1 253.7,428.8 253.7,428.8 250.9,431.6 250.9,431.6 236.8,445.7    236.8,445.7 231.4,451 233.7,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2638_sw0hdxcc1"><polygon
                            points="225.5,428.8 225.5,431.1 225.5,431.1 230.9,425.7 233.7,422.9 231.4,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2639_sw0hdxcc1"><polygon
                            points="225.5,445.1 230.9,439.8 245,425.7 245,425.7 247.8,422.9 245.5,422.9 236.8,431.6 236.8,431.6    225.5,442.9 225.5,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2640_sw0hdxcc1"><polygon
                            points="253.7,445.1 253.7,442.9 253.7,442.9 250.9,445.7 250.9,445.7 245.5,451 247.8,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2641_sw0hdxcc1"><polygon
                            points="245,468 245,468 253.7,459.2 253.7,456.9 253.7,456.9 250.9,459.8 250.9,459.8 236.8,473.9    236.8,473.9 231.4,479.2 233.7,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2642_sw0hdxcc1"><polygon
                            points="225.5,459.2 230.9,453.9 233.7,451 231.4,451 225.5,456.9 225.5,459.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2643_sw0hdxcc1"><polygon
                            points="225.5,473.3 230.9,468 245,453.9 245,453.9 247.8,451 245.5,451 236.8,459.8 236.8,459.8    225.5,471 225.5,473.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2644_sw0hdxcc1"><polygon
                            points="253.7,473.3 253.7,471 253.7,471 250.9,473.9 250.9,473.9 245.5,479.2 247.8,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2645_sw0hdxcc1"><path
                            d="M253.7,487.4v-2.3v0l-2.8,2.8l0,0l-7,7c0.8,0,1.5,0,2.3,0L253.7,487.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2646_sw0hdxcc1"><polygon
                            points="225.5,487.4 230.9,482.1 233.7,479.2 231.4,479.2 225.5,485.1 225.5,487.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2647_sw0hdxcc1"><path
                            d="M245,482.1L245,482.1l2.8-2.8h-2.3l-8.7,8.7l0,0l-6.4,6.4c0.7,0,1.4,0.1,2.2,0.1L245,482.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2648_sw0hdxcc1"><polygon
                            points="225.5,5.9 222.7,8.7 222.7,8.7 208.6,22.8 208.6,22.8 203.2,28.2 205.5,28.2 216.8,16.9    216.8,16.9 225.5,8.2 225.5,5.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2649_sw0hdxcc1"><path
                            d="M197.3,8.2l3.8-3.8c-0.9,0.2-1.9,0.4-2.8,0.5l-1,1V8.2L197.3,8.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2650_sw0hdxcc1"><path
                            d="M197.3,22.3l5.4-5.4l14.1-14.1h0l1.1-1.1c-0.9,0.1-1.7,0.2-2.6,0.3l-6.6,6.6l0,0L197.3,20V22.3L197.3,22.3z   "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2651_sw0hdxcc1"><polygon
                            points="225.5,22.3 225.5,20 225.5,20 222.7,22.8 222.7,22.8 217.3,28.2 219.6,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2652_sw0hdxcc1"><polygon
                            points="216.8,45.1 216.8,45.1 225.5,36.4 225.5,34.1 225.5,34.1 222.7,36.9 222.7,36.9 208.6,51 208.6,51    203.2,56.4 205.5,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2653_sw0hdxcc1"><polygon
                            points="197.3,34.1 197.3,36.4 197.3,36.4 202.7,31 205.5,28.2 203.2,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2654_sw0hdxcc1"><polygon
                            points="197.3,50.5 202.7,45.1 216.8,31 216.8,31 219.6,28.2 217.3,28.2 208.6,36.9 208.6,36.9 197.3,48.2    197.3,50.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2655_sw0hdxcc1"><polygon
                            points="225.5,50.5 225.5,48.2 225.5,48.2 222.7,51 222.7,51 217.3,56.4 219.6,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2656_sw0hdxcc1"><polygon
                            points="216.8,73.3 216.8,73.3 225.5,64.6 225.5,62.3 225.5,62.3 222.7,65.1 222.7,65.1 208.6,79.2    208.6,79.2 203.2,84.6 205.5,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2657_sw0hdxcc1"><polygon
                            points="197.3,64.6 202.7,59.2 205.5,56.4 203.2,56.4 197.3,62.3 197.3,64.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2658_sw0hdxcc1"><polygon
                            points="197.3,78.7 202.7,73.3 216.8,59.2 216.8,59.2 219.6,56.4 217.3,56.4 208.6,65.1 208.6,65.1    197.3,76.4 197.3,78.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2659_sw0hdxcc1"><polygon
                            points="225.5,78.7 225.5,76.4 225.5,76.4 222.7,79.2 222.7,79.2 217.3,84.6 219.6,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2660_sw0hdxcc1"><polygon
                            points="216.8,101.5 216.8,101.5 225.5,92.8 225.5,90.5 225.5,90.5 222.7,93.3 222.7,93.3 208.6,107.4    208.6,107.4 203.2,112.8 205.5,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2661_sw0hdxcc1"><polygon
                            points="197.3,92.8 202.7,87.4 205.5,84.6 203.2,84.6 197.3,90.5 197.3,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2662_sw0hdxcc1"><polygon
                            points="197.3,106.9 202.7,101.5 216.8,87.4 216.8,87.4 219.6,84.6 217.3,84.6 208.6,93.3 208.6,93.3    197.3,104.6 197.3,106.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2663_sw0hdxcc1"><polygon
                            points="225.5,106.9 225.5,104.6 225.5,104.6 222.7,107.4 222.7,107.4 217.3,112.8 219.6,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2664_sw0hdxcc1"><polygon
                            points="225.5,118.7 222.7,121.5 222.7,121.5 208.6,135.6 208.6,135.6 203.2,141 205.5,141 216.8,129.7    216.8,129.7 225.5,121 225.5,118.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2665_sw0hdxcc1"><polygon
                            points="197.3,121 202.7,115.6 205.5,112.8 203.2,112.8 197.3,118.7 197.3,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2666_sw0hdxcc1"><polygon
                            points="197.3,135.1 202.7,129.7 216.8,115.6 216.8,115.6 219.6,112.8 217.3,112.8 208.6,121.5    208.6,121.5 197.3,132.8 197.3,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2667_sw0hdxcc1"><polygon
                            points="225.5,132.8 222.7,135.6 222.7,135.6 217.3,141 219.6,141 225.5,135.1 225.5,132.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2668_sw0hdxcc1"><polygon
                            points="225.5,146.9 222.7,149.7 222.7,149.7 208.6,163.8 208.6,163.8 203.2,169.1 205.5,169.1    216.8,157.9 216.8,157.9 225.5,149.1 225.5,146.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2669_sw0hdxcc1"><polygon
                            points="197.3,146.9 197.3,149.1 197.3,149.1 202.7,143.8 205.5,141 203.2,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2670_sw0hdxcc1"><polygon
                            points="208.6,149.7 208.6,149.7 197.3,160.9 197.3,163.2 197.3,163.2 202.7,157.9 216.8,143.8    216.8,143.8 219.6,141 217.3,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2671_sw0hdxcc1"><polygon
                            points="225.5,163.2 225.5,160.9 225.5,160.9 222.7,163.8 222.7,163.8 217.3,169.1 219.6,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2672_sw0hdxcc1"><polygon
                            points="216.8,186.1 216.8,186.1 225.5,177.3 225.5,175 225.5,175 222.7,177.9 222.7,177.9 208.6,192    208.6,192 203.2,197.3 205.5,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2673_sw0hdxcc1"><polygon
                            points="197.3,175 197.3,177.3 197.3,177.3 202.7,172 205.5,169.1 203.2,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2674_sw0hdxcc1"><polygon
                            points="197.3,191.4 202.7,186.1 216.8,172 216.8,172 219.6,169.1 217.3,169.1 208.6,177.9 208.6,177.9    197.3,189.1 197.3,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2675_sw0hdxcc1"><polygon
                            points="225.5,189.1 222.7,192 222.7,192 217.3,197.3 219.6,197.3 225.5,191.4 225.5,189.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2676_sw0hdxcc1"><polygon
                            points="216.8,214.3 216.8,214.3 225.5,205.5 225.5,203.2 225.5,203.2 222.7,206.1 222.7,206.1    208.6,220.2 208.6,220.2 203.2,225.5 205.5,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2677_sw0hdxcc1"><polygon
                            points="197.3,205.5 202.7,200.2 205.5,197.3 203.2,197.3 197.3,203.2 197.3,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2678_sw0hdxcc1"><polygon
                            points="208.6,206.1 208.6,206.1 197.3,217.3 197.3,219.6 197.3,219.6 202.7,214.3 216.8,200.2    216.8,200.2 219.6,197.3 217.3,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2679_sw0hdxcc1"><polygon
                            points="225.5,217.3 222.7,220.2 222.7,220.2 217.3,225.5 219.6,225.5 225.5,219.6 225.5,217.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2680_sw0hdxcc1"><polygon
                            points="216.8,242.5 216.8,242.5 225.5,233.7 225.5,231.4 225.5,231.4 222.7,234.3 222.7,234.3    208.6,248.4 208.6,248.4 203.2,253.7 205.5,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2681_sw0hdxcc1"><polygon
                            points="197.3,233.7 202.7,228.4 205.5,225.5 203.2,225.5 197.3,231.4 197.3,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2682_sw0hdxcc1"><polygon
                            points="208.6,234.3 208.6,234.3 197.3,245.5 197.3,247.8 197.3,247.8 202.7,242.5 216.8,228.4    216.8,228.4 219.6,225.5 217.3,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2683_sw0hdxcc1"><polygon
                            points="225.5,245.5 222.7,248.4 222.7,248.4 217.3,253.7 219.6,253.7 225.5,247.8 225.5,245.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2684_sw0hdxcc1"><polygon
                            points="216.8,270.6 216.8,270.6 225.5,261.9 225.5,259.6 225.5,259.6 222.7,262.5 222.7,262.5    208.6,276.5 208.6,276.5 203.2,281.9 205.5,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2685_sw0hdxcc1"><polygon
                            points="197.3,261.9 202.7,256.6 205.5,253.7 203.2,253.7 197.3,259.6 197.3,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2686_sw0hdxcc1"><polygon
                            points="208.6,262.5 208.6,262.5 197.3,273.7 197.3,276 197.3,276 202.7,270.6 216.8,256.6 216.8,256.6    219.6,253.7 217.3,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2687_sw0hdxcc1"><polygon
                            points="225.5,276 225.5,273.7 225.5,273.7 222.7,276.5 222.7,276.5 217.3,281.9 219.6,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2688_sw0hdxcc1"><polygon
                            points="216.8,298.8 216.8,298.8 225.5,290.1 225.5,287.8 225.5,287.8 222.7,290.6 222.7,290.6    208.6,304.7 208.6,304.7 203.2,310.1 205.5,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2689_sw0hdxcc1"><polygon
                            points="197.3,290.1 202.7,284.7 205.5,281.9 203.2,281.9 197.3,287.8 197.3,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2690_sw0hdxcc1"><polygon
                            points="197.3,304.2 202.7,298.8 216.8,284.7 216.8,284.7 219.6,281.9 217.3,281.9 208.6,290.6    208.6,290.6 197.3,301.9 197.3,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2691_sw0hdxcc1"><polygon
                            points="225.5,301.9 222.7,304.7 222.7,304.7 217.3,310.1 219.6,310.1 225.5,304.2 225.5,301.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2692_sw0hdxcc1"><polygon
                            points="225.5,316 222.7,318.8 222.7,318.8 208.6,332.9 208.6,332.9 203.2,338.3 205.5,338.3 216.8,327    216.8,327 225.5,318.3 225.5,316  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2693_sw0hdxcc1"><polygon
                            points="197.3,318.3 202.7,312.9 205.5,310.1 203.2,310.1 197.3,316 197.3,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2694_sw0hdxcc1"><polygon
                            points="208.6,318.8 208.6,318.8 197.3,330.1 197.3,332.4 197.3,332.4 202.7,327 216.8,312.9 216.8,312.9    219.6,310.1 217.3,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2695_sw0hdxcc1"><polygon
                            points="225.5,332.4 225.5,330.1 225.5,330.1 222.7,332.9 222.7,332.9 217.3,338.3 219.6,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2696_sw0hdxcc1"><polygon
                            points="216.8,355.2 216.8,355.2 225.5,346.5 225.5,344.2 225.5,344.2 222.7,347 222.7,347 208.6,361.1    208.6,361.1 203.2,366.5 205.5,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2697_sw0hdxcc1"><polygon
                            points="197.3,344.2 197.3,346.5 197.3,346.5 202.7,341.1 205.5,338.3 203.2,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2698_sw0hdxcc1"><polygon
                            points="197.3,360.6 202.7,355.2 216.8,341.1 216.8,341.1 219.6,338.3 217.3,338.3 208.6,347 208.6,347    197.3,358.3 197.3,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2699_sw0hdxcc1"><polygon
                            points="225.5,358.3 222.7,361.1 222.7,361.1 217.3,366.5 219.6,366.5 225.5,360.6 225.5,358.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2700_sw0hdxcc1"><polygon
                            points="216.8,383.4 216.8,383.4 225.5,374.7 225.5,372.4 225.5,372.4 222.7,375.2 222.7,375.2    208.6,389.3 208.6,389.3 203.2,394.7 205.5,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2701_sw0hdxcc1"><polygon
                            points="197.3,374.7 202.7,369.3 205.5,366.5 203.2,366.5 197.3,372.4 197.3,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2702_sw0hdxcc1"><polygon
                            points="208.6,375.2 208.6,375.2 197.3,386.5 197.3,388.8 197.3,388.8 202.7,383.4 216.8,369.3    216.8,369.3 219.6,366.5 217.3,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2703_sw0hdxcc1"><polygon
                            points="225.5,386.5 222.7,389.3 222.7,389.3 217.3,394.7 219.6,394.7 225.5,388.8 225.5,386.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2704_sw0hdxcc1"><polygon
                            points="216.8,411.6 216.8,411.6 225.5,402.9 225.5,400.6 225.5,400.6 222.7,403.4 222.7,403.4    208.6,417.5 208.6,417.5 203.2,422.9 205.5,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2705_sw0hdxcc1"><polygon
                            points="197.3,402.9 202.7,397.5 205.5,394.7 203.2,394.7 197.3,400.6 197.3,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2706_sw0hdxcc1"><polygon
                            points="208.6,403.4 208.6,403.4 197.3,414.7 197.3,417 197.3,417 202.7,411.6 216.8,397.5 216.8,397.5    219.6,394.7 217.3,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2707_sw0hdxcc1"><polygon
                            points="225.5,417 225.5,414.7 225.5,414.7 222.7,417.5 222.7,417.5 217.3,422.9 219.6,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2708_sw0hdxcc1"><polygon
                            points="225.5,428.8 222.7,431.6 222.7,431.6 208.6,445.7 208.6,445.7 203.2,451 205.5,451 216.8,439.8    216.8,439.8 225.5,431.1 225.5,428.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2709_sw0hdxcc1"><polygon
                            points="197.3,431.1 202.7,425.7 205.5,422.9 203.2,422.9 197.3,428.8 197.3,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2710_sw0hdxcc1"><polygon
                            points="197.3,445.1 202.7,439.8 216.8,425.7 216.8,425.7 219.6,422.9 217.3,422.9 208.6,431.6    208.6,431.6 197.3,442.9 197.3,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2711_sw0hdxcc1"><polygon
                            points="225.5,445.1 225.5,442.9 225.5,442.9 222.7,445.7 222.7,445.7 217.3,451 219.6,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2712_sw0hdxcc1"><polygon
                            points="216.8,468 216.8,468 225.5,459.2 225.5,456.9 225.5,456.9 222.7,459.8 222.7,459.8 208.6,473.9    208.6,473.9 203.2,479.2 205.5,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2713_sw0hdxcc1"><polygon
                            points="197.3,456.9 197.3,459.2 197.3,459.2 202.7,453.9 205.5,451 203.2,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2714_sw0hdxcc1"><polygon
                            points="197.3,473.3 202.7,468 216.8,453.9 216.8,453.9 219.6,451 217.3,451 208.6,459.8 208.6,459.8    197.3,471 197.3,473.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2715_sw0hdxcc1"><polygon
                            points="225.5,473.3 225.5,471 225.5,471 222.7,473.9 222.7,473.9 217.3,479.2 219.6,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2716_sw0hdxcc1"><path
                            d="M225.5,487.4v-2.3v0l-2.8,2.8l0,0l-5.2,5.2c0.7,0.1,1.4,0.2,2.1,0.2L225.5,487.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2717_sw0hdxcc1"><polygon
                            points="197.3,487.4 202.7,482.1 205.5,479.2 203.2,479.2 197.3,485.1 197.3,487.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2718_sw0hdxcc1"><path
                            d="M216.8,482.1L216.8,482.1l2.8-2.8h-2.3l-8.7,8.7l0,0l-3.4,3.4c0.7,0.1,1.3,0.2,2,0.3L216.8,482.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2719_sw0hdxcc1"><polygon
                            points="188.6,16.9 188.6,16.9 197.3,8.2 197.3,5.9 197.3,5.9 194.5,8.7 194.5,8.7 180.4,22.8 180.4,22.8    175,28.2 177.3,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2720_sw0hdxcc1"><path
                            d="M169.1,22.3l5.4-5.4l8.4-8.4c-1,0.3-2.1,0.6-3.1,0.9L169.1,20V22.3L169.1,22.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2721_sw0hdxcc1"><polygon
                            points="197.3,22.3 197.3,20 197.3,20 194.5,22.8 194.5,22.8 189.1,28.2 191.4,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2722_sw0hdxcc1"><polygon
                            points="197.3,34.1 194.5,36.9 194.5,36.9 180.4,51 180.4,51 175,56.4 177.3,56.4 188.6,45.1 188.6,45.1    197.3,36.4 197.3,34.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2723_sw0hdxcc1"><polygon
                            points="169.1,36.4 174.5,31 177.3,28.2 175,28.2 169.1,34.1 169.1,36.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2724_sw0hdxcc1"><polygon
                            points="169.1,50.5 174.5,45.1 188.6,31 188.6,31 191.4,28.2 189.1,28.2 180.4,36.9 180.4,36.9 169.1,48.2    169.1,50.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2725_sw0hdxcc1"><polygon
                            points="197.3,50.5 197.3,48.2 197.3,48.2 194.5,51 194.5,51 189.1,56.4 191.4,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2726_sw0hdxcc1"><polygon
                            points="188.6,73.3 188.6,73.3 197.3,64.6 197.3,62.3 197.3,62.3 194.5,65.1 194.5,65.1 180.4,79.2    180.4,79.2 175,84.6 177.3,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2727_sw0hdxcc1"><polygon
                            points="169.1,62.3 169.1,64.6 169.1,64.6 174.5,59.2 177.3,56.4 175,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2728_sw0hdxcc1"><polygon
                            points="169.1,78.7 174.5,73.3 188.6,59.2 188.6,59.2 191.4,56.4 189.1,56.4 180.4,65.1 180.4,65.1    169.1,76.4 169.1,78.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2729_sw0hdxcc1"><polygon
                            points="197.3,78.7 197.3,76.4 197.3,76.4 194.5,79.2 194.5,79.2 189.1,84.6 191.4,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2730_sw0hdxcc1"><polygon
                            points="188.6,101.5 188.6,101.5 197.3,92.8 197.3,90.5 197.3,90.5 194.5,93.3 194.5,93.3 180.4,107.4    180.4,107.4 175,112.8 177.3,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2731_sw0hdxcc1"><polygon
                            points="169.1,92.8 174.5,87.4 177.3,84.6 175,84.6 169.1,90.5 169.1,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2732_sw0hdxcc1"><polygon
                            points="169.1,106.9 174.5,101.5 188.6,87.4 188.6,87.4 191.4,84.6 189.1,84.6 180.4,93.3 180.4,93.3    169.1,104.6 169.1,106.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2733_sw0hdxcc1"><polygon
                            points="197.3,106.9 197.3,104.6 197.3,104.6 194.5,107.4 194.5,107.4 189.1,112.8 191.4,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2734_sw0hdxcc1"><polygon
                            points="188.6,129.7 188.6,129.7 197.3,121 197.3,118.7 197.3,118.7 194.5,121.5 194.5,121.5 180.4,135.6    180.4,135.6 175,141 177.3,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2735_sw0hdxcc1"><polygon
                            points="169.1,121 174.5,115.6 177.3,112.8 175,112.8 169.1,118.7 169.1,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2736_sw0hdxcc1"><polygon
                            points="169.1,135.1 174.5,129.7 188.6,115.6 188.6,115.6 191.4,112.8 189.1,112.8 180.4,121.5    180.4,121.5 169.1,132.8 169.1,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2737_sw0hdxcc1"><polygon
                            points="197.3,135.1 197.3,132.8 197.3,132.8 194.5,135.6 194.5,135.6 189.1,141 191.4,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2738_sw0hdxcc1"><polygon
                            points="197.3,146.9 194.5,149.7 194.5,149.7 180.4,163.8 180.4,163.8 175,169.1 177.3,169.1 188.6,157.9    188.6,157.9 197.3,149.1 197.3,146.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2739_sw0hdxcc1"><polygon
                            points="169.1,149.1 174.5,143.8 177.3,141 175,141 169.1,146.9 169.1,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2740_sw0hdxcc1"><polygon
                            points="169.1,163.2 174.5,157.9 188.6,143.8 188.6,143.8 191.4,141 189.1,141 180.4,149.7 180.4,149.7    169.1,160.9 169.1,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2741_sw0hdxcc1"><polygon
                            points="197.3,160.9 194.5,163.8 194.5,163.8 189.1,169.1 191.4,169.1 197.3,163.2 197.3,160.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2742_sw0hdxcc1"><polygon
                            points="197.3,175 194.5,177.9 194.5,177.9 180.4,192 180.4,192 175,197.3 177.3,197.3 188.6,186.1    188.6,186.1 197.3,177.3 197.3,175  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2743_sw0hdxcc1"><polygon
                            points="169.1,175 169.1,177.3 169.1,177.3 174.5,172 177.3,169.1 175,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2744_sw0hdxcc1"><polygon
                            points="180.4,177.9 180.4,177.9 169.1,189.1 169.1,191.4 169.1,191.4 174.5,186.1 188.6,172 188.6,172    191.4,169.1 189.1,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2745_sw0hdxcc1"><polygon
                            points="197.3,191.4 197.3,189.1 197.3,189.1 194.5,192 194.5,192 189.1,197.3 191.4,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2746_sw0hdxcc1"><polygon
                            points="188.6,214.3 188.6,214.3 197.3,205.5 197.3,203.2 197.3,203.2 194.5,206.1 194.5,206.1    180.4,220.2 180.4,220.2 175,225.5 177.3,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2747_sw0hdxcc1"><polygon
                            points="169.1,203.2 169.1,205.5 169.1,205.5 174.5,200.2 177.3,197.3 175,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2748_sw0hdxcc1"><polygon
                            points="169.1,219.6 174.5,214.3 188.6,200.2 188.6,200.2 191.4,197.3 189.1,197.3 180.4,206.1    180.4,206.1 169.1,217.3 169.1,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2749_sw0hdxcc1"><polygon
                            points="197.3,217.3 194.5,220.2 194.5,220.2 189.1,225.5 191.4,225.5 197.3,219.6 197.3,217.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2750_sw0hdxcc1"><polygon
                            points="188.6,242.5 188.6,242.5 197.3,233.7 197.3,231.4 197.3,231.4 194.5,234.3 194.5,234.3    180.4,248.4 180.4,248.4 175,253.7 177.3,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2751_sw0hdxcc1"><polygon
                            points="169.1,233.7 174.5,228.4 177.3,225.5 175,225.5 169.1,231.4 169.1,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2752_sw0hdxcc1"><polygon
                            points="180.4,234.3 180.4,234.3 169.1,245.5 169.1,247.8 169.1,247.8 174.5,242.5 188.6,228.4    188.6,228.4 191.4,225.5 189.1,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2753_sw0hdxcc1"><polygon
                            points="197.3,245.5 194.5,248.4 194.5,248.4 189.1,253.7 191.4,253.7 197.3,247.8 197.3,245.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2754_sw0hdxcc1"><polygon
                            points="188.6,270.6 188.6,270.6 197.3,261.9 197.3,259.6 197.3,259.6 194.5,262.5 194.5,262.5    180.4,276.5 180.4,276.5 175,281.9 177.3,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2755_sw0hdxcc1"><polygon
                            points="169.1,261.9 174.5,256.6 177.3,253.7 175,253.7 169.1,259.6 169.1,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2756_sw0hdxcc1"><polygon
                            points="180.4,262.5 180.4,262.5 169.1,273.7 169.1,276 169.1,276 174.5,270.6 188.6,256.6 188.6,256.6    191.4,253.7 189.1,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2757_sw0hdxcc1"><polygon
                            points="197.3,273.7 194.5,276.5 194.5,276.5 189.1,281.9 191.4,281.9 197.3,276 197.3,273.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2758_sw0hdxcc1"><polygon
                            points="188.6,298.8 188.6,298.8 197.3,290.1 197.3,287.8 197.3,287.8 194.5,290.6 194.5,290.6    180.4,304.7 180.4,304.7 175,310.1 177.3,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2759_sw0hdxcc1"><polygon
                            points="169.1,290.1 174.5,284.7 177.3,281.9 175,281.9 169.1,287.8 169.1,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2760_sw0hdxcc1"><polygon
                            points="180.4,290.6 180.4,290.6 169.1,301.9 169.1,304.2 169.1,304.2 174.5,298.8 188.6,284.7    188.6,284.7 191.4,281.9 189.1,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2761_sw0hdxcc1"><polygon
                            points="197.3,304.2 197.3,301.9 197.3,301.9 194.5,304.7 194.5,304.7 189.1,310.1 191.4,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2762_sw0hdxcc1"><polygon
                            points="188.6,327 188.6,327 197.3,318.3 197.3,316 197.3,316 194.5,318.8 194.5,318.8 180.4,332.9    180.4,332.9 175,338.3 177.3,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2763_sw0hdxcc1"><polygon
                            points="169.1,318.3 174.5,312.9 177.3,310.1 175,310.1 169.1,316 169.1,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2764_sw0hdxcc1"><polygon
                            points="169.1,332.4 174.5,327 188.6,312.9 188.6,312.9 191.4,310.1 189.1,310.1 180.4,318.8 180.4,318.8    169.1,330.1 169.1,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2765_sw0hdxcc1"><polygon
                            points="197.3,330.1 194.5,332.9 194.5,332.9 189.1,338.3 191.4,338.3 197.3,332.4 197.3,330.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2766_sw0hdxcc1"><polygon
                            points="197.3,344.2 194.5,347 194.5,347 180.4,361.1 180.4,361.1 175,366.5 177.3,366.5 188.6,355.2    188.6,355.2 197.3,346.5 197.3,344.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2767_sw0hdxcc1"><polygon
                            points="169.1,346.5 174.5,341.1 177.3,338.3 175,338.3 169.1,344.2 169.1,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2768_sw0hdxcc1"><polygon
                            points="180.4,347 180.4,347 169.1,358.3 169.1,360.6 169.1,360.6 174.5,355.2 188.6,341.1 188.6,341.1    191.4,338.3 189.1,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2769_sw0hdxcc1"><polygon
                            points="197.3,360.6 197.3,358.3 197.3,358.3 194.5,361.1 194.5,361.1 189.1,366.5 191.4,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2770_sw0hdxcc1"><polygon
                            points="188.6,383.4 188.6,383.4 197.3,374.7 197.3,372.4 197.3,372.4 194.5,375.2 194.5,375.2    180.4,389.3 180.4,389.3 175,394.7 177.3,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2771_sw0hdxcc1"><polygon
                            points="169.1,372.4 169.1,374.7 169.1,374.7 174.5,369.3 177.3,366.5 175,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2772_sw0hdxcc1"><polygon
                            points="169.1,388.8 174.5,383.4 188.6,369.3 188.6,369.3 191.4,366.5 189.1,366.5 180.4,375.2    180.4,375.2 169.1,386.5 169.1,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2773_sw0hdxcc1"><polygon
                            points="197.3,386.5 194.5,389.3 194.5,389.3 189.1,394.7 191.4,394.7 197.3,388.8 197.3,386.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2774_sw0hdxcc1"><polygon
                            points="188.6,411.6 188.6,411.6 197.3,402.9 197.3,400.6 197.3,400.6 194.5,403.4 194.5,403.4    180.4,417.5 180.4,417.5 175,422.9 177.3,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2775_sw0hdxcc1"><polygon
                            points="169.1,402.9 174.5,397.5 177.3,394.7 175,394.7 169.1,400.6 169.1,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2776_sw0hdxcc1"><polygon
                            points="180.4,403.4 180.4,403.4 169.1,414.7 169.1,417 169.1,417 174.5,411.6 188.6,397.5 188.6,397.5    191.4,394.7 189.1,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2777_sw0hdxcc1"><polygon
                            points="197.3,414.7 194.5,417.5 194.5,417.5 189.1,422.9 191.4,422.9 197.3,417 197.3,414.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2778_sw0hdxcc1"><polygon
                            points="188.6,439.8 188.6,439.8 197.3,431.1 197.3,428.8 197.3,428.8 194.5,431.6 194.5,431.6    180.4,445.7 180.4,445.7 175,451 177.3,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2779_sw0hdxcc1"><polygon
                            points="169.1,431.1 174.5,425.7 177.3,422.9 175,422.9 169.1,428.8 169.1,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2780_sw0hdxcc1"><polygon
                            points="180.4,431.6 180.4,431.6 169.1,442.9 169.1,445.1 169.1,445.1 174.5,439.8 188.6,425.7    188.6,425.7 191.4,422.9 189.1,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2781_sw0hdxcc1"><polygon
                            points="197.3,445.1 197.3,442.9 197.3,442.9 194.5,445.7 194.5,445.7 189.1,451 191.4,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2782_sw0hdxcc1"><polygon
                            points="197.3,456.9 194.5,459.8 194.5,459.8 180.4,473.9 180.4,473.9 175,479.2 177.3,479.2 188.6,468    188.6,468 197.3,459.2 197.3,456.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2783_sw0hdxcc1"><polygon
                            points="169.1,459.2 174.5,453.9 177.3,451 175,451 169.1,456.9 169.1,459.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2784_sw0hdxcc1"><polygon
                            points="169.1,473.3 174.5,468 188.6,453.9 188.6,453.9 191.4,451 189.1,451 180.4,459.8 180.4,459.8    169.1,471 169.1,473.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2785_sw0hdxcc1"><polygon
                            points="197.3,473.3 197.3,471 197.3,471 194.5,473.9 194.5,473.9 189.1,479.2 191.4,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2786_sw0hdxcc1"><path
                            d="M195.3,489.5l2-2v-2.3v0l-2.8,2.8l0,0l-1.1,1.1C194,489.2,194.7,489.3,195.3,489.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2787_sw0hdxcc1"><path
                            d="M171.3,483c0.6,0.2,1.2,0.4,1.7,0.6l1.5-1.5l2.8-2.8H175L171.3,483z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2788_sw0hdxcc1"><path
                            d="M188.6,482.1l2.8-2.8h-2.3l-7,7c0.6,0.2,1.2,0.3,1.8,0.5L188.6,482.1L188.6,482.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2789_sw0hdxcc1"><path
                            d="M152.2,22.8l-5.4,5.4h2.3l11.3-11.3h0l1.9-1.9c-1.2,0.5-2.5,0.9-3.7,1.4L152.2,22.8L152.2,22.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2790_sw0hdxcc1"><polygon
                            points="169.1,22.3 169.1,20 169.1,20 166.3,22.8 166.3,22.8 161,28.2 163.2,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2791_sw0hdxcc1"><polygon
                            points="160.4,45.1 160.4,45.1 169.1,36.4 169.1,34.1 169.1,34.1 166.3,36.9 166.3,36.9 152.2,51 152.2,51    146.9,56.4 149.1,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2792_sw0hdxcc1"><polygon
                            points="141,34.1 141,36.4 141,36.4 146.3,31 149.1,28.2 146.9,28.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2793_sw0hdxcc1"><polygon
                            points="141,50.5 146.3,45.1 160.4,31 160.4,31 163.2,28.2 161,28.2 152.2,36.9 152.2,36.9 141,48.2    141,50.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2794_sw0hdxcc1"><polygon
                            points="169.1,50.5 169.1,48.2 169.1,48.2 166.3,51 166.3,51 161,56.4 163.2,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2795_sw0hdxcc1"><polygon
                            points="169.1,62.3 166.3,65.1 166.3,65.1 152.2,79.2 152.2,79.2 146.9,84.6 149.1,84.6 160.4,73.3    160.4,73.3 169.1,64.6 169.1,62.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2796_sw0hdxcc1"><polygon
                            points="141,64.6 146.3,59.2 149.1,56.4 146.9,56.4 141,62.3 141,64.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2797_sw0hdxcc1"><polygon
                            points="141,78.7 146.3,73.3 160.4,59.2 160.4,59.2 163.2,56.4 161,56.4 152.2,65.1 152.2,65.1 141,76.4    141,78.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2798_sw0hdxcc1"><polygon
                            points="169.1,78.7 169.1,76.4 169.1,76.4 166.3,79.2 166.3,79.2 161,84.6 163.2,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2799_sw0hdxcc1"><polygon
                            points="160.4,101.5 160.4,101.5 169.1,92.8 169.1,90.5 169.1,90.5 166.3,93.3 166.3,93.3 152.2,107.4    152.2,107.4 146.9,112.8 149.1,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2800_sw0hdxcc1"><polygon
                            points="141,90.5 141,92.8 141,92.8 146.3,87.4 149.1,84.6 146.9,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2801_sw0hdxcc1"><polygon
                            points="141,106.9 146.3,101.5 160.4,87.4 160.4,87.4 163.2,84.6 161,84.6 152.2,93.3 152.2,93.3    141,104.6 141,106.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2802_sw0hdxcc1"><polygon
                            points="169.1,106.9 169.1,104.6 169.1,104.6 166.3,107.4 166.3,107.4 161,112.8 163.2,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2803_sw0hdxcc1"><polygon
                            points="160.4,129.7 160.4,129.7 169.1,121 169.1,118.7 169.1,118.7 166.3,121.5 166.3,121.5 152.2,135.6    152.2,135.6 146.9,141 149.1,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2804_sw0hdxcc1"><polygon
                            points="141,121 146.3,115.6 149.1,112.8 146.9,112.8 141,118.7 141,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2805_sw0hdxcc1"><polygon
                            points="141,135.1 146.3,129.7 160.4,115.6 160.4,115.6 163.2,112.8 161,112.8 152.2,121.5 152.2,121.5    141,132.8 141,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2806_sw0hdxcc1"><polygon
                            points="169.1,135.1 169.1,132.8 169.1,132.8 166.3,135.6 166.3,135.6 161,141 163.2,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2807_sw0hdxcc1"><polygon
                            points="160.4,157.9 160.4,157.9 169.1,149.1 169.1,146.9 169.1,146.9 166.3,149.7 166.3,149.7    152.2,163.8 152.2,163.8 146.9,169.1 149.1,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2808_sw0hdxcc1"><polygon
                            points="141,149.1 146.3,143.8 149.1,141 146.9,141 141,146.9 141,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2809_sw0hdxcc1"><polygon
                            points="141,163.2 146.3,157.9 160.4,143.8 160.4,143.8 163.2,141 161,141 152.2,149.7 152.2,149.7    141,160.9 141,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2810_sw0hdxcc1"><polygon
                            points="169.1,163.2 169.1,160.9 169.1,160.9 166.3,163.8 166.3,163.8 161,169.1 163.2,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2811_sw0hdxcc1"><polygon
                            points="169.1,175 166.3,177.9 166.3,177.9 152.2,192 152.2,192 146.9,197.3 149.1,197.3 160.4,186.1    160.4,186.1 169.1,177.3 169.1,175  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2812_sw0hdxcc1"><polygon
                            points="141,177.3 146.3,172 149.1,169.1 146.9,169.1 141,175 141,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2813_sw0hdxcc1"><polygon
                            points="141,191.4 146.3,186.1 160.4,172 160.4,172 163.2,169.1 161,169.1 152.2,177.9 152.2,177.9    141,189.1 141,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2814_sw0hdxcc1"><polygon
                            points="169.1,189.1 166.3,192 166.3,192 161,197.3 163.2,197.3 169.1,191.4 169.1,189.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2815_sw0hdxcc1"><polygon
                            points="169.1,203.2 166.3,206.1 166.3,206.1 152.2,220.2 152.2,220.2 146.9,225.5 149.1,225.5    160.4,214.3 160.4,214.3 169.1,205.5 169.1,203.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2816_sw0hdxcc1"><polygon
                            points="141,203.2 141,205.5 141,205.5 146.3,200.2 149.1,197.3 146.9,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2817_sw0hdxcc1"><polygon
                            points="152.2,206.1 152.2,206.1 141,217.3 141,219.6 141,219.6 146.3,214.3 160.4,200.2 160.4,200.2    163.2,197.3 161,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2818_sw0hdxcc1"><polygon
                            points="169.1,219.6 169.1,217.3 169.1,217.3 166.3,220.2 166.3,220.2 161,225.5 163.2,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2819_sw0hdxcc1"><polygon
                            points="160.4,242.5 160.4,242.5 169.1,233.7 169.1,231.4 169.1,231.4 166.3,234.3 166.3,234.3    152.2,248.4 152.2,248.4 146.9,253.7 149.1,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2820_sw0hdxcc1"><polygon
                            points="141,231.4 141,233.7 141,233.7 146.3,228.4 149.1,225.5 146.9,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2821_sw0hdxcc1"><polygon
                            points="141,247.8 146.3,242.5 160.4,228.4 160.4,228.4 163.2,225.5 161,225.5 152.2,234.3 152.2,234.3    141,245.5 141,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2822_sw0hdxcc1"><polygon
                            points="169.1,245.5 166.3,248.4 166.3,248.4 161,253.7 163.2,253.7 169.1,247.8 169.1,245.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2823_sw0hdxcc1"><polygon
                            points="160.4,270.6 160.4,270.6 169.1,261.9 169.1,259.6 169.1,259.6 166.3,262.5 166.3,262.5    152.2,276.5 152.2,276.5 146.9,281.9 149.1,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2824_sw0hdxcc1"><polygon
                            points="141,261.9 146.3,256.6 149.1,253.7 146.9,253.7 141,259.6 141,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2825_sw0hdxcc1"><polygon
                            points="152.2,262.5 152.2,262.5 141,273.7 141,276 141,276 146.3,270.6 160.4,256.6 160.4,256.6    163.2,253.7 161,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2826_sw0hdxcc1"><polygon
                            points="169.1,273.7 166.3,276.5 166.3,276.5 161,281.9 163.2,281.9 169.1,276 169.1,273.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2827_sw0hdxcc1"><polygon
                            points="160.4,298.8 160.4,298.8 169.1,290.1 169.1,287.8 169.1,287.8 166.3,290.6 166.3,290.6    152.2,304.7 152.2,304.7 146.9,310.1 149.1,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2828_sw0hdxcc1"><polygon
                            points="141,290.1 146.3,284.7 149.1,281.9 146.9,281.9 141,287.8 141,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2829_sw0hdxcc1"><polygon
                            points="152.2,290.6 152.2,290.6 141,301.9 141,304.2 141,304.2 146.3,298.8 160.4,284.7 160.4,284.7    163.2,281.9 161,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2830_sw0hdxcc1"><polygon
                            points="169.1,301.9 166.3,304.7 166.3,304.7 161,310.1 163.2,310.1 169.1,304.2 169.1,301.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2831_sw0hdxcc1"><polygon
                            points="160.4,327 160.4,327 169.1,318.3 169.1,316 169.1,316 166.3,318.8 166.3,318.8 152.2,332.9    152.2,332.9 146.9,338.3 149.1,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2832_sw0hdxcc1"><polygon
                            points="141,318.3 146.3,312.9 149.1,310.1 146.9,310.1 141,316 141,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2833_sw0hdxcc1"><polygon
                            points="152.2,318.8 152.2,318.8 141,330.1 141,332.4 141,332.4 146.3,327 160.4,312.9 160.4,312.9    163.2,310.1 161,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2834_sw0hdxcc1"><polygon
                            points="169.1,332.4 169.1,330.1 169.1,330.1 166.3,332.9 166.3,332.9 161,338.3 163.2,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2835_sw0hdxcc1"><polygon
                            points="160.4,355.2 160.4,355.2 169.1,346.5 169.1,344.2 169.1,344.2 166.3,347 166.3,347 152.2,361.1    152.2,361.1 146.9,366.5 149.1,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2836_sw0hdxcc1"><polygon
                            points="141,346.5 146.3,341.1 149.1,338.3 146.9,338.3 141,344.2 141,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2837_sw0hdxcc1"><polygon
                            points="141,360.6 146.3,355.2 160.4,341.1 160.4,341.1 163.2,338.3 161,338.3 152.2,347 152.2,347    141,358.3 141,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2838_sw0hdxcc1"><polygon
                            points="169.1,358.3 166.3,361.1 166.3,361.1 161,366.5 163.2,366.5 169.1,360.6 169.1,358.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2839_sw0hdxcc1"><polygon
                            points="169.1,372.4 166.3,375.2 166.3,375.2 152.2,389.3 152.2,389.3 146.9,394.7 149.1,394.7    160.4,383.4 160.4,383.4 169.1,374.7 169.1,372.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2840_sw0hdxcc1"><polygon
                            points="141,374.7 146.3,369.3 149.1,366.5 146.9,366.5 141,372.4 141,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2841_sw0hdxcc1"><polygon
                            points="152.2,375.2 152.2,375.2 141,386.5 141,388.8 141,388.8 146.3,383.4 160.4,369.3 160.4,369.3    163.2,366.5 161,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2842_sw0hdxcc1"><polygon
                            points="169.1,388.8 169.1,386.5 169.1,386.5 166.3,389.3 166.3,389.3 161,394.7 163.2,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2843_sw0hdxcc1"><polygon
                            points="160.4,411.6 160.4,411.6 169.1,402.9 169.1,400.6 169.1,400.6 166.3,403.4 166.3,403.4    152.2,417.5 152.2,417.5 146.9,422.9 149.1,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2844_sw0hdxcc1"><polygon
                            points="141,400.6 141,402.9 141,402.9 146.3,397.5 149.1,394.7 146.9,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2845_sw0hdxcc1"><polygon
                            points="141,417 146.3,411.6 160.4,397.5 160.4,397.5 163.2,394.7 161,394.7 152.2,403.4 152.2,403.4    141,414.7 141,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2846_sw0hdxcc1"><polygon
                            points="169.1,414.7 166.3,417.5 166.3,417.5 161,422.9 163.2,422.9 169.1,417 169.1,414.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2847_sw0hdxcc1"><polygon
                            points="160.4,439.8 160.4,439.8 169.1,431.1 169.1,428.8 169.1,428.8 166.3,431.6 166.3,431.6    152.2,445.7 152.2,445.7 146.9,451 149.1,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2848_sw0hdxcc1"><polygon
                            points="141,431.1 146.3,425.7 149.1,422.9 146.9,422.9 141,428.8 141,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2849_sw0hdxcc1"><polygon
                            points="152.2,431.6 152.2,431.6 141,442.9 141,445.1 141,445.1 146.3,439.8 160.4,425.7 160.4,425.7    163.2,422.9 161,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2850_sw0hdxcc1"><polygon
                            points="169.1,442.9 166.3,445.7 166.3,445.7 161,451 163.2,451 169.1,445.1 169.1,442.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2851_sw0hdxcc1"><path
                            d="M160.4,468l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-14.1,14.1l0,0l-1.5,1.5c0.5,0.2,1.1,0.4,1.6,0.7L160.4,468   L160.4,468z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2852_sw0hdxcc1"><polygon
                            points="141,459.2 146.3,453.9 149.1,451 146.9,451 141,456.9 141,459.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2853_sw0hdxcc1"><path
                            d="M152.2,459.8L152.2,459.8L141,471c0.5,0.2,1,0.5,1.6,0.7l3.7-3.7l14.1-14.1h0l2.8-2.8H161L152.2,459.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2854_sw0hdxcc1"><polygon
                            points="169.1,473.3 169.1,471 169.1,471 166.3,473.9 166.3,473.9 161,479.2 163.2,479.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2855_sw0hdxcc1"><path
                            d="M161,479.2l-0.1,0.1c0.6,0.2,1.1,0.4,1.7,0.6l0.8-0.8H161z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2856_sw0hdxcc1"><path
                            d="M137.5,25.8c-1.6,0.8-3.1,1.6-4.7,2.4l-0.1,0.1h2.3L137.5,25.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2857_sw0hdxcc1"><polygon
                            points="141,34.1 138.1,36.9 138.1,36.9 124,51 124,51 118.7,56.4 121,56.4 132.2,45.1 132.2,45.1    141,36.4 141,34.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2858_sw0hdxcc1"><polygon
                            points="118.1,45.1 132.2,31 132.2,31 135.1,28.2 132.8,28.2 124,36.9 124,36.9 112.8,48.2 112.8,50.5    112.8,50.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2859_sw0hdxcc1"><polygon
                            points="141,50.5 141,48.2 141,48.2 138.1,51 138.1,51 132.8,56.4 135.1,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2860_sw0hdxcc1"><polygon
                            points="132.2,73.3 132.2,73.3 141,64.6 141,62.3 141,62.3 138.1,65.1 138.1,65.1 124,79.2 124,79.2    118.7,84.6 121,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2861_sw0hdxcc1"><polygon
                            points="112.8,62.3 112.8,64.6 112.8,64.6 118.1,59.2 121,56.4 118.7,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2862_sw0hdxcc1"><polygon
                            points="112.8,78.7 118.1,73.3 132.2,59.2 132.2,59.2 135.1,56.4 132.8,56.4 124,65.1 124,65.1 112.8,76.4    112.8,78.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2863_sw0hdxcc1"><polygon
                            points="141,78.7 141,76.4 141,76.4 138.1,79.2 138.1,79.2 132.8,84.6 135.1,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2864_sw0hdxcc1"><polygon
                            points="141,90.5 138.1,93.3 138.1,93.3 124,107.4 124,107.4 118.7,112.8 121,112.8 132.2,101.5    132.2,101.5 141,92.8 141,90.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2865_sw0hdxcc1"><polygon
                            points="112.8,92.8 118.1,87.4 121,84.6 118.7,84.6 112.8,90.5 112.8,92.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2866_sw0hdxcc1"><polygon
                            points="112.8,106.9 118.1,101.5 132.2,87.4 132.2,87.4 135.1,84.6 132.8,84.6 124,93.3 124,93.3    112.8,104.6 112.8,106.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2867_sw0hdxcc1"><polygon
                            points="141,106.9 141,104.6 141,104.6 138.1,107.4 138.1,107.4 132.8,112.8 135.1,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2868_sw0hdxcc1"><polygon
                            points="132.2,129.7 132.2,129.7 141,121 141,118.7 141,118.7 138.1,121.5 138.1,121.5 124,135.6    124,135.6 118.7,141 121,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2869_sw0hdxcc1"><polygon
                            points="112.8,118.7 112.8,121 112.8,121 118.1,115.6 121,112.8 118.7,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2870_sw0hdxcc1"><polygon
                            points="112.8,135.1 118.1,129.7 132.2,115.6 132.2,115.6 135.1,112.8 132.8,112.8 124,121.5 124,121.5    112.8,132.8 112.8,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2871_sw0hdxcc1"><polygon
                            points="141,135.1 141,132.8 141,132.8 138.1,135.6 138.1,135.6 132.8,141 135.1,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2872_sw0hdxcc1"><polygon
                            points="132.2,157.9 132.2,157.9 141,149.1 141,146.9 141,146.9 138.1,149.7 138.1,149.7 124,163.8    124,163.8 118.7,169.1 121,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2873_sw0hdxcc1"><polygon
                            points="112.8,149.1 118.1,143.8 121,141 118.7,141 112.8,146.9 112.8,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2874_sw0hdxcc1"><polygon
                            points="112.8,163.2 118.1,157.9 132.2,143.8 132.2,143.8 135.1,141 132.8,141 124,149.7 124,149.7    112.8,160.9 112.8,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2875_sw0hdxcc1"><polygon
                            points="141,163.2 141,160.9 141,160.9 138.1,163.8 138.1,163.8 132.8,169.1 135.1,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2876_sw0hdxcc1"><polygon
                            points="132.2,186.1 132.2,186.1 141,177.3 141,175 141,175 138.1,177.9 138.1,177.9 124,192 124,192    118.7,197.3 121,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2877_sw0hdxcc1"><polygon
                            points="112.8,177.3 118.1,172 121,169.1 118.7,169.1 112.8,175 112.8,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2878_sw0hdxcc1"><polygon
                            points="112.8,191.4 118.1,186.1 132.2,172 132.2,172 135.1,169.1 132.8,169.1 124,177.9 124,177.9    112.8,189.1 112.8,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2879_sw0hdxcc1"><polygon
                            points="141,191.4 141,189.1 141,189.1 138.1,192 138.1,192 132.8,197.3 135.1,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2880_sw0hdxcc1"><polygon
                            points="141,203.2 138.1,206.1 138.1,206.1 124,220.2 124,220.2 118.7,225.5 121,225.5 132.2,214.3    132.2,214.3 141,205.5 141,203.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2881_sw0hdxcc1"><polygon
                            points="112.8,205.5 118.1,200.2 121,197.3 118.7,197.3 112.8,203.2 112.8,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2882_sw0hdxcc1"><polygon
                            points="112.8,219.6 118.1,214.3 132.2,200.2 132.2,200.2 135.1,197.3 132.8,197.3 124,206.1 124,206.1    112.8,217.3 112.8,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2883_sw0hdxcc1"><polygon
                            points="141,217.3 138.1,220.2 138.1,220.2 132.8,225.5 135.1,225.5 141,219.6 141,217.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2884_sw0hdxcc1"><polygon
                            points="141,231.4 138.1,234.3 138.1,234.3 124,248.4 124,248.4 118.7,253.7 121,253.7 132.2,242.5    132.2,242.5 141,233.7 141,231.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2885_sw0hdxcc1"><polygon
                            points="112.8,231.4 112.8,233.7 112.8,233.7 118.1,228.4 121,225.5 118.7,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2886_sw0hdxcc1"><polygon
                            points="124,234.3 124,234.3 112.8,245.5 112.8,247.8 112.8,247.8 118.1,242.5 132.2,228.4 132.2,228.4    135.1,225.5 132.8,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2887_sw0hdxcc1"><polygon
                            points="141,247.8 141,245.5 141,245.5 138.1,248.4 138.1,248.4 132.8,253.7 135.1,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2888_sw0hdxcc1"><polygon
                            points="132.2,270.6 132.2,270.6 141,261.9 141,259.6 141,259.6 138.1,262.5 138.1,262.5 124,276.5    124,276.5 118.7,281.9 121,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2889_sw0hdxcc1"><polygon
                            points="112.8,259.6 112.8,261.9 112.8,261.9 118.1,256.6 121,253.7 118.7,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2890_sw0hdxcc1"><polygon
                            points="112.8,276 118.1,270.6 132.2,256.6 132.2,256.6 135.1,253.7 132.8,253.7 124,262.5 124,262.5    112.8,273.7 112.8,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2891_sw0hdxcc1"><polygon
                            points="141,273.7 138.1,276.5 138.1,276.5 132.8,281.9 135.1,281.9 141,276 141,273.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2892_sw0hdxcc1"><polygon
                            points="132.2,298.8 132.2,298.8 141,290.1 141,287.8 141,287.8 138.1,290.6 138.1,290.6 124,304.7    124,304.7 118.7,310.1 121,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2893_sw0hdxcc1"><polygon
                            points="112.8,290.1 118.1,284.7 121,281.9 118.7,281.9 112.8,287.8 112.8,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2894_sw0hdxcc1"><polygon
                            points="124,290.6 124,290.6 112.8,301.9 112.8,304.2 112.8,304.2 118.1,298.8 132.2,284.7 132.2,284.7    135.1,281.9 132.8,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2895_sw0hdxcc1"><polygon
                            points="141,301.9 138.1,304.7 138.1,304.7 132.8,310.1 135.1,310.1 141,304.2 141,301.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2896_sw0hdxcc1"><polygon
                            points="132.2,327 132.2,327 141,318.3 141,316 141,316 138.1,318.8 138.1,318.8 124,332.9 124,332.9    118.7,338.3 121,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2897_sw0hdxcc1"><polygon
                            points="112.8,318.3 118.1,312.9 121,310.1 118.7,310.1 112.8,316 112.8,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2898_sw0hdxcc1"><polygon
                            points="124,318.8 124,318.8 112.8,330.1 112.8,332.4 112.8,332.4 118.1,327 132.2,312.9 132.2,312.9    135.1,310.1 132.8,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2899_sw0hdxcc1"><polygon
                            points="141,330.1 138.1,332.9 138.1,332.9 132.8,338.3 135.1,338.3 141,332.4 141,330.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2900_sw0hdxcc1"><polygon
                            points="132.2,355.2 132.2,355.2 141,346.5 141,344.2 141,344.2 138.1,347 138.1,347 124,361.1 124,361.1    118.7,366.5 121,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2901_sw0hdxcc1"><polygon
                            points="112.8,346.5 118.1,341.1 121,338.3 118.7,338.3 112.8,344.2 112.8,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2902_sw0hdxcc1"><polygon
                            points="124,347 124,347 112.8,358.3 112.8,360.6 112.8,360.6 118.1,355.2 132.2,341.1 132.2,341.1    135.1,338.3 132.8,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2903_sw0hdxcc1"><polygon
                            points="141,360.6 141,358.3 141,358.3 138.1,361.1 138.1,361.1 132.8,366.5 135.1,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2904_sw0hdxcc1"><polygon
                            points="132.2,383.4 132.2,383.4 141,374.7 141,372.4 141,372.4 138.1,375.2 138.1,375.2 124,389.3    124,389.3 118.7,394.7 121,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2905_sw0hdxcc1"><polygon
                            points="112.8,374.7 118.1,369.3 121,366.5 118.7,366.5 112.8,372.4 112.8,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2906_sw0hdxcc1"><polygon
                            points="112.8,388.8 118.1,383.4 132.2,369.3 132.2,369.3 135.1,366.5 132.8,366.5 124,375.2 124,375.2    112.8,386.5 112.8,388.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2907_sw0hdxcc1"><polygon
                            points="141,386.5 138.1,389.3 138.1,389.3 132.8,394.7 135.1,394.7 141,388.8 141,386.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2908_sw0hdxcc1"><polygon
                            points="141,400.6 138.1,403.4 138.1,403.4 124,417.5 124,417.5 118.7,422.9 121,422.9 132.2,411.6    132.2,411.6 141,402.9 141,400.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2909_sw0hdxcc1"><polygon
                            points="112.8,402.9 118.1,397.5 121,394.7 118.7,394.7 112.8,400.6 112.8,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2910_sw0hdxcc1"><polygon
                            points="124,403.4 124,403.4 112.8,414.7 112.8,417 112.8,417 118.1,411.6 132.2,397.5 132.2,397.5    135.1,394.7 132.8,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2911_sw0hdxcc1"><polygon
                            points="141,417 141,414.7 141,414.7 138.1,417.5 138.1,417.5 132.8,422.9 135.1,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2912_sw0hdxcc1"><polygon
                            points="132.2,439.8 132.2,439.8 141,431.1 141,428.8 141,428.8 138.1,431.6 138.1,431.6 124,445.7    124,445.7 118.7,451 121,451  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2913_sw0hdxcc1"><polygon
                            points="112.8,428.8 112.8,431.1 112.8,431.1 118.1,425.7 121,422.9 118.7,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2914_sw0hdxcc1"><polygon
                            points="112.8,445.1 118.1,439.8 132.2,425.7 132.2,425.7 135.1,422.9 132.8,422.9 124,431.6 124,431.6    112.8,442.9 112.8,445.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2915_sw0hdxcc1"><polygon
                            points="141,442.9 138.1,445.7 138.1,445.7 132.8,451 135.1,451 141,445.1 141,442.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2916_sw0hdxcc1"><path
                            d="M141,456.9L141,456.9l-2.8,2.8l0,0l-6.5,6.5c0.5,0.3,1,0.5,1.5,0.8l7.8-7.8V456.9z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2917_sw0hdxcc1"><path
                            d="M121,451h-2.3l-4.8,4.8c0.5,0.3,0.9,0.6,1.4,0.9l2.9-2.9L121,451z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2918_sw0hdxcc1"><path
                            d="M124,459.8L124,459.8l-1.4,1.4c0.5,0.3,1,0.6,1.4,0.9l8.2-8.2h0l2.8-2.8h-2.3L124,459.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2919_sw0hdxcc1"><path
                            d="M101.5,47.7c-3.4,2.5-6.8,5.1-10,7.7l-1,1h2.3L101.5,47.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2920_sw0hdxcc1"><polygon
                            points="112.8,48.2 109.9,51 109.9,51 104.6,56.4 106.9,56.4 112.8,50.5 112.8,48.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2921_sw0hdxcc1"><polygon
                            points="112.8,62.3 109.9,65.1 109.9,65.1 95.8,79.2 95.8,79.2 90.5,84.6 92.8,84.6 104,73.3 104,73.3    112.8,64.6 112.8,62.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2922_sw0hdxcc1"><polygon
                            points="89.9,59.2 92.8,56.4 90.5,56.4 84.6,62.3 84.6,64.6 84.6,64.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2923_sw0hdxcc1"><polygon
                            points="95.8,65.1 95.8,65.1 84.6,76.4 84.6,78.7 84.6,78.7 89.9,73.3 104,59.2 104,59.2 106.9,56.4    104.6,56.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2924_sw0hdxcc1"><polygon
                            points="112.8,78.7 112.8,76.4 112.8,76.4 109.9,79.2 109.9,79.2 104.6,84.6 106.9,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2925_sw0hdxcc1"><polygon
                            points="104,101.5 104,101.5 112.8,92.8 112.8,90.5 112.8,90.5 109.9,93.3 109.9,93.3 95.8,107.4    95.8,107.4 90.5,112.8 92.8,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2926_sw0hdxcc1"><polygon
                            points="84.6,90.5 84.6,92.8 84.6,92.8 89.9,87.4 92.8,84.6 90.5,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2927_sw0hdxcc1"><polygon
                            points="84.6,106.9 89.9,101.5 104,87.4 104,87.4 106.9,84.6 104.6,84.6 95.8,93.3 95.8,93.3 84.6,104.6    84.6,106.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2928_sw0hdxcc1"><polygon
                            points="112.8,106.9 112.8,104.6 112.8,104.6 109.9,107.4 109.9,107.4 104.6,112.8 106.9,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2929_sw0hdxcc1"><polygon
                            points="112.8,118.7 109.9,121.5 109.9,121.5 95.8,135.6 95.8,135.6 90.5,141 92.8,141 104,129.7    104,129.7 112.8,121 112.8,118.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2930_sw0hdxcc1"><polygon
                            points="84.6,121 89.9,115.6 92.8,112.8 90.5,112.8 84.6,118.7 84.6,121  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2931_sw0hdxcc1"><polygon
                            points="84.6,135.1 89.9,129.7 104,115.6 104,115.6 106.9,112.8 104.6,112.8 95.8,121.5 95.8,121.5    84.6,132.8 84.6,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2932_sw0hdxcc1"><polygon
                            points="112.8,135.1 112.8,132.8 112.8,132.8 109.9,135.6 109.9,135.6 104.6,141 106.9,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2933_sw0hdxcc1"><polygon
                            points="104,157.9 104,157.9 112.8,149.1 112.8,146.9 112.8,146.9 109.9,149.7 109.9,149.7 95.8,163.8    95.8,163.8 90.5,169.1 92.8,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2934_sw0hdxcc1"><polygon
                            points="84.6,146.9 84.6,149.1 84.6,149.1 89.9,143.8 92.8,141 90.5,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2935_sw0hdxcc1"><polygon
                            points="84.6,163.2 89.9,157.9 104,143.8 104,143.8 106.9,141 104.6,141 95.8,149.7 95.8,149.7 84.6,160.9    84.6,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2936_sw0hdxcc1"><polygon
                            points="112.8,163.2 112.8,160.9 112.8,160.9 109.9,163.8 109.9,163.8 104.6,169.1 106.9,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2937_sw0hdxcc1"><polygon
                            points="104,186.1 104,186.1 112.8,177.3 112.8,175 112.8,175 109.9,177.9 109.9,177.9 95.8,192 95.8,192    90.5,197.3 92.8,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2938_sw0hdxcc1"><polygon
                            points="84.6,177.3 89.9,172 92.8,169.1 90.5,169.1 84.6,175 84.6,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2939_sw0hdxcc1"><polygon
                            points="84.6,191.4 89.9,186.1 104,172 104,172 106.9,169.1 104.6,169.1 95.8,177.9 95.8,177.9 84.6,189.1    84.6,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2940_sw0hdxcc1"><polygon
                            points="112.8,191.4 112.8,189.1 112.8,189.1 109.9,192 109.9,192 104.6,197.3 106.9,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2941_sw0hdxcc1"><polygon
                            points="104,214.3 104,214.3 112.8,205.5 112.8,203.2 112.8,203.2 109.9,206.1 109.9,206.1 95.8,220.2    95.8,220.2 90.5,225.5 92.8,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2942_sw0hdxcc1"><polygon
                            points="84.6,205.5 89.9,200.2 92.8,197.3 90.5,197.3 84.6,203.2 84.6,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2943_sw0hdxcc1"><polygon
                            points="84.6,219.6 89.9,214.3 104,200.2 104,200.2 106.9,197.3 104.6,197.3 95.8,206.1 95.8,206.1    84.6,217.3 84.6,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2944_sw0hdxcc1"><polygon
                            points="112.8,219.6 112.8,217.3 112.8,217.3 109.9,220.2 109.9,220.2 104.6,225.5 106.9,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2945_sw0hdxcc1"><polygon
                            points="112.8,231.4 109.9,234.3 109.9,234.3 95.8,248.4 95.8,248.4 90.5,253.7 92.8,253.7 104,242.5    104,242.5 112.8,233.7 112.8,231.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2946_sw0hdxcc1"><polygon
                            points="84.6,233.7 89.9,228.4 92.8,225.5 90.5,225.5 84.6,231.4 84.6,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2947_sw0hdxcc1"><polygon
                            points="84.6,247.8 89.9,242.5 104,228.4 104,228.4 106.9,225.5 104.6,225.5 95.8,234.3 95.8,234.3    84.6,245.5 84.6,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2948_sw0hdxcc1"><polygon
                            points="112.8,245.5 109.9,248.4 109.9,248.4 104.6,253.7 106.9,253.7 112.8,247.8 112.8,245.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2949_sw0hdxcc1"><polygon
                            points="112.8,259.6 109.9,262.5 109.9,262.5 95.8,276.5 95.8,276.5 90.5,281.9 92.8,281.9 104,270.6    104,270.6 112.8,261.9 112.8,259.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2950_sw0hdxcc1"><polygon
                            points="84.6,259.6 84.6,261.9 84.6,261.9 89.9,256.6 92.8,253.7 90.5,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2951_sw0hdxcc1"><polygon
                            points="95.8,262.5 95.8,262.5 84.6,273.7 84.6,276 84.6,276 89.9,270.6 104,256.6 104,256.6 106.9,253.7    104.6,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2952_sw0hdxcc1"><polygon
                            points="112.8,276 112.8,273.7 112.8,273.7 109.9,276.5 109.9,276.5 104.6,281.9 106.9,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2953_sw0hdxcc1"><polygon
                            points="104,298.8 104,298.8 112.8,290.1 112.8,287.8 112.8,287.8 109.9,290.6 109.9,290.6 95.8,304.7    95.8,304.7 90.5,310.1 92.8,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2954_sw0hdxcc1"><polygon
                            points="84.6,287.8 84.6,290.1 84.6,290.1 89.9,284.7 92.8,281.9 90.5,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2955_sw0hdxcc1"><polygon
                            points="84.6,304.2 89.9,298.8 104,284.7 104,284.7 106.9,281.9 104.6,281.9 95.8,290.6 95.8,290.6    84.6,301.9 84.6,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2956_sw0hdxcc1"><polygon
                            points="112.8,301.9 109.9,304.7 109.9,304.7 104.6,310.1 106.9,310.1 112.8,304.2 112.8,301.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2957_sw0hdxcc1"><polygon
                            points="104,327 104,327 112.8,318.3 112.8,316 112.8,316 109.9,318.8 109.9,318.8 95.8,332.9 95.8,332.9    90.5,338.3 92.8,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2958_sw0hdxcc1"><polygon
                            points="84.6,318.3 89.9,312.9 92.8,310.1 90.5,310.1 84.6,316 84.6,318.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2959_sw0hdxcc1"><polygon
                            points="95.8,318.8 95.8,318.8 84.6,330.1 84.6,332.4 84.6,332.4 89.9,327 104,312.9 104,312.9    106.9,310.1 104.6,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2960_sw0hdxcc1"><polygon
                            points="112.8,330.1 109.9,332.9 109.9,332.9 104.6,338.3 106.9,338.3 112.8,332.4 112.8,330.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2961_sw0hdxcc1"><polygon
                            points="104,355.2 104,355.2 112.8,346.5 112.8,344.2 112.8,344.2 109.9,347 109.9,347 95.8,361.1    95.8,361.1 90.5,366.5 92.8,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2962_sw0hdxcc1"><polygon
                            points="84.6,346.5 89.9,341.1 92.8,338.3 90.5,338.3 84.6,344.2 84.6,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2963_sw0hdxcc1"><polygon
                            points="95.8,347 95.8,347 84.6,358.3 84.6,360.6 84.6,360.6 89.9,355.2 104,341.1 104,341.1 106.9,338.3    104.6,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2964_sw0hdxcc1"><polygon
                            points="112.8,358.3 109.9,361.1 109.9,361.1 104.6,366.5 106.9,366.5 112.8,360.6 112.8,358.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2965_sw0hdxcc1"><polygon
                            points="104,383.4 104,383.4 112.8,374.7 112.8,372.4 112.8,372.4 109.9,375.2 109.9,375.2 95.8,389.3    95.8,389.3 90.5,394.7 92.8,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2966_sw0hdxcc1"><polygon
                            points="84.6,374.7 89.9,369.3 92.8,366.5 90.5,366.5 84.6,372.4 84.6,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2967_sw0hdxcc1"><polygon
                            points="95.8,375.2 95.8,375.2 84.6,386.5 84.6,388.8 84.6,388.8 89.9,383.4 104,369.3 104,369.3    106.9,366.5 104.6,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2968_sw0hdxcc1"><polygon
                            points="112.8,388.8 112.8,386.5 112.8,386.5 109.9,389.3 109.9,389.3 104.6,394.7 106.9,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2969_sw0hdxcc1"><polygon
                            points="104,411.6 104,411.6 112.8,402.9 112.8,400.6 112.8,400.6 109.9,403.4 109.9,403.4 95.8,417.5    95.8,417.5 90.5,422.9 92.8,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2970_sw0hdxcc1"><polygon
                            points="84.6,402.9 89.9,397.5 92.8,394.7 90.5,394.7 84.6,400.6 84.6,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2971_sw0hdxcc1"><polygon
                            points="84.6,417 89.9,411.6 104,397.5 104,397.5 106.9,394.7 104.6,394.7 95.8,403.4 95.8,403.4    84.6,414.7 84.6,417  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2972_sw0hdxcc1"><polygon
                            points="112.8,414.7 109.9,417.5 109.9,417.5 104.6,422.9 106.9,422.9 112.8,417 112.8,414.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2973_sw0hdxcc1"><path
                            d="M112.8,428.8l-2.8,2.8l0,0l-12.6,12.6c0.4,0.3,0.9,0.7,1.3,1l5.4-5.4h0l8.7-8.7V428.8L112.8,428.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2974_sw0hdxcc1"><polygon
                            points="84.6,431.1 89.9,425.7 92.8,422.9 90.5,422.9 84.6,428.8 84.6,431.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2975_sw0hdxcc1"><path
                            d="M95.8,431.6L95.8,431.6l-6.4,6.4c0.4,0.3,0.8,0.7,1.3,1l13.3-13.3h0l2.8-2.8h-2.3L95.8,431.6z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2976_sw0hdxcc1"><path
                            d="M112.8,445.1v-2.3v0l-2.8,2.8l0,0l-4.5,4.5c0.4,0.3,0.8,0.6,1.3,0.9h0.2L112.8,445.1z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2977_sw0hdxcc1"><path
                            d="M106.7,451c0,0,0.1,0,0.1,0.1l0.1-0.1H106.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2978_sw0hdxcc1"><polygon
                            points="84.6,62.3 81.7,65.1 81.7,65.1 67.6,79.2 67.6,79.2 62.3,84.6 64.6,84.6 75.8,73.3 75.8,73.3    84.6,64.6 84.6,62.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2979_sw0hdxcc1"><polygon
                            points="84.6,76.4 81.7,79.2 81.7,79.2 76.4,84.6 78.7,84.6 84.6,78.7 84.6,76.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2980_sw0hdxcc1"><polygon
                            points="84.6,90.5 81.7,93.3 81.7,93.3 67.6,107.4 67.6,107.4 62.3,112.8 64.6,112.8 75.8,101.5    75.8,101.5 84.6,92.8 84.6,90.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2981_sw0hdxcc1"><polygon
                            points="56.4,90.5 56.4,92.8 56.4,92.8 61.7,87.4 64.6,84.6 62.3,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2982_sw0hdxcc1"><polygon
                            points="67.6,93.3 67.6,93.3 56.4,104.6 56.4,106.9 56.4,106.9 61.7,101.5 75.8,87.4 75.8,87.4 78.7,84.6    76.4,84.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2983_sw0hdxcc1"><polygon
                            points="84.6,106.9 84.6,104.6 84.6,104.6 81.7,107.4 81.7,107.4 76.4,112.8 78.7,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2984_sw0hdxcc1"><polygon
                            points="75.8,129.7 75.8,129.7 84.6,121 84.6,118.7 84.6,118.7 81.7,121.5 81.7,121.5 67.6,135.6    67.6,135.6 62.3,141 64.6,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2985_sw0hdxcc1"><polygon
                            points="56.4,118.7 56.4,121 56.4,121 61.7,115.6 64.6,112.8 62.3,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2986_sw0hdxcc1"><polygon
                            points="56.4,135.1 61.7,129.7 75.8,115.6 75.8,115.6 78.7,112.8 76.4,112.8 67.6,121.5 67.6,121.5    56.4,132.8 56.4,135.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2987_sw0hdxcc1"><polygon
                            points="84.6,135.1 84.6,132.8 84.6,132.8 81.7,135.6 81.7,135.6 76.4,141 78.7,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2988_sw0hdxcc1"><polygon
                            points="84.6,146.9 81.7,149.7 81.7,149.7 67.6,163.8 67.6,163.8 62.3,169.1 64.6,169.1 75.8,157.9    75.8,157.9 84.6,149.1 84.6,146.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2989_sw0hdxcc1"><polygon
                            points="56.4,149.1 61.7,143.8 64.6,141 62.3,141 56.4,146.9 56.4,149.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2990_sw0hdxcc1"><polygon
                            points="56.4,163.2 61.7,157.9 75.8,143.8 75.8,143.8 78.7,141 76.4,141 67.6,149.7 67.6,149.7 56.4,160.9    56.4,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2991_sw0hdxcc1"><polygon
                            points="84.6,163.2 84.6,160.9 84.6,160.9 81.7,163.8 81.7,163.8 76.4,169.1 78.7,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2992_sw0hdxcc1"><polygon
                            points="75.8,186.1 75.8,186.1 84.6,177.3 84.6,175 84.6,175 81.7,177.9 81.7,177.9 67.6,192 67.6,192    62.3,197.3 64.6,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2993_sw0hdxcc1"><polygon
                            points="56.4,175 56.4,177.3 56.4,177.3 61.7,172 64.6,169.1 62.3,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2994_sw0hdxcc1"><polygon
                            points="56.4,191.4 61.7,186.1 75.8,172 75.8,172 78.7,169.1 76.4,169.1 67.6,177.9 67.6,177.9 56.4,189.1    56.4,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2995_sw0hdxcc1"><polygon
                            points="84.6,191.4 84.6,189.1 84.6,189.1 81.7,192 81.7,192 76.4,197.3 78.7,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2996_sw0hdxcc1"><polygon
                            points="75.8,214.3 75.8,214.3 84.6,205.5 84.6,203.2 84.6,203.2 81.7,206.1 81.7,206.1 67.6,220.2    67.6,220.2 62.3,225.5 64.6,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2997_sw0hdxcc1"><polygon
                            points="56.4,205.5 61.7,200.2 64.6,197.3 62.3,197.3 56.4,203.2 56.4,205.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2998_sw0hdxcc1"><polygon
                            points="56.4,219.6 61.7,214.3 75.8,200.2 75.8,200.2 78.7,197.3 76.4,197.3 67.6,206.1 67.6,206.1    56.4,217.3 56.4,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id2999_sw0hdxcc1"><polygon
                            points="84.6,219.6 84.6,217.3 84.6,217.3 81.7,220.2 81.7,220.2 76.4,225.5 78.7,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3000_sw0hdxcc1"><polygon
                            points="75.8,242.5 75.8,242.5 84.6,233.7 84.6,231.4 84.6,231.4 81.7,234.3 81.7,234.3 67.6,248.4    67.6,248.4 62.3,253.7 64.6,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3001_sw0hdxcc1"><polygon
                            points="56.4,233.7 61.7,228.4 64.6,225.5 62.3,225.5 56.4,231.4 56.4,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3002_sw0hdxcc1"><polygon
                            points="56.4,247.8 61.7,242.5 75.8,228.4 75.8,228.4 78.7,225.5 76.4,225.5 67.6,234.3 67.6,234.3    56.4,245.5 56.4,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3003_sw0hdxcc1"><polygon
                            points="84.6,247.8 84.6,245.5 84.6,245.5 81.7,248.4 81.7,248.4 76.4,253.7 78.7,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3004_sw0hdxcc1"><polygon
                            points="84.6,259.6 81.7,262.5 81.7,262.5 67.6,276.5 67.6,276.5 62.3,281.9 64.6,281.9 75.8,270.6    75.8,270.6 84.6,261.9 84.6,259.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3005_sw0hdxcc1"><polygon
                            points="56.4,261.9 61.7,256.6 64.6,253.7 62.3,253.7 56.4,259.6 56.4,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3006_sw0hdxcc1"><polygon
                            points="56.4,276 61.7,270.6 75.8,256.6 75.8,256.6 78.7,253.7 76.4,253.7 67.6,262.5 67.6,262.5    56.4,273.7 56.4,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3007_sw0hdxcc1"><polygon
                            points="84.6,273.7 81.7,276.5 81.7,276.5 76.4,281.9 78.7,281.9 84.6,276 84.6,273.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3008_sw0hdxcc1"><polygon
                            points="84.6,287.8 81.7,290.6 81.7,290.6 67.6,304.7 67.6,304.7 62.3,310.1 64.6,310.1 75.8,298.8    75.8,298.8 84.6,290.1 84.6,287.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3009_sw0hdxcc1"><polygon
                            points="56.4,287.8 56.4,290.1 56.4,290.1 61.7,284.7 64.6,281.9 62.3,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3010_sw0hdxcc1"><polygon
                            points="67.6,290.6 67.6,290.6 56.4,301.9 56.4,304.2 56.4,304.2 61.7,298.8 75.8,284.7 75.8,284.7    78.7,281.9 76.4,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3011_sw0hdxcc1"><polygon
                            points="84.6,304.2 84.6,301.9 84.6,301.9 81.7,304.7 81.7,304.7 76.4,310.1 78.7,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3012_sw0hdxcc1"><polygon
                            points="75.8,327 75.8,327 84.6,318.3 84.6,316 84.6,316 81.7,318.8 81.7,318.8 67.6,332.9 67.6,332.9    62.3,338.3 64.6,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3013_sw0hdxcc1"><polygon
                            points="56.4,316 56.4,318.3 56.4,318.3 61.7,312.9 64.6,310.1 62.3,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3014_sw0hdxcc1"><polygon
                            points="56.4,332.4 61.7,327 75.8,312.9 75.8,312.9 78.7,310.1 76.4,310.1 67.6,318.8 67.6,318.8    56.4,330.1 56.4,332.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3015_sw0hdxcc1"><polygon
                            points="84.6,330.1 81.7,332.9 81.7,332.9 76.4,338.3 78.7,338.3 84.6,332.4 84.6,330.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3016_sw0hdxcc1"><polygon
                            points="75.8,355.2 75.8,355.2 84.6,346.5 84.6,344.2 84.6,344.2 81.7,347 81.7,347 67.6,361.1 67.6,361.1    62.3,366.5 64.6,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3017_sw0hdxcc1"><polygon
                            points="56.4,346.5 61.7,341.1 64.6,338.3 62.3,338.3 56.4,344.2 56.4,346.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3018_sw0hdxcc1"><polygon
                            points="67.6,347 67.6,347 56.4,358.3 56.4,360.6 56.4,360.6 61.7,355.2 75.8,341.1 75.8,341.1 78.7,338.3    76.4,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3019_sw0hdxcc1"><polygon
                            points="84.6,358.3 81.7,361.1 81.7,361.1 76.4,366.5 78.7,366.5 84.6,360.6 84.6,358.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3020_sw0hdxcc1"><polygon
                            points="75.8,383.4 75.8,383.4 84.6,374.7 84.6,372.4 84.6,372.4 81.7,375.2 81.7,375.2 67.6,389.3    67.6,389.3 62.3,394.7 64.6,394.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3021_sw0hdxcc1"><polygon
                            points="56.4,374.7 61.7,369.3 64.6,366.5 62.3,366.5 56.4,372.4 56.4,374.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3022_sw0hdxcc1"><polygon
                            points="67.6,375.2 67.6,375.2 56.4,386.5 56.4,388.8 56.4,388.8 61.7,383.4 75.8,369.3 75.8,369.3    78.7,366.5 76.4,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3023_sw0hdxcc1"><polygon
                            points="84.6,386.5 81.7,389.3 81.7,389.3 76.4,394.7 78.7,394.7 84.6,388.8 84.6,386.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3024_sw0hdxcc1"><path
                            d="M68.8,418.7l7.1-7.1h0l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-14.1,14.1l0,0l0,0C68,417.9,68.4,418.3,68.8,418.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3025_sw0hdxcc1"><polygon
                            points="56.4,402.9 61.7,397.5 64.6,394.7 62.3,394.7 56.4,400.6 56.4,402.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3026_sw0hdxcc1"><path
                            d="M67.6,403.4L67.6,403.4l-6.7,6.7c0.4,0.4,0.7,0.8,1.1,1.2l13.8-13.8h0l2.8-2.8h-2.3L67.6,403.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3027_sw0hdxcc1"><polygon
                            points="84.6,417 84.6,414.7 84.6,414.7 81.7,417.5 81.7,417.5 76.4,422.9 78.7,422.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3028_sw0hdxcc1"><path
                            d="M84.6,428.8L84.6,428.8l-2.7,2.7c0.4,0.4,0.8,0.7,1.2,1.1l1.5-1.5V428.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3029_sw0hdxcc1"><path
                            d="M75.8,425.7l2.8-2.8h-2.3l-1.7,1.7C75,425,75.4,425.4,75.8,425.7L75.8,425.7L75.8,425.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3030_sw0hdxcc1"><path
                            d="M56.4,90.5l-1,1c-2.7,3.3-5.2,6.6-7.7,10l8.7-8.7V90.5L56.4,90.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3031_sw0hdxcc1"><polygon
                            points="56.4,104.6 53.5,107.4 53.5,107.4 48.2,112.8 50.5,112.8 56.4,106.9 56.4,104.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3032_sw0hdxcc1"><polygon
                            points="56.4,118.7 53.5,121.5 53.5,121.5 39.4,135.6 39.4,135.6 34.1,141 36.4,141 47.6,129.7 47.6,129.7    56.4,121 56.4,118.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3033_sw0hdxcc1"><polygon
                            points="39.4,121.5 39.4,121.5 28.2,132.8 28.2,135.1 28.2,135.1 33.5,129.7 47.6,115.6 47.6,115.6    50.5,112.8 48.2,112.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3034_sw0hdxcc1"><polygon
                            points="56.4,135.1 56.4,132.8 56.4,132.8 53.5,135.6 53.5,135.6 48.2,141 50.5,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3035_sw0hdxcc1"><polygon
                            points="47.6,157.9 47.6,157.9 56.4,149.1 56.4,146.9 56.4,146.9 53.5,149.7 53.5,149.7 39.4,163.8    39.4,163.8 34.1,169.1 36.4,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3036_sw0hdxcc1"><polygon
                            points="28.2,146.9 28.2,149.1 28.2,149.1 33.5,143.8 36.4,141 34.1,141  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3037_sw0hdxcc1"><polygon
                            points="28.2,163.2 33.5,157.9 47.6,143.8 47.6,143.8 50.5,141 48.2,141 39.4,149.7 39.4,149.7 28.2,160.9    28.2,163.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3038_sw0hdxcc1"><polygon
                            points="56.4,163.2 56.4,160.9 56.4,160.9 53.5,163.8 53.5,163.8 48.2,169.1 50.5,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3039_sw0hdxcc1"><polygon
                            points="56.4,175 53.5,177.9 53.5,177.9 39.4,192 39.4,192 34.1,197.3 36.4,197.3 47.6,186.1 47.6,186.1    56.4,177.3 56.4,175  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3040_sw0hdxcc1"><polygon
                            points="28.2,177.3 33.5,172 36.4,169.1 34.1,169.1 28.2,175 28.2,177.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3041_sw0hdxcc1"><polygon
                            points="28.2,191.4 33.5,186.1 47.6,172 47.6,172 50.5,169.1 48.2,169.1 39.4,177.9 39.4,177.9 28.2,189.1    28.2,191.4  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3042_sw0hdxcc1"><polygon
                            points="56.4,191.4 56.4,189.1 56.4,189.1 53.5,192 53.5,192 48.2,197.3 50.5,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3043_sw0hdxcc1"><polygon
                            points="47.6,214.3 47.6,214.3 56.4,205.5 56.4,203.2 56.4,203.2 53.5,206.1 53.5,206.1 39.4,220.2    39.4,220.2 34.1,225.5 36.4,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3044_sw0hdxcc1"><polygon
                            points="28.2,203.2 28.2,205.5 28.2,205.5 33.5,200.2 36.4,197.3 34.1,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3045_sw0hdxcc1"><polygon
                            points="28.2,219.6 33.5,214.3 47.6,200.2 47.6,200.2 50.5,197.3 48.2,197.3 39.4,206.1 39.4,206.1    28.2,217.3 28.2,219.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3046_sw0hdxcc1"><polygon
                            points="56.4,219.6 56.4,217.3 56.4,217.3 53.5,220.2 53.5,220.2 48.2,225.5 50.5,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3047_sw0hdxcc1"><polygon
                            points="47.6,242.5 47.6,242.5 56.4,233.7 56.4,231.4 56.4,231.4 53.5,234.3 53.5,234.3 39.4,248.4    39.4,248.4 34.1,253.7 36.4,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3048_sw0hdxcc1"><polygon
                            points="28.2,233.7 33.5,228.4 36.4,225.5 34.1,225.5 28.2,231.4 28.2,233.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3049_sw0hdxcc1"><polygon
                            points="28.2,247.8 33.5,242.5 47.6,228.4 47.6,228.4 50.5,225.5 48.2,225.5 39.4,234.3 39.4,234.3    28.2,245.5 28.2,247.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3050_sw0hdxcc1"><polygon
                            points="56.4,247.8 56.4,245.5 56.4,245.5 53.5,248.4 53.5,248.4 48.2,253.7 50.5,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3051_sw0hdxcc1"><polygon
                            points="47.6,270.6 47.6,270.6 56.4,261.9 56.4,259.6 56.4,259.6 53.5,262.5 53.5,262.5 39.4,276.5    39.4,276.5 34.1,281.9 36.4,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3052_sw0hdxcc1"><polygon
                            points="28.2,261.9 33.5,256.6 36.4,253.7 34.1,253.7 28.2,259.6 28.2,261.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3053_sw0hdxcc1"><polygon
                            points="28.2,276 33.5,270.6 47.6,256.6 47.6,256.6 50.5,253.7 48.2,253.7 39.4,262.5 39.4,262.5    28.2,273.7 28.2,276  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3054_sw0hdxcc1"><polygon
                            points="56.4,276 56.4,273.7 56.4,273.7 53.5,276.5 53.5,276.5 48.2,281.9 50.5,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3055_sw0hdxcc1"><polygon
                            points="56.4,287.8 53.5,290.6 53.5,290.6 39.4,304.7 39.4,304.7 34.1,310.1 36.4,310.1 47.6,298.8    47.6,298.8 56.4,290.1 56.4,287.8  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3056_sw0hdxcc1"><polygon
                            points="28.2,290.1 33.5,284.7 36.4,281.9 34.1,281.9 28.2,287.8 28.2,290.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3057_sw0hdxcc1"><polygon
                            points="28.2,304.2 33.5,298.8 47.6,284.7 47.6,284.7 50.5,281.9 48.2,281.9 39.4,290.6 39.4,290.6    28.2,301.9 28.2,304.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3058_sw0hdxcc1"><polygon
                            points="56.4,301.9 53.5,304.7 53.5,304.7 48.2,310.1 50.5,310.1 56.4,304.2 56.4,301.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3059_sw0hdxcc1"><polygon
                            points="56.4,316 53.5,318.8 53.5,318.8 39.4,332.9 39.4,332.9 34.1,338.3 36.4,338.3 47.6,327 47.6,327    56.4,318.3 56.4,316  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3060_sw0hdxcc1"><polygon
                            points="28.2,316 28.2,318.3 28.2,318.3 33.5,312.9 36.4,310.1 34.1,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3061_sw0hdxcc1"><polygon
                            points="39.4,318.8 39.4,318.8 28.2,330.1 28.2,332.4 28.2,332.4 33.5,327 47.6,312.9 47.6,312.9    50.5,310.1 48.2,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3062_sw0hdxcc1"><polygon
                            points="56.4,332.4 56.4,330.1 56.4,330.1 53.5,332.9 53.5,332.9 48.2,338.3 50.5,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3063_sw0hdxcc1"><polygon
                            points="36.4,366.5 47.6,355.2 47.6,355.2 56.4,346.5 56.4,344.2 56.4,344.2 53.5,347 53.5,347 39.4,361.1    39.4,361.1 34.1,366.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3064_sw0hdxcc1"><polygon
                            points="28.2,344.2 28.2,346.5 28.2,346.5 33.5,341.1 36.4,338.3 34.1,338.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3065_sw0hdxcc1"><polygon
                            points="28.2,360.6 33.5,355.2 47.6,341.1 47.6,341.1 50.5,338.3 48.2,338.3 39.4,347 39.4,347 28.2,358.3    28.2,360.6  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3066_sw0hdxcc1"><polygon
                            points="56.4,358.3 53.5,361.1 53.5,361.1 48.2,366.5 50.5,366.5 56.4,360.6 56.4,358.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3067_sw0hdxcc1"><path
                            d="M43.5,387.6l4.2-4.2h0l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-11,11C42.8,386.7,43.1,387.1,43.5,387.6z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3068_sw0hdxcc1"><path
                            d="M31.7,368.8c0.3,0.5,0.5,1,0.8,1.5l1-1l2.8-2.8h-2.3L31.7,368.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3069_sw0hdxcc1"><path
                            d="M39.4,375.2L39.4,375.2l-2.5,2.5c0.3,0.5,0.6,0.9,0.9,1.4l9.8-9.8h0l2.8-2.8h-2.3L39.4,375.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3070_sw0hdxcc1"><path
                            d="M56.4,386.5l-2.8,2.8l0,0l-5.2,5.2c0,0.1,0.1,0.1,0.1,0.2h2l5.9-5.9V386.5L56.4,386.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3071_sw0hdxcc1"><path
                            d="M54.5,402.4c0.3,0.4,0.7,0.8,1,1.3l0.8-0.8v-2.3v0L54.5,402.4z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3072_sw0hdxcc1"><path
                            d="M49.3,395.8l1.1-1.1h-2C48.8,395,49.1,395.4,49.3,395.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3073_sw0hdxcc1"><path
                            d="M28.2,132.8L28.2,132.8c-0.9,1.6-1.7,3.2-2.4,4.7l2.4-2.4V132.8L28.2,132.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3074_sw0hdxcc1"><path
                            d="M28.2,146.9l-2.8,2.8l0,0l-8.9,8.9c-0.5,1.2-1,2.5-1.4,3.7l4.4-4.4h0l8.7-8.7V146.9L28.2,146.9z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3075_sw0hdxcc1"><polygon
                            points="28.2,163.2 28.2,160.9 28.2,160.9 25.4,163.8 25.4,163.8 20,169.1 22.3,169.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3076_sw0hdxcc1"><polygon
                            points="19.5,186.1 19.5,186.1 28.2,177.3 28.2,175 28.2,175 25.4,177.9 25.4,177.9 11.3,192 11.3,192    5.9,197.3 8.2,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3077_sw0hdxcc1"><path
                            d="M19.5,172l2.8-2.8H20l-8.7,8.7l0,0l-1.9,1.9c-0.3,1-0.6,2.1-0.9,3.1L19.5,172L19.5,172z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3078_sw0hdxcc1"><polygon
                            points="28.2,191.4 28.2,189.1 28.2,189.1 25.4,192 25.4,192 20,197.3 22.3,197.3  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3079_sw0hdxcc1"><polygon
                            points="28.2,203.2 25.4,206.1 25.4,206.1 11.3,220.2 11.3,220.2 5.9,225.5 8.2,225.5 19.5,214.3    19.5,214.3 28.2,205.5 28.2,203.2  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3080_sw0hdxcc1"><path
                            d="M5.4,200.2l2.8-2.8H5.9l-1,1c-0.2,0.9-0.4,1.9-0.5,2.8L5.4,200.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3081_sw0hdxcc1"><path
                            d="M5.4,214.3l14.1-14.1h0l2.8-2.8H20l-8.7,8.7l0,0l-9.2,9.2c-0.1,0.9-0.2,1.7-0.3,2.6L5.4,214.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3082_sw0hdxcc1"><polygon
                            points="28.2,219.6 28.2,217.3 28.2,217.3 25.4,220.2 25.4,220.2 20,225.5 22.3,225.5  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3083_sw0hdxcc1"><polygon
                            points="8.2,253.7 19.5,242.5 19.5,242.5 28.2,233.7 28.2,231.4 28.2,231.4 25.4,234.3 25.4,234.3    11.3,248.4 11.3,248.4 5.9,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3084_sw0hdxcc1"><path
                            d="M0.6,230.9c-0.1,0.8-0.1,1.6-0.2,2.4l4.9-4.9l2.8-2.8H5.9L0.6,230.9z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3085_sw0hdxcc1"><path
                            d="M5.4,242.5l14.1-14.1h0l2.8-2.8H20l-8.7,8.7l0,0L0,245.5c0,0.7,0,1.3,0,2c0,0.1,0,0.2,0,0.3L5.4,242.5z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3086_sw0hdxcc1"><polygon
                            points="28.2,247.8 28.2,245.5 28.2,245.5 25.4,248.4 25.4,248.4 20,253.7 22.3,253.7  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3087_sw0hdxcc1"><polygon
                            points="19.5,270.6 19.5,270.6 28.2,261.9 28.2,259.6 28.2,259.6 25.4,262.5 25.4,262.5 11.3,276.5    11.3,276.5 5.9,281.9 8.2,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3088_sw0hdxcc1"><path
                            d="M0.3,259.3c0,0.7,0.1,1.5,0.1,2.2l5-5l2.8-2.8H5.9L0.3,259.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3089_sw0hdxcc1"><path
                            d="M5.4,270.6l14.1-14.1h0l2.8-2.8H20l-8.7,8.7l0,0l-10,10c0.1,0.7,0.2,1.4,0.2,2.1L5.4,270.6z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3090_sw0hdxcc1"><polygon
                            points="28.2,276 28.2,273.7 28.2,273.7 25.4,276.5 25.4,276.5 20,281.9 22.3,281.9  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3091_sw0hdxcc1"><path
                            d="M8,310.1h0.2l11.3-11.3h0l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-14.1,14.1l0,0l-3.7,3.7C7.7,309,7.8,309.5,8,310.1z   "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3092_sw0hdxcc1"><path
                            d="M5.4,284.7l2.8-2.8H5.9L2.8,285c0.1,0.7,0.2,1.3,0.3,2L5.4,284.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3093_sw0hdxcc1"><path
                            d="M5.4,298.8l14.1-14.1h0l2.8-2.8H20l-8.7,8.7l0,0L4.9,297C5.1,297.6,5.2,298.2,5.4,298.8L5.4,298.8z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3094_sw0hdxcc1"><polygon
                            points="28.2,304.2 28.2,301.9 28.2,301.9 25.4,304.7 25.4,304.7 20,310.1 22.3,310.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3095_sw0hdxcc1"><path
                            d="M28.2,316l-2.8,2.8l0,0l-11.2,11.2c0.2,0.6,0.4,1.1,0.6,1.7l4.7-4.7h0l8.7-8.7V316L28.2,316z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3096_sw0hdxcc1"><path
                            d="M8,310.3l0.2-0.2H8C8,310.1,8,310.2,8,310.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3097_sw0hdxcc1"><path
                            d="M11.2,321.2l8.3-8.3h0l2.8-2.8H20l-8.7,8.7l0,0l-0.6,0.6C10.8,320,11,320.6,11.2,321.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3098_sw0hdxcc1"><polygon
                            points="28.2,330.1 25.4,332.9 25.4,332.9 20,338.3 22.3,338.3 28.2,332.4 28.2,330.1  "
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3099_sw0hdxcc1"><path
                            d="M28.2,344.2l-2.8,2.8l0,0l-3.1,3.1c0.2,0.5,0.5,1,0.7,1.6l5.2-5.2V344.2L28.2,344.2z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3100_sw0hdxcc1"><path
                            d="M18,340.3c0.2,0.5,0.4,1.1,0.7,1.6l0.8-0.8h0l2.8-2.8H20L18,340.3z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                        <g id="__id3101_sw0hdxcc1"><path
                            d="M26.8,359.7c0.3,0.5,0.5,1,0.8,1.5l0.6-0.6v-2.3v0L26.8,359.7z"
                            style={{
                                fill: 'rgb(34, 65, 98)'
                            }} /></g>
                    </g>
                </svg>
            </div>
            <div
                tabIndex={-1}
                style={{
                    width: '5vw',
                    transform: 'translate(19.4129px, 20.3718px)',
                    position: 'fixed'
                }}>
                <svg viewBox="0 0 500 433">
                    <path d="M0 433L250 0l250 433z" fill="#224162" /><use xlinkHref="#__id3_0" />
                </svg>
            </div>
            <div
                style={{
                    width: '30vw',
                    height: '30vh',
                    transform: 'translate(20vw, 90vh) rotate(0deg)',
                    position: 'fixed'
                }}>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 495 495"
                        enableBackground="new 0 0 495 495"
                        xmlSpace="preserve"
                        style={{
                            fill: 'rgb(0, 0, 0)'
                        }}>
                        <g>
                            <g id="__id9250_s9xaskocwf"><path
                                d="M479.2,163.2l0.8-0.8c-0.2-0.6-0.4-1.1-0.6-1.7l-0.1,0.1V163.2L479.2,163.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9251_s9xaskocwf"><path
                                d="M489.5,195.3c-0.1-0.6-0.3-1.3-0.4-1.9l-3.9,3.9h2.3L489.5,195.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9252_s9xaskocwf"><path
                                d="M483.6,173c-0.2-0.6-0.4-1.2-0.6-1.7l-3.8,3.8v2.3v0L483.6,173z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9253_s9xaskocwf"><path
                                d="M479.2,191.4l5.4-5.4l2.1-2.1c-0.2-0.6-0.3-1.2-0.5-1.8l-7,7V191.4L479.2,191.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9254_s9xaskocwf"><path
                                d="M493.4,219.5c-0.1-0.7-0.2-1.4-0.2-2.1l-2.7,2.7l0,0l-5.4,5.4h2.3L493.4,219.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9255_s9xaskocwf"><polygon
                                points="479.2,205.5 484.6,200.2 487.4,197.3 485.1,197.3 479.2,203.2 479.2,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9256_s9xaskocwf"><path
                                d="M479.2,219.6l5.4-5.4l7.1-7.1c-0.1-0.7-0.2-1.3-0.3-2l-0.9,0.9l0,0l-11.3,11.3V219.6L479.2,219.6z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9257_s9xaskocwf"><path
                                d="M495,246.2c0-0.8,0-1.5,0-2.3l-4.5,4.5l0,0l-5.4,5.4h2.3L495,246.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9258_s9xaskocwf"><polygon
                                points="479.2,233.7 484.6,228.4 487.4,225.5 485.1,225.5 479.2,231.4 479.2,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9259_s9xaskocwf"><path
                                d="M479.2,247.8l5.4-5.4l9.9-9.9c0-0.7-0.1-1.4-0.1-2.2l-3.9,3.9l0,0l-11.3,11.3V247.8L479.2,247.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9260_s9xaskocwf"><path
                                d="M493.4,276c0.1-0.9,0.2-1.7,0.3-2.6l-3.2,3.2l0,0l-5.4,5.4h2.3L493.4,276z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9261_s9xaskocwf"><polygon
                                points="479.2,261.9 484.6,256.6 487.4,253.7 485.1,253.7 479.2,259.6 479.2,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9262_s9xaskocwf"><path
                                d="M479.2,276l5.4-5.4l10.1-10.1c0-0.8,0.1-1.6,0.1-2.4l-4.3,4.3l0,0l-11.3,11.3V276L479.2,276z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9263_s9xaskocwf"><path
                                d="M487.6,307.6l-2.5,2.5h1.9C487.2,309.3,487.4,308.4,487.6,307.6z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9264_s9xaskocwf"><polygon
                                points="479.2,290.1 484.6,284.7 487.4,281.9 485.1,281.9 479.2,287.8 479.2,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9265_s9xaskocwf"><path
                                d="M479.2,304.2l5.4-5.4l6.3-6.3c0.2-0.9,0.3-1.9,0.5-2.8l-0.9,0.9l0,0l-11.3,11.3V304.2L479.2,304.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9266_s9xaskocwf"><path
                                d="M479.2,318.3l5.4-5.4l2.2-2.2c0.1-0.2,0.1-0.4,0.2-0.6h-1.9l-5.9,5.9V318.3L479.2,318.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9267_s9xaskocwf"><path
                                d="M479.2,332.4l1.3-1.3c0.4-1.2,0.8-2.4,1.2-3.5l-2.5,2.5V332.4L479.2,332.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9268_s9xaskocwf"><path
                                d="M451.1,106.9L451.1,106.9c0-0.1,0-0.1,0-0.2V106.9L451.1,106.9z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9269_s9xaskocwf"><path
                                d="M467,133.2c-0.3-0.5-0.5-1-0.8-1.5l-3.9,3.9l0,0L457,141h2.3L467,133.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9270_s9xaskocwf"><path
                                d="M451.1,121l5.4-5.4l0.3-0.3c-0.3-0.5-0.6-0.9-0.9-1.4l-4.8,4.8V121L451.1,121z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9271_s9xaskocwf"><path
                                d="M456.4,129.7l5.6-5.6c-0.3-0.5-0.6-1-0.9-1.4l-10.2,10.2v2.3v0L456.4,129.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9272_s9xaskocwf"><path
                                d="M470.5,157.9L470.5,157.9l5.5-5.5c-0.2-0.5-0.4-1.1-0.7-1.6l-13.1,13.1l0,0l-5.4,5.4h2.3L470.5,157.9z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9273_s9xaskocwf"><polygon
                                points="451.1,149.1 456.4,143.8 459.2,141 457,141 451.1,146.9 451.1,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9274_s9xaskocwf"><path
                                d="M456.4,157.9l14.1-14.1h0l1.2-1.2c-0.2-0.5-0.5-1-0.7-1.6l-8.7,8.7l0,0l-11.3,11.3v2.3v0L456.4,157.9z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9275_s9xaskocwf"><polygon
                                points="479.2,163.2 479.2,160.9 479.2,160.9 476.4,163.8 476.4,163.8 471,169.1 473.3,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9276_s9xaskocwf"><polygon
                                points="479.2,175 476.4,177.9 476.4,177.9 462.3,192 462.3,192 457,197.3 459.2,197.3 470.5,186.1    470.5,186.1 479.2,177.3 479.2,175  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9277_s9xaskocwf"><polygon
                                points="451.1,177.3 456.4,172 459.2,169.1 457,169.1 451.1,175 451.1,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9278_s9xaskocwf"><polygon
                                points="451.1,191.4 456.4,186.1 470.5,172 470.5,172 473.3,169.1 471,169.1 462.3,177.9 462.3,177.9    451.1,189.1 451.1,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9279_s9xaskocwf"><polygon
                                points="479.2,191.4 479.2,189.1 479.2,189.1 476.4,192 476.4,192 471,197.3 473.3,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9280_s9xaskocwf"><polygon
                                points="470.5,214.3 470.5,214.3 479.2,205.5 479.2,203.2 479.2,203.2 476.4,206.1 476.4,206.1    462.3,220.2 462.3,220.2 457,225.5 459.2,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9281_s9xaskocwf"><polygon
                                points="451.1,203.2 451.1,205.5 451.1,205.5 456.4,200.2 459.2,197.3 457,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9282_s9xaskocwf"><polygon
                                points="451.1,219.6 456.4,214.3 470.5,200.2 470.5,200.2 473.3,197.3 471,197.3 462.3,206.1 462.3,206.1    451.1,217.3 451.1,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9283_s9xaskocwf"><polygon
                                points="479.2,219.6 479.2,217.3 479.2,217.3 476.4,220.2 476.4,220.2 471,225.5 473.3,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9284_s9xaskocwf"><polygon
                                points="470.5,242.5 470.5,242.5 479.2,233.7 479.2,231.4 479.2,231.4 476.4,234.3 476.4,234.3    462.3,248.4 462.3,248.4 457,253.7 459.2,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9285_s9xaskocwf"><polygon
                                points="451.1,233.7 456.4,228.4 459.2,225.5 457,225.5 451.1,231.4 451.1,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9286_s9xaskocwf"><polygon
                                points="451.1,247.8 456.4,242.5 470.5,228.4 470.5,228.4 473.3,225.5 471,225.5 462.3,234.3 462.3,234.3    451.1,245.5 451.1,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9287_s9xaskocwf"><polygon
                                points="479.2,247.8 479.2,245.5 479.2,245.5 476.4,248.4 476.4,248.4 471,253.7 473.3,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9288_s9xaskocwf"><polygon
                                points="470.5,270.6 470.5,270.6 479.2,261.9 479.2,259.6 479.2,259.6 476.4,262.5 476.4,262.5    462.3,276.5 462.3,276.5 457,281.9 459.2,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9289_s9xaskocwf"><polygon
                                points="451.1,261.9 456.4,256.6 459.2,253.7 457,253.7 451.1,259.6 451.1,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9290_s9xaskocwf"><polygon
                                points="451.1,276 456.4,270.6 470.5,256.6 470.5,256.6 473.3,253.7 471,253.7 462.3,262.5 462.3,262.5    451.1,273.7 451.1,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9291_s9xaskocwf"><polygon
                                points="479.2,276 479.2,273.7 479.2,273.7 476.4,276.5 476.4,276.5 471,281.9 473.3,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9292_s9xaskocwf"><polygon
                                points="470.5,298.8 470.5,298.8 479.2,290.1 479.2,287.8 479.2,287.8 476.4,290.6 476.4,290.6    462.3,304.7 462.3,304.7 457,310.1 459.2,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9293_s9xaskocwf"><polygon
                                points="451.1,290.1 456.4,284.7 459.2,281.9 457,281.9 451.1,287.8 451.1,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9294_s9xaskocwf"><polygon
                                points="451.1,304.2 456.4,298.8 470.5,284.7 470.5,284.7 473.3,281.9 471,281.9 462.3,290.6 462.3,290.6    451.1,301.9 451.1,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9295_s9xaskocwf"><polygon
                                points="479.2,304.2 479.2,301.9 479.2,301.9 476.4,304.7 476.4,304.7 471,310.1 473.3,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9296_s9xaskocwf"><polygon
                                points="470.5,327 470.5,327 479.2,318.3 479.2,316 479.2,316 476.4,318.8 476.4,318.8 462.3,332.9    462.3,332.9 457,338.3 459.2,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9297_s9xaskocwf"><polygon
                                points="451.1,318.3 456.4,312.9 459.2,310.1 457,310.1 451.1,316 451.1,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9298_s9xaskocwf"><polygon
                                points="451.1,332.4 456.4,327 470.5,312.9 470.5,312.9 473.3,310.1 471,310.1 462.3,318.8 462.3,318.8    451.1,330.1 451.1,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9299_s9xaskocwf"><polygon
                                points="479.2,332.4 479.2,330.1 479.2,330.1 476.4,332.9 476.4,332.9 471,338.3 473.3,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9300_s9xaskocwf"><path
                                d="M470.3,355.5c0.7-1.4,1.4-2.9,2-4.3l-10,10l0,0l-5.4,5.4h2.3L470.3,355.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9301_s9xaskocwf"><polygon
                                points="451.1,346.5 456.4,341.1 459.2,338.3 457,338.3 451.1,344.2 451.1,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9302_s9xaskocwf"><polygon
                                points="451.1,360.6 456.4,355.2 470.5,341.1 470.5,341.1 473.3,338.3 471,338.3 462.3,347 462.3,347    451.1,358.3 451.1,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9303_s9xaskocwf"><polygon
                                points="451.1,374.7 456.4,369.3 459.2,366.5 457,366.5 451.1,372.4 451.1,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9304_s9xaskocwf"><path
                                d="M454.8,382.7l-3.8,3.8v1.8C452.3,386.5,453.6,384.6,454.8,382.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9305_s9xaskocwf"><path
                                d="M432.5,83.1c-0.4-0.4-0.7-0.8-1.1-1.2l-2.7,2.7h2.3L432.5,83.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9306_s9xaskocwf"><path
                                d="M422.9,78.7l2.9-2.9c-0.4-0.4-0.8-0.8-1.1-1.2l-1.7,1.7V78.7L422.9,78.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9307_s9xaskocwf"><path
                                d="M442.3,101.5L442.3,101.5l2.9-2.9c-0.3-0.4-0.7-0.9-1-1.3l-10.1,10.1l0,0l-5.4,5.4h2.3L442.3,101.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9308_s9xaskocwf"><polygon
                                points="422.9,92.8 428.2,87.4 431.1,84.6 428.8,84.6 422.9,90.5 422.9,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9309_s9xaskocwf"><path
                                d="M428.2,101.5L439,90.7c-0.3-0.4-0.7-0.8-1-1.3l-3.9,3.9l0,0l-11.3,11.3v2.3v0L428.2,101.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9310_s9xaskocwf"><path
                                d="M451.1,106.9v-0.2c-0.3-0.4-0.6-0.8-0.9-1.3l-2,2l0,0l-5.4,5.4h2.3L451.1,106.9z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9311_s9xaskocwf"><polygon
                                points="442.3,129.7 442.3,129.7 451.1,121 451.1,118.7 451.1,118.7 448.2,121.5 448.2,121.5 434.1,135.6    434.1,135.6 428.8,141 431.1,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9312_s9xaskocwf"><polygon
                                points="428.2,115.6 431.1,112.8 428.8,112.8 422.9,118.7 422.9,121 422.9,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9313_s9xaskocwf"><polygon
                                points="422.9,135.1 428.2,129.7 442.3,115.6 442.3,115.6 445.2,112.8 442.9,112.8 434.1,121.5    434.1,121.5 422.9,132.8 422.9,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9314_s9xaskocwf"><polygon
                                points="451.1,132.8 448.2,135.6 448.2,135.6 442.9,141 445.2,141 451.1,135.1 451.1,132.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9315_s9xaskocwf"><polygon
                                points="442.3,157.9 442.3,157.9 451.1,149.1 451.1,146.9 451.1,146.9 448.2,149.7 448.2,149.7    434.1,163.8 434.1,163.8 428.8,169.1 431.1,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9316_s9xaskocwf"><polygon
                                points="422.9,149.1 428.2,143.8 431.1,141 428.8,141 422.9,146.9 422.9,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9317_s9xaskocwf"><polygon
                                points="434.1,149.7 434.1,149.7 422.9,160.9 422.9,163.2 422.9,163.2 428.2,157.9 442.3,143.8    442.3,143.8 445.2,141 442.9,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9318_s9xaskocwf"><polygon
                                points="451.1,160.9 448.2,163.8 448.2,163.8 442.9,169.1 445.2,169.1 451.1,163.2 451.1,160.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9319_s9xaskocwf"><polygon
                                points="442.3,186.1 442.3,186.1 451.1,177.3 451.1,175 451.1,175 448.2,177.9 448.2,177.9 434.1,192    434.1,192 428.8,197.3 431.1,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9320_s9xaskocwf"><polygon
                                points="422.9,177.3 428.2,172 431.1,169.1 428.8,169.1 422.9,175 422.9,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9321_s9xaskocwf"><polygon
                                points="434.1,177.9 434.1,177.9 422.9,189.1 422.9,191.4 422.9,191.4 428.2,186.1 442.3,172 442.3,172    445.2,169.1 442.9,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9322_s9xaskocwf"><polygon
                                points="451.1,191.4 451.1,189.1 451.1,189.1 448.2,192 448.2,192 442.9,197.3 445.2,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9323_s9xaskocwf"><polygon
                                points="451.1,203.2 448.2,206.1 448.2,206.1 434.1,220.2 434.1,220.2 428.8,225.5 431.1,225.5    442.3,214.3 442.3,214.3 451.1,205.5 451.1,203.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9324_s9xaskocwf"><polygon
                                points="422.9,205.5 428.2,200.2 431.1,197.3 428.8,197.3 422.9,203.2 422.9,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9325_s9xaskocwf"><polygon
                                points="422.9,219.6 428.2,214.3 442.3,200.2 442.3,200.2 445.2,197.3 442.9,197.3 434.1,206.1    434.1,206.1 422.9,217.3 422.9,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9326_s9xaskocwf"><polygon
                                points="451.1,219.6 451.1,217.3 451.1,217.3 448.2,220.2 448.2,220.2 442.9,225.5 445.2,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9327_s9xaskocwf"><polygon
                                points="442.3,242.5 442.3,242.5 451.1,233.7 451.1,231.4 451.1,231.4 448.2,234.3 448.2,234.3    434.1,248.4 434.1,248.4 428.8,253.7 431.1,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9328_s9xaskocwf"><polygon
                                points="422.9,231.4 422.9,233.7 422.9,233.7 428.2,228.4 431.1,225.5 428.8,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9329_s9xaskocwf"><polygon
                                points="422.9,247.8 428.2,242.5 442.3,228.4 442.3,228.4 445.2,225.5 442.9,225.5 434.1,234.3    434.1,234.3 422.9,245.5 422.9,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9330_s9xaskocwf"><polygon
                                points="451.1,247.8 451.1,245.5 451.1,245.5 448.2,248.4 448.2,248.4 442.9,253.7 445.2,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9331_s9xaskocwf"><polygon
                                points="442.3,270.6 442.3,270.6 451.1,261.9 451.1,259.6 451.1,259.6 448.2,262.5 448.2,262.5    434.1,276.5 434.1,276.5 428.8,281.9 431.1,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9332_s9xaskocwf"><polygon
                                points="422.9,261.9 428.2,256.6 431.1,253.7 428.8,253.7 422.9,259.6 422.9,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9333_s9xaskocwf"><polygon
                                points="422.9,276 428.2,270.6 442.3,256.6 442.3,256.6 445.2,253.7 442.9,253.7 434.1,262.5 434.1,262.5    422.9,273.7 422.9,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9334_s9xaskocwf"><polygon
                                points="451.1,276 451.1,273.7 451.1,273.7 448.2,276.5 448.2,276.5 442.9,281.9 445.2,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9335_s9xaskocwf"><polygon
                                points="442.3,298.8 442.3,298.8 451.1,290.1 451.1,287.8 451.1,287.8 448.2,290.6 448.2,290.6    434.1,304.7 434.1,304.7 428.8,310.1 431.1,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9336_s9xaskocwf"><polygon
                                points="422.9,290.1 428.2,284.7 431.1,281.9 428.8,281.9 422.9,287.8 422.9,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9337_s9xaskocwf"><polygon
                                points="422.9,304.2 428.2,298.8 442.3,284.7 442.3,284.7 445.2,281.9 442.9,281.9 434.1,290.6    434.1,290.6 422.9,301.9 422.9,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9338_s9xaskocwf"><polygon
                                points="451.1,304.2 451.1,301.9 451.1,301.9 448.2,304.7 448.2,304.7 442.9,310.1 445.2,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9339_s9xaskocwf"><polygon
                                points="442.3,327 442.3,327 451.1,318.3 451.1,316 451.1,316 448.2,318.8 448.2,318.8 434.1,332.9    434.1,332.9 428.8,338.3 431.1,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9340_s9xaskocwf"><polygon
                                points="422.9,318.3 428.2,312.9 431.1,310.1 428.8,310.1 422.9,316 422.9,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9341_s9xaskocwf"><polygon
                                points="422.9,332.4 428.2,327 442.3,312.9 442.3,312.9 445.2,310.1 442.9,310.1 434.1,318.8 434.1,318.8    422.9,330.1 422.9,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9342_s9xaskocwf"><polygon
                                points="451.1,332.4 451.1,330.1 451.1,330.1 448.2,332.9 448.2,332.9 442.9,338.3 445.2,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9343_s9xaskocwf"><polygon
                                points="442.3,355.2 442.3,355.2 451.1,346.5 451.1,344.2 451.1,344.2 448.2,347 448.2,347 434.1,361.1    434.1,361.1 428.8,366.5 431.1,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9344_s9xaskocwf"><polygon
                                points="422.9,346.5 428.2,341.1 431.1,338.3 428.8,338.3 422.9,344.2 422.9,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9345_s9xaskocwf"><polygon
                                points="422.9,360.6 428.2,355.2 442.3,341.1 442.3,341.1 445.2,338.3 442.9,338.3 434.1,347 434.1,347    422.9,358.3 422.9,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9346_s9xaskocwf"><polygon
                                points="451.1,360.6 451.1,358.3 451.1,358.3 448.2,361.1 448.2,361.1 442.9,366.5 445.2,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9347_s9xaskocwf"><polygon
                                points="442.3,383.4 442.3,383.4 451.1,374.7 451.1,372.4 451.1,372.4 448.2,375.2 448.2,375.2    434.1,389.3 434.1,389.3 428.8,394.7 431.1,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9348_s9xaskocwf"><polygon
                                points="422.9,374.7 428.2,369.3 431.1,366.5 428.8,366.5 422.9,372.4 422.9,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9349_s9xaskocwf"><polygon
                                points="422.9,388.8 428.2,383.4 442.3,369.3 442.3,369.3 445.2,366.5 442.9,366.5 434.1,375.2    434.1,375.2 422.9,386.5 422.9,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9350_s9xaskocwf"><path
                                d="M450,389.8c0.4-0.5,0.7-1,1-1.5v-1.8v0l-2.8,2.8l0,0l-5.4,5.4h2.3L450,389.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9351_s9xaskocwf"><polygon
                                points="422.9,402.9 428.2,397.5 431.1,394.7 428.8,394.7 422.9,400.6 422.9,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9352_s9xaskocwf"><polygon
                                points="422.9,417 428.2,411.6 442.3,397.5 442.3,397.5 445.2,394.7 442.9,394.7 434.1,403.4 434.1,403.4    422.9,414.7 422.9,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9353_s9xaskocwf"><path
                                d="M403.7,55.5c-0.4-0.3-0.8-0.7-1.3-1l-1.9,1.9h2.3L403.7,55.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9354_s9xaskocwf"><path
                                d="M394.7,50.5L394.7,50.5l1.1-1.1c-0.4-0.3-0.8-0.6-1.1-0.8V50.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9355_s9xaskocwf"><path
                                d="M414.1,73.3L414.1,73.3l4.6-4.6c-0.4-0.4-0.8-0.7-1.2-1.1l-11.6,11.6l0,0l-5.4,5.4h2.3L414.1,73.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9356_s9xaskocwf"><polygon
                                points="394.7,64.6 400,59.2 402.9,56.4 400.6,56.4 394.7,62.3 394.7,64.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9357_s9xaskocwf"><path
                                d="M405.9,65.1l-11.3,11.3v2.3v0l5.4-5.4L411.3,62c-0.4-0.4-0.8-0.7-1.2-1.1L405.9,65.1L405.9,65.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9358_s9xaskocwf"><polygon
                                points="422.9,78.7 422.9,76.4 422.9,76.4 420,79.2 420,79.2 414.7,84.6 417,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9359_s9xaskocwf"><polygon
                                points="414.1,101.5 414.1,101.5 422.9,92.8 422.9,90.5 422.9,90.5 420,93.3 420,93.3 405.9,107.4    405.9,107.4 400.6,112.8 402.9,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9360_s9xaskocwf"><polygon
                                points="394.7,92.8 400,87.4 402.9,84.6 400.6,84.6 394.7,90.5 394.7,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9361_s9xaskocwf"><polygon
                                points="394.7,106.9 400,101.5 414.1,87.4 414.1,87.4 417,84.6 414.7,84.6 405.9,93.3 405.9,93.3    394.7,104.6 394.7,106.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9362_s9xaskocwf"><polygon
                                points="422.9,104.6 420,107.4 420,107.4 414.7,112.8 417,112.8 422.9,106.9 422.9,104.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9363_s9xaskocwf"><polygon
                                points="422.9,118.7 420,121.5 420,121.5 405.9,135.6 405.9,135.6 400.6,141 402.9,141 414.1,129.7    414.1,129.7 422.9,121 422.9,118.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9364_s9xaskocwf"><polygon
                                points="394.7,121 400,115.6 402.9,112.8 400.6,112.8 394.7,118.7 394.7,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9365_s9xaskocwf"><polygon
                                points="405.9,121.5 405.9,121.5 394.7,132.8 394.7,135.1 394.7,135.1 400,129.7 414.1,115.6 414.1,115.6    417,112.8 414.7,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9366_s9xaskocwf"><polygon
                                points="422.9,135.1 422.9,132.8 422.9,132.8 420,135.6 420,135.6 414.7,141 417,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9367_s9xaskocwf"><polygon
                                points="414.1,157.9 414.1,157.9 422.9,149.1 422.9,146.9 422.9,146.9 420,149.7 420,149.7 405.9,163.8    405.9,163.8 400.6,169.1 402.9,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9368_s9xaskocwf"><polygon
                                points="394.7,146.9 394.7,149.1 394.7,149.1 400,143.8 402.9,141 400.6,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9369_s9xaskocwf"><polygon
                                points="394.7,163.2 400,157.9 414.1,143.8 414.1,143.8 417,141 414.7,141 405.9,149.7 405.9,149.7    394.7,160.9 394.7,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9370_s9xaskocwf"><polygon
                                points="422.9,160.9 420,163.8 420,163.8 414.7,169.1 417,169.1 422.9,163.2 422.9,160.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9371_s9xaskocwf"><polygon
                                points="414.1,186.1 414.1,186.1 422.9,177.3 422.9,175 422.9,175 420,177.9 420,177.9 405.9,192    405.9,192 400.6,197.3 402.9,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9372_s9xaskocwf"><polygon
                                points="394.7,177.3 400,172 402.9,169.1 400.6,169.1 394.7,175 394.7,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9373_s9xaskocwf"><polygon
                                points="405.9,177.9 405.9,177.9 394.7,189.1 394.7,191.4 394.7,191.4 400,186.1 414.1,172 414.1,172    417,169.1 414.7,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9374_s9xaskocwf"><polygon
                                points="422.9,189.1 420,192 420,192 414.7,197.3 417,197.3 422.9,191.4 422.9,189.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9375_s9xaskocwf"><polygon
                                points="414.1,214.3 414.1,214.3 422.9,205.5 422.9,203.2 422.9,203.2 420,206.1 420,206.1 405.9,220.2    405.9,220.2 400.6,225.5 402.9,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9376_s9xaskocwf"><polygon
                                points="394.7,205.5 400,200.2 402.9,197.3 400.6,197.3 394.7,203.2 394.7,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9377_s9xaskocwf"><polygon
                                points="405.9,206.1 405.9,206.1 394.7,217.3 394.7,219.6 394.7,219.6 400,214.3 414.1,200.2 414.1,200.2    417,197.3 414.7,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9378_s9xaskocwf"><polygon
                                points="422.9,219.6 422.9,217.3 422.9,217.3 420,220.2 420,220.2 414.7,225.5 417,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9379_s9xaskocwf"><polygon
                                points="422.9,231.4 420,234.3 420,234.3 405.9,248.4 405.9,248.4 400.6,253.7 402.9,253.7 414.1,242.5    414.1,242.5 422.9,233.7 422.9,231.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9380_s9xaskocwf"><polygon
                                points="394.7,233.7 400,228.4 402.9,225.5 400.6,225.5 394.7,231.4 394.7,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9381_s9xaskocwf"><polygon
                                points="394.7,247.8 400,242.5 414.1,228.4 414.1,228.4 417,225.5 414.7,225.5 405.9,234.3 405.9,234.3    394.7,245.5 394.7,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9382_s9xaskocwf"><polygon
                                points="422.9,247.8 422.9,245.5 422.9,245.5 420,248.4 420,248.4 414.7,253.7 417,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9383_s9xaskocwf"><polygon
                                points="414.1,270.6 414.1,270.6 422.9,261.9 422.9,259.6 422.9,259.6 420,262.5 420,262.5 405.9,276.5    405.9,276.5 400.6,281.9 402.9,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9384_s9xaskocwf"><polygon
                                points="394.7,259.6 394.7,261.9 394.7,261.9 400,256.6 402.9,253.7 400.6,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9385_s9xaskocwf"><polygon
                                points="394.7,276 400,270.6 414.1,256.6 414.1,256.6 417,253.7 414.7,253.7 405.9,262.5 405.9,262.5    394.7,273.7 394.7,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9386_s9xaskocwf"><polygon
                                points="422.9,276 422.9,273.7 422.9,273.7 420,276.5 420,276.5 414.7,281.9 417,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9387_s9xaskocwf"><polygon
                                points="414.1,298.8 414.1,298.8 422.9,290.1 422.9,287.8 422.9,287.8 420,290.6 420,290.6 405.9,304.7    405.9,304.7 400.6,310.1 402.9,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9388_s9xaskocwf"><polygon
                                points="394.7,290.1 400,284.7 402.9,281.9 400.6,281.9 394.7,287.8 394.7,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9389_s9xaskocwf"><polygon
                                points="394.7,304.2 400,298.8 414.1,284.7 414.1,284.7 417,281.9 414.7,281.9 405.9,290.6 405.9,290.6    394.7,301.9 394.7,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9390_s9xaskocwf"><polygon
                                points="422.9,304.2 422.9,301.9 422.9,301.9 420,304.7 420,304.7 414.7,310.1 417,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9391_s9xaskocwf"><polygon
                                points="414.1,327 414.1,327 422.9,318.3 422.9,316 422.9,316 420,318.8 420,318.8 405.9,332.9    405.9,332.9 400.6,338.3 402.9,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9392_s9xaskocwf"><polygon
                                points="394.7,318.3 400,312.9 402.9,310.1 400.6,310.1 394.7,316 394.7,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9393_s9xaskocwf"><polygon
                                points="394.7,332.4 400,327 414.1,312.9 414.1,312.9 417,310.1 414.7,310.1 405.9,318.8 405.9,318.8    394.7,330.1 394.7,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9394_s9xaskocwf"><polygon
                                points="422.9,332.4 422.9,330.1 422.9,330.1 420,332.9 420,332.9 414.7,338.3 417,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9395_s9xaskocwf"><polygon
                                points="414.1,355.2 414.1,355.2 422.9,346.5 422.9,344.2 422.9,344.2 420,347 420,347 405.9,361.1    405.9,361.1 400.6,366.5 402.9,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9396_s9xaskocwf"><polygon
                                points="394.7,346.5 400,341.1 402.9,338.3 400.6,338.3 394.7,344.2 394.7,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9397_s9xaskocwf"><polygon
                                points="394.7,360.6 400,355.2 414.1,341.1 414.1,341.1 417,338.3 414.7,338.3 405.9,347 405.9,347    394.7,358.3 394.7,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9398_s9xaskocwf"><polygon
                                points="422.9,360.6 422.9,358.3 422.9,358.3 420,361.1 420,361.1 414.7,366.5 417,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9399_s9xaskocwf"><polygon
                                points="414.1,383.4 414.1,383.4 422.9,374.7 422.9,372.4 422.9,372.4 420,375.2 420,375.2 405.9,389.3    405.9,389.3 400.6,394.7 402.9,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9400_s9xaskocwf"><polygon
                                points="394.7,374.7 400,369.3 402.9,366.5 400.6,366.5 394.7,372.4 394.7,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9401_s9xaskocwf"><polygon
                                points="394.7,388.8 400,383.4 414.1,369.3 414.1,369.3 417,366.5 414.7,366.5 405.9,375.2 405.9,375.2    394.7,386.5 394.7,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9402_s9xaskocwf"><polygon
                                points="422.9,388.8 422.9,386.5 422.9,386.5 420,389.3 420,389.3 414.7,394.7 417,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9403_s9xaskocwf"><polygon
                                points="414.1,411.6 414.1,411.6 422.9,402.9 422.9,400.6 422.9,400.6 420,403.4 420,403.4 405.9,417.5    405.9,417.5 400.6,422.9 402.9,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9404_s9xaskocwf"><polygon
                                points="394.7,402.9 400,397.5 402.9,394.7 400.6,394.7 394.7,400.6 394.7,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9405_s9xaskocwf"><polygon
                                points="394.7,417 400,411.6 414.1,397.5 414.1,397.5 417,394.7 414.7,394.7 405.9,403.4 405.9,403.4    394.7,414.7 394.7,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9406_s9xaskocwf"><polygon
                                points="422.9,417 422.9,414.7 422.9,414.7 420,417.5 420,417.5 414.7,422.9 417,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9407_s9xaskocwf"><polygon
                                points="394.7,431.1 400,425.7 402.9,422.9 400.6,422.9 394.7,428.8 394.7,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9408_s9xaskocwf"><polygon
                                points="394.7,445.1 400,439.8 414.1,425.7 414.1,425.7 417,422.9 414.7,422.9 405.9,431.6 405.9,431.6    394.7,442.9 394.7,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9409_s9xaskocwf"><path
                                d="M385.9,45.1L385.9,45.1l1.7-1.7c-0.5-0.3-0.9-0.6-1.4-0.9l-8.5,8.5l0,0l-5.4,5.4h2.3L385.9,45.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9410_s9xaskocwf"><path
                                d="M366.5,36.4l3.8-3.8c-0.5-0.3-1-0.5-1.5-0.8l-2.3,2.3V36.4L366.5,36.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9411_s9xaskocwf"><path
                                d="M366.5,50.5L366.5,50.5l5.4-5.4l7.3-7.3c-0.5-0.3-0.9-0.6-1.4-0.9l-11.2,11.2V50.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9412_s9xaskocwf"><path
                                d="M394.5,48.4l-2.7,2.7l0,0l-5.4,5.4h2.3l5.9-5.9v-2C394.6,48.5,394.5,48.4,394.5,48.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9413_s9xaskocwf"><polygon
                                points="385.9,73.3 385.9,73.3 394.7,64.6 394.7,62.3 394.7,62.3 391.8,65.1 391.8,65.1 377.7,79.2    377.7,79.2 372.4,84.6 374.7,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9414_s9xaskocwf"><polygon
                                points="366.5,64.6 371.8,59.2 374.7,56.4 372.4,56.4 366.5,62.3 366.5,64.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9415_s9xaskocwf"><polygon
                                points="377.7,65.1 377.7,65.1 366.5,76.4 366.5,78.7 366.5,78.7 371.8,73.3 385.9,59.2 385.9,59.2    388.8,56.4 386.5,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9416_s9xaskocwf"><polygon
                                points="394.7,76.4 391.8,79.2 391.8,79.2 386.5,84.6 388.8,84.6 394.7,78.7 394.7,76.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9417_s9xaskocwf"><polygon
                                points="385.9,101.5 385.9,101.5 394.7,92.8 394.7,90.5 394.7,90.5 391.8,93.3 391.8,93.3 377.7,107.4    377.7,107.4 372.4,112.8 374.7,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9418_s9xaskocwf"><polygon
                                points="366.5,92.8 371.8,87.4 374.7,84.6 372.4,84.6 366.5,90.5 366.5,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9419_s9xaskocwf"><polygon
                                points="377.7,93.3 377.7,93.3 366.5,104.6 366.5,106.9 366.5,106.9 371.8,101.5 385.9,87.4 385.9,87.4    388.8,84.6 386.5,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9420_s9xaskocwf"><polygon
                                points="394.7,106.9 394.7,104.6 394.7,104.6 391.8,107.4 391.8,107.4 386.5,112.8 388.8,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9421_s9xaskocwf"><polygon
                                points="385.9,129.7 385.9,129.7 394.7,121 394.7,118.7 394.7,118.7 391.8,121.5 391.8,121.5 377.7,135.6    377.7,135.6 372.4,141 374.7,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9422_s9xaskocwf"><polygon
                                points="366.5,121 371.8,115.6 374.7,112.8 372.4,112.8 366.5,118.7 366.5,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9423_s9xaskocwf"><polygon
                                points="366.5,135.1 371.8,129.7 385.9,115.6 385.9,115.6 388.8,112.8 386.5,112.8 377.7,121.5    377.7,121.5 366.5,132.8 366.5,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9424_s9xaskocwf"><polygon
                                points="394.7,132.8 391.8,135.6 391.8,135.6 386.5,141 388.8,141 394.7,135.1 394.7,132.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9425_s9xaskocwf"><polygon
                                points="394.7,146.9 391.8,149.7 391.8,149.7 377.7,163.8 377.7,163.8 372.4,169.1 374.7,169.1    385.9,157.9 385.9,157.9 394.7,149.1 394.7,146.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9426_s9xaskocwf"><polygon
                                points="366.5,149.1 371.8,143.8 374.7,141 372.4,141 366.5,146.9 366.5,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9427_s9xaskocwf"><polygon
                                points="377.7,149.7 377.7,149.7 366.5,160.9 366.5,163.2 366.5,163.2 371.8,157.9 385.9,143.8    385.9,143.8 388.8,141 386.5,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9428_s9xaskocwf"><polygon
                                points="394.7,163.2 394.7,160.9 394.7,160.9 391.8,163.8 391.8,163.8 386.5,169.1 388.8,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9429_s9xaskocwf"><polygon
                                points="385.9,186.1 385.9,186.1 394.7,177.3 394.7,175 394.7,175 391.8,177.9 391.8,177.9 377.7,192    377.7,192 372.4,197.3 374.7,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9430_s9xaskocwf"><polygon
                                points="366.5,175 366.5,177.3 366.5,177.3 371.8,172 374.7,169.1 372.4,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9431_s9xaskocwf"><polygon
                                points="366.5,191.4 371.8,186.1 385.9,172 385.9,172 388.8,169.1 386.5,169.1 377.7,177.9 377.7,177.9    366.5,189.1 366.5,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9432_s9xaskocwf"><polygon
                                points="394.7,189.1 391.8,192 391.8,192 386.5,197.3 388.8,197.3 394.7,191.4 394.7,189.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9433_s9xaskocwf"><polygon
                                points="385.9,214.3 385.9,214.3 394.7,205.5 394.7,203.2 394.7,203.2 391.8,206.1 391.8,206.1    377.7,220.2 377.7,220.2 372.4,225.5 374.7,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9434_s9xaskocwf"><polygon
                                points="366.5,205.5 371.8,200.2 374.7,197.3 372.4,197.3 366.5,203.2 366.5,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9435_s9xaskocwf"><polygon
                                points="377.7,206.1 377.7,206.1 366.5,217.3 366.5,219.6 366.5,219.6 371.8,214.3 385.9,200.2    385.9,200.2 388.8,197.3 386.5,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9436_s9xaskocwf"><polygon
                                points="394.7,217.3 391.8,220.2 391.8,220.2 386.5,225.5 388.8,225.5 394.7,219.6 394.7,217.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9437_s9xaskocwf"><polygon
                                points="385.9,242.5 385.9,242.5 394.7,233.7 394.7,231.4 394.7,231.4 391.8,234.3 391.8,234.3    377.7,248.4 377.7,248.4 372.4,253.7 374.7,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9438_s9xaskocwf"><polygon
                                points="366.5,233.7 371.8,228.4 374.7,225.5 372.4,225.5 366.5,231.4 366.5,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9439_s9xaskocwf"><polygon
                                points="377.7,234.3 377.7,234.3 366.5,245.5 366.5,247.8 366.5,247.8 371.8,242.5 385.9,228.4    385.9,228.4 388.8,225.5 386.5,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9440_s9xaskocwf"><polygon
                                points="394.7,247.8 394.7,245.5 394.7,245.5 391.8,248.4 391.8,248.4 386.5,253.7 388.8,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9441_s9xaskocwf"><polygon
                                points="394.7,259.6 391.8,262.5 391.8,262.5 377.7,276.5 377.7,276.5 372.4,281.9 374.7,281.9    385.9,270.6 385.9,270.6 394.7,261.9 394.7,259.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9442_s9xaskocwf"><polygon
                                points="366.5,261.9 371.8,256.6 374.7,253.7 372.4,253.7 366.5,259.6 366.5,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9443_s9xaskocwf"><polygon
                                points="366.5,276 371.8,270.6 385.9,256.6 385.9,256.6 388.8,253.7 386.5,253.7 377.7,262.5 377.7,262.5    366.5,273.7 366.5,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9444_s9xaskocwf"><polygon
                                points="394.7,276 394.7,273.7 394.7,273.7 391.8,276.5 391.8,276.5 386.5,281.9 388.8,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9445_s9xaskocwf"><polygon
                                points="385.9,298.8 385.9,298.8 394.7,290.1 394.7,287.8 394.7,287.8 391.8,290.6 391.8,290.6    377.7,304.7 377.7,304.7 372.4,310.1 374.7,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9446_s9xaskocwf"><polygon
                                points="366.5,287.8 366.5,290.1 366.5,290.1 371.8,284.7 374.7,281.9 372.4,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9447_s9xaskocwf"><polygon
                                points="366.5,304.2 371.8,298.8 385.9,284.7 385.9,284.7 388.8,281.9 386.5,281.9 377.7,290.6    377.7,290.6 366.5,301.9 366.5,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9448_s9xaskocwf"><polygon
                                points="394.7,304.2 394.7,301.9 394.7,301.9 391.8,304.7 391.8,304.7 386.5,310.1 388.8,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9449_s9xaskocwf"><polygon
                                points="385.9,327 385.9,327 394.7,318.3 394.7,316 394.7,316 391.8,318.8 391.8,318.8 377.7,332.9    377.7,332.9 372.4,338.3 374.7,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9450_s9xaskocwf"><polygon
                                points="366.5,318.3 371.8,312.9 374.7,310.1 372.4,310.1 366.5,316 366.5,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9451_s9xaskocwf"><polygon
                                points="366.5,332.4 371.8,327 385.9,312.9 385.9,312.9 388.8,310.1 386.5,310.1 377.7,318.8 377.7,318.8    366.5,330.1 366.5,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9452_s9xaskocwf"><polygon
                                points="394.7,332.4 394.7,330.1 394.7,330.1 391.8,332.9 391.8,332.9 386.5,338.3 388.8,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9453_s9xaskocwf"><polygon
                                points="385.9,355.2 385.9,355.2 394.7,346.5 394.7,344.2 394.7,344.2 391.8,347 391.8,347 377.7,361.1    377.7,361.1 372.4,366.5 374.7,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9454_s9xaskocwf"><polygon
                                points="366.5,346.5 371.8,341.1 374.7,338.3 372.4,338.3 366.5,344.2 366.5,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9455_s9xaskocwf"><polygon
                                points="366.5,360.6 371.8,355.2 385.9,341.1 385.9,341.1 388.8,338.3 386.5,338.3 377.7,347 377.7,347    366.5,358.3 366.5,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9456_s9xaskocwf"><polygon
                                points="394.7,360.6 394.7,358.3 394.7,358.3 391.8,361.1 391.8,361.1 386.5,366.5 388.8,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9457_s9xaskocwf"><polygon
                                points="385.9,383.4 385.9,383.4 394.7,374.7 394.7,372.4 394.7,372.4 391.8,375.2 391.8,375.2    377.7,389.3 377.7,389.3 372.4,394.7 374.7,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9458_s9xaskocwf"><polygon
                                points="366.5,374.7 371.8,369.3 374.7,366.5 372.4,366.5 366.5,372.4 366.5,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9459_s9xaskocwf"><polygon
                                points="366.5,388.8 371.8,383.4 385.9,369.3 385.9,369.3 388.8,366.5 386.5,366.5 377.7,375.2    377.7,375.2 366.5,386.5 366.5,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9460_s9xaskocwf"><polygon
                                points="394.7,388.8 394.7,386.5 394.7,386.5 391.8,389.3 391.8,389.3 386.5,394.7 388.8,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9461_s9xaskocwf"><polygon
                                points="385.9,411.6 385.9,411.6 394.7,402.9 394.7,400.6 394.7,400.6 391.8,403.4 391.8,403.4    377.7,417.5 377.7,417.5 372.4,422.9 374.7,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9462_s9xaskocwf"><polygon
                                points="366.5,402.9 371.8,397.5 374.7,394.7 372.4,394.7 366.5,400.6 366.5,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9463_s9xaskocwf"><polygon
                                points="366.5,417 371.8,411.6 385.9,397.5 385.9,397.5 388.8,394.7 386.5,394.7 377.7,403.4 377.7,403.4    366.5,414.7 366.5,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9464_s9xaskocwf"><polygon
                                points="394.7,417 394.7,414.7 394.7,414.7 391.8,417.5 391.8,417.5 386.5,422.9 388.8,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9465_s9xaskocwf"><polygon
                                points="385.9,439.8 385.9,439.8 394.7,431.1 394.7,428.8 394.7,428.8 391.8,431.6 391.8,431.6    377.7,445.7 377.7,445.7 372.4,451 374.7,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9466_s9xaskocwf"><polygon
                                points="366.5,431.1 371.8,425.7 374.7,422.9 372.4,422.9 366.5,428.8 366.5,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9467_s9xaskocwf"><polygon
                                points="366.5,445.1 371.8,439.8 385.9,425.7 385.9,425.7 388.8,422.9 386.5,422.9 377.7,431.6    377.7,431.6 366.5,442.9 366.5,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9468_s9xaskocwf"><path
                                d="M388.3,451c0.5-0.3,1-0.7,1.5-1l4.9-4.9v-2.3v0l-2.8,2.8l0,0l-5.4,5.4H388.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9469_s9xaskocwf"><polygon
                                points="366.5,459.2 371.8,453.9 374.7,451 372.4,451 366.5,456.9 366.5,459.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9470_s9xaskocwf"><path
                                d="M382.7,454.8c1.9-1.2,3.8-2.5,5.6-3.8h-1.8L382.7,454.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9471_s9xaskocwf"><path
                                d="M349.5,22.8l-5.4,5.4h2.3l5.2-5.2c-0.5-0.2-1-0.5-1.6-0.7L349.5,22.8L349.5,22.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9472_s9xaskocwf"><path
                                d="M338.3,22.3L338.3,22.3l3.6-3.6c-0.5-0.2-1.1-0.4-1.6-0.7l-2,2V22.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9473_s9xaskocwf"><path
                                d="M361.2,27.6c-0.5-0.3-1-0.5-1.5-0.8l-1.4,1.4h2.3L361.2,27.6z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9474_s9xaskocwf"><polygon
                                points="357.7,45.1 357.7,45.1 366.5,36.4 366.5,34.1 366.5,34.1 363.6,36.9 363.6,36.9 349.5,51 349.5,51    344.2,56.4 346.5,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9475_s9xaskocwf"><polygon
                                points="338.3,34.1 338.3,36.4 338.3,36.4 343.6,31 346.5,28.2 344.2,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9476_s9xaskocwf"><polygon
                                points="338.3,50.5 343.6,45.1 357.7,31 357.7,31 360.6,28.2 358.3,28.2 349.5,36.9 349.5,36.9 338.3,48.2    338.3,50.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9477_s9xaskocwf"><polygon
                                points="366.5,48.2 363.6,51 363.6,51 358.3,56.4 360.6,56.4 366.5,50.5 366.5,48.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9478_s9xaskocwf"><polygon
                                points="357.7,73.3 357.7,73.3 366.5,64.6 366.5,62.3 366.5,62.3 363.6,65.1 363.6,65.1 349.5,79.2    349.5,79.2 344.2,84.6 346.5,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9479_s9xaskocwf"><polygon
                                points="338.3,64.6 343.6,59.2 346.5,56.4 344.2,56.4 338.3,62.3 338.3,64.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9480_s9xaskocwf"><polygon
                                points="349.5,65.1 349.5,65.1 338.3,76.4 338.3,78.7 338.3,78.7 343.6,73.3 357.7,59.2 357.7,59.2    360.6,56.4 358.3,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9481_s9xaskocwf"><polygon
                                points="366.5,76.4 363.6,79.2 363.6,79.2 358.3,84.6 360.6,84.6 366.5,78.7 366.5,76.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9482_s9xaskocwf"><polygon
                                points="357.7,101.5 357.7,101.5 366.5,92.8 366.5,90.5 366.5,90.5 363.6,93.3 363.6,93.3 349.5,107.4    349.5,107.4 344.2,112.8 346.5,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9483_s9xaskocwf"><polygon
                                points="338.3,92.8 343.6,87.4 346.5,84.6 344.2,84.6 338.3,90.5 338.3,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9484_s9xaskocwf"><polygon
                                points="349.5,93.3 349.5,93.3 338.3,104.6 338.3,106.9 338.3,106.9 343.6,101.5 357.7,87.4 357.7,87.4    360.6,84.6 358.3,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9485_s9xaskocwf"><polygon
                                points="366.5,104.6 363.6,107.4 363.6,107.4 358.3,112.8 360.6,112.8 366.5,106.9 366.5,104.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9486_s9xaskocwf"><polygon
                                points="357.7,129.7 357.7,129.7 366.5,121 366.5,118.7 366.5,118.7 363.6,121.5 363.6,121.5 349.5,135.6    349.5,135.6 344.2,141 346.5,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9487_s9xaskocwf"><polygon
                                points="338.3,121 343.6,115.6 346.5,112.8 344.2,112.8 338.3,118.7 338.3,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9488_s9xaskocwf"><polygon
                                points="349.5,121.5 349.5,121.5 338.3,132.8 338.3,135.1 338.3,135.1 343.6,129.7 357.7,115.6    357.7,115.6 360.6,112.8 358.3,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9489_s9xaskocwf"><polygon
                                points="366.5,135.1 366.5,132.8 366.5,132.8 363.6,135.6 363.6,135.6 358.3,141 360.6,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9490_s9xaskocwf"><polygon
                                points="357.7,157.9 357.7,157.9 366.5,149.1 366.5,146.9 366.5,146.9 363.6,149.7 363.6,149.7    349.5,163.8 349.5,163.8 344.2,169.1 346.5,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9491_s9xaskocwf"><polygon
                                points="338.3,149.1 343.6,143.8 346.5,141 344.2,141 338.3,146.9 338.3,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9492_s9xaskocwf"><polygon
                                points="338.3,163.2 343.6,157.9 357.7,143.8 357.7,143.8 360.6,141 358.3,141 349.5,149.7 349.5,149.7    338.3,160.9 338.3,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9493_s9xaskocwf"><polygon
                                points="366.5,160.9 363.6,163.8 363.6,163.8 358.3,169.1 360.6,169.1 366.5,163.2 366.5,160.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9494_s9xaskocwf"><polygon
                                points="366.5,175 363.6,177.9 363.6,177.9 349.5,192 349.5,192 344.2,197.3 346.5,197.3 357.7,186.1    357.7,186.1 366.5,177.3 366.5,175  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9495_s9xaskocwf"><polygon
                                points="338.3,177.3 343.6,172 346.5,169.1 344.2,169.1 338.3,175 338.3,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9496_s9xaskocwf"><polygon
                                points="349.5,177.9 349.5,177.9 338.3,189.1 338.3,191.4 338.3,191.4 343.6,186.1 357.7,172 357.7,172    360.6,169.1 358.3,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9497_s9xaskocwf"><polygon
                                points="366.5,191.4 366.5,189.1 366.5,189.1 363.6,192 363.6,192 358.3,197.3 360.6,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9498_s9xaskocwf"><polygon
                                points="357.7,214.3 357.7,214.3 366.5,205.5 366.5,203.2 366.5,203.2 363.6,206.1 363.6,206.1    349.5,220.2 349.5,220.2 344.2,225.5 346.5,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9499_s9xaskocwf"><polygon
                                points="338.3,203.2 338.3,205.5 338.3,205.5 343.6,200.2 346.5,197.3 344.2,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9500_s9xaskocwf"><polygon
                                points="338.3,219.6 343.6,214.3 357.7,200.2 357.7,200.2 360.6,197.3 358.3,197.3 349.5,206.1    349.5,206.1 338.3,217.3 338.3,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9501_s9xaskocwf"><polygon
                                points="366.5,217.3 363.6,220.2 363.6,220.2 358.3,225.5 360.6,225.5 366.5,219.6 366.5,217.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9502_s9xaskocwf"><polygon
                                points="357.7,242.5 357.7,242.5 366.5,233.7 366.5,231.4 366.5,231.4 363.6,234.3 363.6,234.3    349.5,248.4 349.5,248.4 344.2,253.7 346.5,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9503_s9xaskocwf"><polygon
                                points="338.3,233.7 343.6,228.4 346.5,225.5 344.2,225.5 338.3,231.4 338.3,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9504_s9xaskocwf"><polygon
                                points="349.5,234.3 349.5,234.3 338.3,245.5 338.3,247.8 338.3,247.8 343.6,242.5 357.7,228.4    357.7,228.4 360.6,225.5 358.3,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9505_s9xaskocwf"><polygon
                                points="366.5,245.5 363.6,248.4 363.6,248.4 358.3,253.7 360.6,253.7 366.5,247.8 366.5,245.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9506_s9xaskocwf"><polygon
                                points="357.7,270.6 357.7,270.6 366.5,261.9 366.5,259.6 366.5,259.6 363.6,262.5 363.6,262.5    349.5,276.5 349.5,276.5 344.2,281.9 346.5,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9507_s9xaskocwf"><polygon
                                points="338.3,261.9 343.6,256.6 346.5,253.7 344.2,253.7 338.3,259.6 338.3,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9508_s9xaskocwf"><polygon
                                points="349.5,262.5 349.5,262.5 338.3,273.7 338.3,276 338.3,276 343.6,270.6 357.7,256.6 357.7,256.6    360.6,253.7 358.3,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9509_s9xaskocwf"><polygon
                                points="366.5,276 366.5,273.7 366.5,273.7 363.6,276.5 363.6,276.5 358.3,281.9 360.6,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9510_s9xaskocwf"><polygon
                                points="366.5,287.8 363.6,290.6 363.6,290.6 349.5,304.7 349.5,304.7 344.2,310.1 346.5,310.1    357.7,298.8 357.7,298.8 366.5,290.1 366.5,287.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9511_s9xaskocwf"><polygon
                                points="338.3,290.1 343.6,284.7 346.5,281.9 344.2,281.9 338.3,287.8 338.3,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9512_s9xaskocwf"><polygon
                                points="338.3,304.2 343.6,298.8 357.7,284.7 357.7,284.7 360.6,281.9 358.3,281.9 349.5,290.6    349.5,290.6 338.3,301.9 338.3,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9513_s9xaskocwf"><polygon
                                points="366.5,304.2 366.5,301.9 366.5,301.9 363.6,304.7 363.6,304.7 358.3,310.1 360.6,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9514_s9xaskocwf"><polygon
                                points="357.7,327 357.7,327 366.5,318.3 366.5,316 366.5,316 363.6,318.8 363.6,318.8 349.5,332.9    349.5,332.9 344.2,338.3 346.5,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9515_s9xaskocwf"><polygon
                                points="338.3,316 338.3,318.3 338.3,318.3 343.6,312.9 346.5,310.1 344.2,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9516_s9xaskocwf"><polygon
                                points="338.3,332.4 343.6,327 357.7,312.9 357.7,312.9 360.6,310.1 358.3,310.1 349.5,318.8 349.5,318.8    338.3,330.1 338.3,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9517_s9xaskocwf"><polygon
                                points="366.5,332.4 366.5,330.1 366.5,330.1 363.6,332.9 363.6,332.9 358.3,338.3 360.6,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9518_s9xaskocwf"><polygon
                                points="357.7,355.2 357.7,355.2 366.5,346.5 366.5,344.2 366.5,344.2 363.6,347 363.6,347 349.5,361.1    349.5,361.1 344.2,366.5 346.5,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9519_s9xaskocwf"><polygon
                                points="338.3,346.5 343.6,341.1 346.5,338.3 344.2,338.3 338.3,344.2 338.3,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9520_s9xaskocwf"><polygon
                                points="338.3,360.6 343.6,355.2 357.7,341.1 357.7,341.1 360.6,338.3 358.3,338.3 349.5,347 349.5,347    338.3,358.3 338.3,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9521_s9xaskocwf"><polygon
                                points="366.5,360.6 366.5,358.3 366.5,358.3 363.6,361.1 363.6,361.1 358.3,366.5 360.6,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9522_s9xaskocwf"><polygon
                                points="357.7,383.4 357.7,383.4 366.5,374.7 366.5,372.4 366.5,372.4 363.6,375.2 363.6,375.2    349.5,389.3 349.5,389.3 344.2,394.7 346.5,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9523_s9xaskocwf"><polygon
                                points="338.3,374.7 343.6,369.3 346.5,366.5 344.2,366.5 338.3,372.4 338.3,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9524_s9xaskocwf"><polygon
                                points="338.3,388.8 343.6,383.4 357.7,369.3 357.7,369.3 360.6,366.5 358.3,366.5 349.5,375.2    349.5,375.2 338.3,386.5 338.3,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9525_s9xaskocwf"><polygon
                                points="366.5,388.8 366.5,386.5 366.5,386.5 363.6,389.3 363.6,389.3 358.3,394.7 360.6,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9526_s9xaskocwf"><polygon
                                points="357.7,411.6 357.7,411.6 366.5,402.9 366.5,400.6 366.5,400.6 363.6,403.4 363.6,403.4    349.5,417.5 349.5,417.5 344.2,422.9 346.5,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9527_s9xaskocwf"><polygon
                                points="338.3,402.9 343.6,397.5 346.5,394.7 344.2,394.7 338.3,400.6 338.3,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9528_s9xaskocwf"><polygon
                                points="338.3,417 343.6,411.6 357.7,397.5 357.7,397.5 360.6,394.7 358.3,394.7 349.5,403.4 349.5,403.4    338.3,414.7 338.3,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9529_s9xaskocwf"><polygon
                                points="366.5,417 366.5,414.7 366.5,414.7 363.6,417.5 363.6,417.5 358.3,422.9 360.6,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9530_s9xaskocwf"><polygon
                                points="357.7,439.8 357.7,439.8 366.5,431.1 366.5,428.8 366.5,428.8 363.6,431.6 363.6,431.6    349.5,445.7 349.5,445.7 344.2,451 346.5,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9531_s9xaskocwf"><polygon
                                points="338.3,431.1 343.6,425.7 346.5,422.9 344.2,422.9 338.3,428.8 338.3,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9532_s9xaskocwf"><polygon
                                points="338.3,445.1 343.6,439.8 357.7,425.7 357.7,425.7 360.6,422.9 358.3,422.9 349.5,431.6    349.5,431.6 338.3,442.9 338.3,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9533_s9xaskocwf"><polygon
                                points="366.5,445.1 366.5,442.9 366.5,442.9 363.6,445.7 363.6,445.7 358.3,451 360.6,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9534_s9xaskocwf"><path
                                d="M357.7,468l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-12.5,12.5c1.5-0.7,2.9-1.3,4.3-2L357.7,468L357.7,468z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9535_s9xaskocwf"><polygon
                                points="338.3,459.2 343.6,453.9 346.5,451 344.2,451 338.3,456.9 338.3,459.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9536_s9xaskocwf"><polygon
                                points="338.3,473.3 343.6,468 357.7,453.9 357.7,453.9 360.6,451 358.3,451 349.5,459.8 349.5,459.8    338.3,471 338.3,473.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9537_s9xaskocwf"><path
                                d="M321.4,22.8l-5.4,5.4h2.3l11.3-11.3h0l2.2-2.2c-0.6-0.2-1.1-0.4-1.7-0.6L321.4,22.8L321.4,22.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9538_s9xaskocwf"><path
                                d="M310.1,8.2l0.2-0.2c-0.1,0-0.1,0-0.2,0V8.2L310.1,8.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9539_s9xaskocwf"><path
                                d="M310.1,22.3l5.4-5.4l5.8-5.8c-0.6-0.2-1.2-0.4-1.8-0.5l-9.4,9.4V22.3L310.1,22.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9540_s9xaskocwf"><polygon
                                points="338.3,20 335.5,22.8 335.5,22.8 330.1,28.2 332.4,28.2 338.3,22.3 338.3,20  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9541_s9xaskocwf"><polygon
                                points="338.3,34.1 335.5,36.9 335.5,36.9 321.4,51 321.4,51 316,56.4 318.3,56.4 329.5,45.1 329.5,45.1    338.3,36.4 338.3,34.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9542_s9xaskocwf"><polygon
                                points="310.1,34.1 310.1,36.4 310.1,36.4 315.5,31 318.3,28.2 316,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9543_s9xaskocwf"><polygon
                                points="321.4,36.9 321.4,36.9 310.1,48.2 310.1,50.5 310.1,50.5 315.5,45.1 329.5,31 329.5,31 332.4,28.2    330.1,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9544_s9xaskocwf"><polygon
                                points="338.3,50.5 338.3,48.2 338.3,48.2 335.5,51 335.5,51 330.1,56.4 332.4,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9545_s9xaskocwf"><polygon
                                points="329.5,73.3 329.5,73.3 338.3,64.6 338.3,62.3 338.3,62.3 335.5,65.1 335.5,65.1 321.4,79.2    321.4,79.2 316,84.6 318.3,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9546_s9xaskocwf"><polygon
                                points="310.1,62.3 310.1,64.6 310.1,64.6 315.5,59.2 318.3,56.4 316,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9547_s9xaskocwf"><polygon
                                points="310.1,78.7 315.5,73.3 329.5,59.2 329.5,59.2 332.4,56.4 330.1,56.4 321.4,65.1 321.4,65.1    310.1,76.4 310.1,78.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9548_s9xaskocwf"><polygon
                                points="338.3,76.4 335.5,79.2 335.5,79.2 330.1,84.6 332.4,84.6 338.3,78.7 338.3,76.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9549_s9xaskocwf"><polygon
                                points="329.5,101.5 329.5,101.5 338.3,92.8 338.3,90.5 338.3,90.5 335.5,93.3 335.5,93.3 321.4,107.4    321.4,107.4 316,112.8 318.3,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9550_s9xaskocwf"><polygon
                                points="310.1,92.8 315.5,87.4 318.3,84.6 316,84.6 310.1,90.5 310.1,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9551_s9xaskocwf"><polygon
                                points="321.4,93.3 321.4,93.3 310.1,104.6 310.1,106.9 310.1,106.9 315.5,101.5 329.5,87.4 329.5,87.4    332.4,84.6 330.1,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9552_s9xaskocwf"><polygon
                                points="338.3,104.6 335.5,107.4 335.5,107.4 330.1,112.8 332.4,112.8 338.3,106.9 338.3,104.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9553_s9xaskocwf"><polygon
                                points="329.5,129.7 329.5,129.7 338.3,121 338.3,118.7 338.3,118.7 335.5,121.5 335.5,121.5 321.4,135.6    321.4,135.6 316,141 318.3,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9554_s9xaskocwf"><polygon
                                points="310.1,121 315.5,115.6 318.3,112.8 316,112.8 310.1,118.7 310.1,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9555_s9xaskocwf"><polygon
                                points="321.4,121.5 321.4,121.5 310.1,132.8 310.1,135.1 310.1,135.1 315.5,129.7 329.5,115.6    329.5,115.6 332.4,112.8 330.1,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9556_s9xaskocwf"><polygon
                                points="338.3,132.8 335.5,135.6 335.5,135.6 330.1,141 332.4,141 338.3,135.1 338.3,132.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9557_s9xaskocwf"><polygon
                                points="329.5,157.9 329.5,157.9 338.3,149.1 338.3,146.9 338.3,146.9 335.5,149.7 335.5,149.7    321.4,163.8 321.4,163.8 316,169.1 318.3,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9558_s9xaskocwf"><polygon
                                points="310.1,149.1 315.5,143.8 318.3,141 316,141 310.1,146.9 310.1,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9559_s9xaskocwf"><polygon
                                points="321.4,149.7 321.4,149.7 310.1,160.9 310.1,163.2 310.1,163.2 315.5,157.9 329.5,143.8    329.5,143.8 332.4,141 330.1,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9560_s9xaskocwf"><polygon
                                points="338.3,163.2 338.3,160.9 338.3,160.9 335.5,163.8 335.5,163.8 330.1,169.1 332.4,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9561_s9xaskocwf"><polygon
                                points="329.5,186.1 329.5,186.1 338.3,177.3 338.3,175 338.3,175 335.5,177.9 335.5,177.9 321.4,192    321.4,192 316,197.3 318.3,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9562_s9xaskocwf"><polygon
                                points="310.1,177.3 315.5,172 318.3,169.1 316,169.1 310.1,175 310.1,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9563_s9xaskocwf"><polygon
                                points="310.1,191.4 315.5,186.1 329.5,172 329.5,172 332.4,169.1 330.1,169.1 321.4,177.9 321.4,177.9    310.1,189.1 310.1,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9564_s9xaskocwf"><polygon
                                points="338.3,189.1 335.5,192 335.5,192 330.1,197.3 332.4,197.3 338.3,191.4 338.3,189.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9565_s9xaskocwf"><polygon
                                points="338.3,203.2 335.5,206.1 335.5,206.1 321.4,220.2 321.4,220.2 316,225.5 318.3,225.5 329.5,214.3    329.5,214.3 338.3,205.5 338.3,203.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9566_s9xaskocwf"><polygon
                                points="310.1,205.5 315.5,200.2 318.3,197.3 316,197.3 310.1,203.2 310.1,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9567_s9xaskocwf"><polygon
                                points="321.4,206.1 321.4,206.1 310.1,217.3 310.1,219.6 310.1,219.6 315.5,214.3 329.5,200.2    329.5,200.2 332.4,197.3 330.1,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9568_s9xaskocwf"><polygon
                                points="338.3,219.6 338.3,217.3 338.3,217.3 335.5,220.2 335.5,220.2 330.1,225.5 332.4,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9569_s9xaskocwf"><polygon
                                points="329.5,242.5 329.5,242.5 338.3,233.7 338.3,231.4 338.3,231.4 335.5,234.3 335.5,234.3    321.4,248.4 321.4,248.4 316,253.7 318.3,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9570_s9xaskocwf"><polygon
                                points="310.1,231.4 310.1,233.7 310.1,233.7 315.5,228.4 318.3,225.5 316,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9571_s9xaskocwf"><polygon
                                points="310.1,247.8 315.5,242.5 329.5,228.4 329.5,228.4 332.4,225.5 330.1,225.5 321.4,234.3    321.4,234.3 310.1,245.5 310.1,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9572_s9xaskocwf"><polygon
                                points="338.3,245.5 335.5,248.4 335.5,248.4 330.1,253.7 332.4,253.7 338.3,247.8 338.3,245.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9573_s9xaskocwf"><polygon
                                points="329.5,270.6 329.5,270.6 338.3,261.9 338.3,259.6 338.3,259.6 335.5,262.5 335.5,262.5    321.4,276.5 321.4,276.5 316,281.9 318.3,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9574_s9xaskocwf"><polygon
                                points="310.1,261.9 315.5,256.6 318.3,253.7 316,253.7 310.1,259.6 310.1,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9575_s9xaskocwf"><polygon
                                points="321.4,262.5 321.4,262.5 310.1,273.7 310.1,276 310.1,276 315.5,270.6 329.5,256.6 329.5,256.6    332.4,253.7 330.1,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9576_s9xaskocwf"><polygon
                                points="338.3,273.7 335.5,276.5 335.5,276.5 330.1,281.9 332.4,281.9 338.3,276 338.3,273.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9577_s9xaskocwf"><polygon
                                points="329.5,298.8 329.5,298.8 338.3,290.1 338.3,287.8 338.3,287.8 335.5,290.6 335.5,290.6    321.4,304.7 321.4,304.7 316,310.1 318.3,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9578_s9xaskocwf"><polygon
                                points="310.1,290.1 315.5,284.7 318.3,281.9 316,281.9 310.1,287.8 310.1,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9579_s9xaskocwf"><polygon
                                points="321.4,290.6 321.4,290.6 310.1,301.9 310.1,304.2 310.1,304.2 315.5,298.8 329.5,284.7    329.5,284.7 332.4,281.9 330.1,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9580_s9xaskocwf"><polygon
                                points="338.3,304.2 338.3,301.9 338.3,301.9 335.5,304.7 335.5,304.7 330.1,310.1 332.4,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9581_s9xaskocwf"><polygon
                                points="338.3,316 335.5,318.8 335.5,318.8 321.4,332.9 321.4,332.9 316,338.3 318.3,338.3 329.5,327    329.5,327 338.3,318.3 338.3,316  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9582_s9xaskocwf"><polygon
                                points="310.1,318.3 315.5,312.9 318.3,310.1 316,310.1 310.1,316 310.1,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9583_s9xaskocwf"><polygon
                                points="310.1,332.4 315.5,327 329.5,312.9 329.5,312.9 332.4,310.1 330.1,310.1 321.4,318.8 321.4,318.8    310.1,330.1 310.1,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9584_s9xaskocwf"><polygon
                                points="338.3,332.4 338.3,330.1 338.3,330.1 335.5,332.9 335.5,332.9 330.1,338.3 332.4,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9585_s9xaskocwf"><polygon
                                points="329.5,355.2 329.5,355.2 338.3,346.5 338.3,344.2 338.3,344.2 335.5,347 335.5,347 321.4,361.1    321.4,361.1 316,366.5 318.3,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9586_s9xaskocwf"><polygon
                                points="310.1,344.2 310.1,346.5 310.1,346.5 315.5,341.1 318.3,338.3 316,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9587_s9xaskocwf"><polygon
                                points="310.1,360.6 315.5,355.2 329.5,341.1 329.5,341.1 332.4,338.3 330.1,338.3 321.4,347 321.4,347    310.1,358.3 310.1,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9588_s9xaskocwf"><polygon
                                points="338.3,360.6 338.3,358.3 338.3,358.3 335.5,361.1 335.5,361.1 330.1,366.5 332.4,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9589_s9xaskocwf"><polygon
                                points="329.5,383.4 329.5,383.4 338.3,374.7 338.3,372.4 338.3,372.4 335.5,375.2 335.5,375.2    321.4,389.3 321.4,389.3 316,394.7 318.3,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9590_s9xaskocwf"><polygon
                                points="310.1,374.7 315.5,369.3 318.3,366.5 316,366.5 310.1,372.4 310.1,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9591_s9xaskocwf"><polygon
                                points="310.1,388.8 315.5,383.4 329.5,369.3 329.5,369.3 332.4,366.5 330.1,366.5 321.4,375.2    321.4,375.2 310.1,386.5 310.1,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9592_s9xaskocwf"><polygon
                                points="338.3,388.8 338.3,386.5 338.3,386.5 335.5,389.3 335.5,389.3 330.1,394.7 332.4,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9593_s9xaskocwf"><polygon
                                points="329.5,411.6 329.5,411.6 338.3,402.9 338.3,400.6 338.3,400.6 335.5,403.4 335.5,403.4    321.4,417.5 321.4,417.5 316,422.9 318.3,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9594_s9xaskocwf"><polygon
                                points="310.1,402.9 315.5,397.5 318.3,394.7 316,394.7 310.1,400.6 310.1,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9595_s9xaskocwf"><polygon
                                points="310.1,417 315.5,411.6 329.5,397.5 329.5,397.5 332.4,394.7 330.1,394.7 321.4,403.4 321.4,403.4    310.1,414.7 310.1,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9596_s9xaskocwf"><polygon
                                points="338.3,417 338.3,414.7 338.3,414.7 335.5,417.5 335.5,417.5 330.1,422.9 332.4,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9597_s9xaskocwf"><polygon
                                points="329.5,439.8 329.5,439.8 338.3,431.1 338.3,428.8 338.3,428.8 335.5,431.6 335.5,431.6    321.4,445.7 321.4,445.7 316,451 318.3,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9598_s9xaskocwf"><polygon
                                points="310.1,431.1 315.5,425.7 318.3,422.9 316,422.9 310.1,428.8 310.1,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9599_s9xaskocwf"><polygon
                                points="310.1,445.1 315.5,439.8 329.5,425.7 329.5,425.7 332.4,422.9 330.1,422.9 321.4,431.6    321.4,431.6 310.1,442.9 310.1,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9600_s9xaskocwf"><polygon
                                points="338.3,445.1 338.3,442.9 338.3,442.9 335.5,445.7 335.5,445.7 330.1,451 332.4,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9601_s9xaskocwf"><polygon
                                points="329.5,468 329.5,468 338.3,459.2 338.3,456.9 338.3,456.9 335.5,459.8 335.5,459.8 321.4,473.9    321.4,473.9 316,479.2 318.3,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9602_s9xaskocwf"><polygon
                                points="310.1,459.2 315.5,453.9 318.3,451 316,451 310.1,456.9 310.1,459.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9603_s9xaskocwf"><polygon
                                points="310.1,473.3 315.5,468 329.5,453.9 329.5,453.9 332.4,451 330.1,451 321.4,459.8 321.4,459.8    310.1,471 310.1,473.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9604_s9xaskocwf"><polygon
                                points="338.3,473.3 338.3,471 338.3,471 335.5,473.9 335.5,473.9 330.1,479.2 332.4,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9605_s9xaskocwf"><path
                                d="M310.7,486.8l4.8-4.8l2.8-2.8H316l-5.9,5.9v1.9C310.3,487,310.5,486.9,310.7,486.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9606_s9xaskocwf"><path
                                d="M330.1,479.2l-2.5,2.5c1.2-0.4,2.4-0.8,3.5-1.2l1.3-1.3H330.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9607_s9xaskocwf"><path
                                d="M301.4,16.9L301.4,16.9l8.7-8.7V8c-0.6-0.1-1.1-0.3-1.7-0.4l-1.2,1.2l0,0l-14.1,14.1l0,0l-5.4,5.4h2.3   L301.4,16.9z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9608_s9xaskocwf"><path
                                d="M281.9,8.2l5-5c-0.7-0.1-1.3-0.2-2-0.3l-3.1,3.1V8.2L281.9,8.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9609_s9xaskocwf"><path
                                d="M281.9,22.3l5.4-5.4l11.6-11.6c-0.6-0.1-1.3-0.3-1.9-0.4l-3.8,3.8l0,0L281.9,20V22.3L281.9,22.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9610_s9xaskocwf"><polygon
                                points="310.1,22.3 310.1,20 310.1,20 307.3,22.8 307.3,22.8 301.9,28.2 304.2,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9611_s9xaskocwf"><polygon
                                points="310.1,34.1 307.3,36.9 307.3,36.9 293.2,51 293.2,51 287.8,56.4 290.1,56.4 301.4,45.1 301.4,45.1    310.1,36.4 310.1,34.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9612_s9xaskocwf"><polygon
                                points="281.9,36.4 287.3,31 290.1,28.2 287.8,28.2 281.9,34.1 281.9,36.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9613_s9xaskocwf"><polygon
                                points="281.9,50.5 287.3,45.1 301.4,31 301.4,31 304.2,28.2 301.9,28.2 293.2,36.9 293.2,36.9 281.9,48.2    281.9,50.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9614_s9xaskocwf"><polygon
                                points="310.1,48.2 307.3,51 307.3,51 301.9,56.4 304.2,56.4 310.1,50.5 310.1,48.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9615_s9xaskocwf"><polygon
                                points="310.1,62.3 307.3,65.1 307.3,65.1 293.2,79.2 293.2,79.2 287.8,84.6 290.1,84.6 301.4,73.3    301.4,73.3 310.1,64.6 310.1,62.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9616_s9xaskocwf"><polygon
                                points="281.9,62.3 281.9,64.6 281.9,64.6 287.3,59.2 290.1,56.4 287.8,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9617_s9xaskocwf"><polygon
                                points="293.2,65.1 293.2,65.1 281.9,76.4 281.9,78.7 281.9,78.7 287.3,73.3 301.4,59.2 301.4,59.2    304.2,56.4 301.9,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9618_s9xaskocwf"><polygon
                                points="310.1,78.7 310.1,76.4 310.1,76.4 307.3,79.2 307.3,79.2 301.9,84.6 304.2,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9619_s9xaskocwf"><polygon
                                points="301.4,101.5 301.4,101.5 310.1,92.8 310.1,90.5 310.1,90.5 307.3,93.3 307.3,93.3 293.2,107.4    293.2,107.4 287.8,112.8 290.1,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9620_s9xaskocwf"><polygon
                                points="281.9,90.5 281.9,92.8 281.9,92.8 287.3,87.4 290.1,84.6 287.8,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9621_s9xaskocwf"><polygon
                                points="281.9,106.9 287.3,101.5 301.4,87.4 301.4,87.4 304.2,84.6 301.9,84.6 293.2,93.3 293.2,93.3    281.9,104.6 281.9,106.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9622_s9xaskocwf"><polygon
                                points="310.1,104.6 307.3,107.4 307.3,107.4 301.9,112.8 304.2,112.8 310.1,106.9 310.1,104.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9623_s9xaskocwf"><polygon
                                points="301.4,129.7 301.4,129.7 310.1,121 310.1,118.7 310.1,118.7 307.3,121.5 307.3,121.5 293.2,135.6    293.2,135.6 287.8,141 290.1,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9624_s9xaskocwf"><polygon
                                points="281.9,121 287.3,115.6 290.1,112.8 287.8,112.8 281.9,118.7 281.9,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9625_s9xaskocwf"><polygon
                                points="293.2,121.5 293.2,121.5 281.9,132.8 281.9,135.1 281.9,135.1 287.3,129.7 301.4,115.6    301.4,115.6 304.2,112.8 301.9,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9626_s9xaskocwf"><polygon
                                points="310.1,132.8 307.3,135.6 307.3,135.6 301.9,141 304.2,141 310.1,135.1 310.1,132.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9627_s9xaskocwf"><polygon
                                points="301.4,157.9 301.4,157.9 310.1,149.1 310.1,146.9 310.1,146.9 307.3,149.7 307.3,149.7    293.2,163.8 293.2,163.8 287.8,169.1 290.1,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9628_s9xaskocwf"><polygon
                                points="281.9,149.1 287.3,143.8 290.1,141 287.8,141 281.9,146.9 281.9,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9629_s9xaskocwf"><polygon
                                points="293.2,149.7 293.2,149.7 281.9,160.9 281.9,163.2 281.9,163.2 287.3,157.9 301.4,143.8    301.4,143.8 304.2,141 301.9,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9630_s9xaskocwf"><polygon
                                points="310.1,160.9 307.3,163.8 307.3,163.8 301.9,169.1 304.2,169.1 310.1,163.2 310.1,160.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9631_s9xaskocwf"><polygon
                                points="301.4,186.1 301.4,186.1 310.1,177.3 310.1,175 310.1,175 307.3,177.9 307.3,177.9 293.2,192    293.2,192 287.8,197.3 290.1,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9632_s9xaskocwf"><polygon
                                points="281.9,177.3 287.3,172 290.1,169.1 287.8,169.1 281.9,175 281.9,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9633_s9xaskocwf"><polygon
                                points="293.2,177.9 293.2,177.9 281.9,189.1 281.9,191.4 281.9,191.4 287.3,186.1 301.4,172 301.4,172    304.2,169.1 301.9,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9634_s9xaskocwf"><polygon
                                points="310.1,191.4 310.1,189.1 310.1,189.1 307.3,192 307.3,192 301.9,197.3 304.2,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9635_s9xaskocwf"><polygon
                                points="301.4,214.3 301.4,214.3 310.1,205.5 310.1,203.2 310.1,203.2 307.3,206.1 307.3,206.1    293.2,220.2 293.2,220.2 287.8,225.5 290.1,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9636_s9xaskocwf"><polygon
                                points="281.9,205.5 287.3,200.2 290.1,197.3 287.8,197.3 281.9,203.2 281.9,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9637_s9xaskocwf"><polygon
                                points="281.9,219.6 287.3,214.3 301.4,200.2 301.4,200.2 304.2,197.3 301.9,197.3 293.2,206.1    293.2,206.1 281.9,217.3 281.9,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9638_s9xaskocwf"><polygon
                                points="310.1,217.3 307.3,220.2 307.3,220.2 301.9,225.5 304.2,225.5 310.1,219.6 310.1,217.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9639_s9xaskocwf"><polygon
                                points="310.1,231.4 307.3,234.3 307.3,234.3 293.2,248.4 293.2,248.4 287.8,253.7 290.1,253.7    301.4,242.5 301.4,242.5 310.1,233.7 310.1,231.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9640_s9xaskocwf"><polygon
                                points="281.9,233.7 287.3,228.4 290.1,225.5 287.8,225.5 281.9,231.4 281.9,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9641_s9xaskocwf"><polygon
                                points="293.2,234.3 293.2,234.3 281.9,245.5 281.9,247.8 281.9,247.8 287.3,242.5 301.4,228.4    301.4,228.4 304.2,225.5 301.9,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9642_s9xaskocwf"><polygon
                                points="310.1,247.8 310.1,245.5 310.1,245.5 307.3,248.4 307.3,248.4 301.9,253.7 304.2,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9643_s9xaskocwf"><polygon
                                points="301.4,270.6 301.4,270.6 310.1,261.9 310.1,259.6 310.1,259.6 307.3,262.5 307.3,262.5    293.2,276.5 293.2,276.5 287.8,281.9 290.1,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9644_s9xaskocwf"><polygon
                                points="281.9,259.6 281.9,261.9 281.9,261.9 287.3,256.6 290.1,253.7 287.8,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9645_s9xaskocwf"><polygon
                                points="281.9,276 287.3,270.6 301.4,256.6 301.4,256.6 304.2,253.7 301.9,253.7 293.2,262.5 293.2,262.5    281.9,273.7 281.9,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9646_s9xaskocwf"><polygon
                                points="310.1,273.7 307.3,276.5 307.3,276.5 301.9,281.9 304.2,281.9 310.1,276 310.1,273.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9647_s9xaskocwf"><polygon
                                points="301.4,298.8 301.4,298.8 310.1,290.1 310.1,287.8 310.1,287.8 307.3,290.6 307.3,290.6    293.2,304.7 293.2,304.7 287.8,310.1 290.1,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9648_s9xaskocwf"><polygon
                                points="281.9,290.1 287.3,284.7 290.1,281.9 287.8,281.9 281.9,287.8 281.9,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9649_s9xaskocwf"><polygon
                                points="293.2,290.6 293.2,290.6 281.9,301.9 281.9,304.2 281.9,304.2 287.3,298.8 301.4,284.7    301.4,284.7 304.2,281.9 301.9,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9650_s9xaskocwf"><polygon
                                points="310.1,301.9 307.3,304.7 307.3,304.7 301.9,310.1 304.2,310.1 310.1,304.2 310.1,301.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9651_s9xaskocwf"><polygon
                                points="301.4,327 301.4,327 310.1,318.3 310.1,316 310.1,316 307.3,318.8 307.3,318.8 293.2,332.9    293.2,332.9 287.8,338.3 290.1,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9652_s9xaskocwf"><polygon
                                points="281.9,318.3 287.3,312.9 290.1,310.1 287.8,310.1 281.9,316 281.9,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9653_s9xaskocwf"><polygon
                                points="293.2,318.8 293.2,318.8 281.9,330.1 281.9,332.4 281.9,332.4 287.3,327 301.4,312.9 301.4,312.9    304.2,310.1 301.9,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9654_s9xaskocwf"><polygon
                                points="310.1,332.4 310.1,330.1 310.1,330.1 307.3,332.9 307.3,332.9 301.9,338.3 304.2,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9655_s9xaskocwf"><polygon
                                points="310.1,344.2 307.3,347 307.3,347 293.2,361.1 293.2,361.1 287.8,366.5 290.1,366.5 301.4,355.2    301.4,355.2 310.1,346.5 310.1,344.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9656_s9xaskocwf"><polygon
                                points="281.9,346.5 287.3,341.1 290.1,338.3 287.8,338.3 281.9,344.2 281.9,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9657_s9xaskocwf"><polygon
                                points="281.9,360.6 287.3,355.2 301.4,341.1 301.4,341.1 304.2,338.3 301.9,338.3 293.2,347 293.2,347    281.9,358.3 281.9,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9658_s9xaskocwf"><polygon
                                points="310.1,360.6 310.1,358.3 310.1,358.3 307.3,361.1 307.3,361.1 301.9,366.5 304.2,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9659_s9xaskocwf"><polygon
                                points="301.4,383.4 301.4,383.4 310.1,374.7 310.1,372.4 310.1,372.4 307.3,375.2 307.3,375.2    293.2,389.3 293.2,389.3 287.8,394.7 290.1,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9660_s9xaskocwf"><polygon
                                points="281.9,372.4 281.9,374.7 281.9,374.7 287.3,369.3 290.1,366.5 287.8,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9661_s9xaskocwf"><polygon
                                points="281.9,388.8 287.3,383.4 301.4,369.3 301.4,369.3 304.2,366.5 301.9,366.5 293.2,375.2    293.2,375.2 281.9,386.5 281.9,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9662_s9xaskocwf"><polygon
                                points="310.1,388.8 310.1,386.5 310.1,386.5 307.3,389.3 307.3,389.3 301.9,394.7 304.2,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9663_s9xaskocwf"><polygon
                                points="301.4,411.6 301.4,411.6 310.1,402.9 310.1,400.6 310.1,400.6 307.3,403.4 307.3,403.4    293.2,417.5 293.2,417.5 287.8,422.9 290.1,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9664_s9xaskocwf"><polygon
                                points="281.9,402.9 287.3,397.5 290.1,394.7 287.8,394.7 281.9,400.6 281.9,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9665_s9xaskocwf"><polygon
                                points="281.9,417 287.3,411.6 301.4,397.5 301.4,397.5 304.2,394.7 301.9,394.7 293.2,403.4 293.2,403.4    281.9,414.7 281.9,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9666_s9xaskocwf"><polygon
                                points="310.1,417 310.1,414.7 310.1,414.7 307.3,417.5 307.3,417.5 301.9,422.9 304.2,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9667_s9xaskocwf"><polygon
                                points="301.4,439.8 301.4,439.8 310.1,431.1 310.1,428.8 310.1,428.8 307.3,431.6 307.3,431.6    293.2,445.7 293.2,445.7 287.8,451 290.1,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9668_s9xaskocwf"><polygon
                                points="281.9,431.1 287.3,425.7 290.1,422.9 287.8,422.9 281.9,428.8 281.9,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9669_s9xaskocwf"><polygon
                                points="281.9,445.1 287.3,439.8 301.4,425.7 301.4,425.7 304.2,422.9 301.9,422.9 293.2,431.6    293.2,431.6 281.9,442.9 281.9,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9670_s9xaskocwf"><polygon
                                points="310.1,445.1 310.1,442.9 310.1,442.9 307.3,445.7 307.3,445.7 301.9,451 304.2,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9671_s9xaskocwf"><polygon
                                points="301.4,468 301.4,468 310.1,459.2 310.1,456.9 310.1,456.9 307.3,459.8 307.3,459.8 293.2,473.9    293.2,473.9 287.8,479.2 290.1,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9672_s9xaskocwf"><polygon
                                points="281.9,459.2 287.3,453.9 290.1,451 287.8,451 281.9,456.9 281.9,459.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9673_s9xaskocwf"><polygon
                                points="281.9,473.3 287.3,468 301.4,453.9 301.4,453.9 304.2,451 301.9,451 293.2,459.8 293.2,459.8    281.9,471 281.9,473.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9674_s9xaskocwf"><polygon
                                points="310.1,473.3 310.1,471 310.1,471 307.3,473.9 307.3,473.9 301.9,479.2 304.2,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9675_s9xaskocwf"><path
                                d="M310.1,485.1L310.1,485.1l-2.5,2.5c0.8-0.2,1.7-0.4,2.5-0.6V485.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9676_s9xaskocwf"><polygon
                                points="281.9,487.4 287.3,482.1 290.1,479.2 287.8,479.2 281.9,485.1 281.9,487.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9677_s9xaskocwf"><path
                                d="M301.4,482.1L301.4,482.1l2.8-2.8h-2.3l-8.7,8.7l0,0l-3.4,3.4c0.9-0.2,1.9-0.3,2.8-0.5L301.4,482.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9678_s9xaskocwf"><polygon
                                points="273.2,16.9 273.2,16.9 281.9,8.2 281.9,5.9 281.9,5.9 279.1,8.7 279.1,8.7 265,22.8 265,22.8    259.6,28.2 261.9,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9679_s9xaskocwf"><path
                                d="M253.7,8.2l5.4-5.4l2.4-2.4c-0.7,0-1.5-0.1-2.2-0.1l-5.6,5.6V8.2L253.7,8.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9680_s9xaskocwf"><path
                                d="M253.7,22.3l5.4-5.4l14.1-14.1h0l1.4-1.4c-0.7-0.1-1.4-0.2-2.1-0.2L265,8.7l0,0L253.7,20V22.3L253.7,22.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9681_s9xaskocwf"><polygon
                                points="281.9,22.3 281.9,20 281.9,20 279.1,22.8 279.1,22.8 273.7,28.2 276,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9682_s9xaskocwf"><polygon
                                points="273.2,45.1 273.2,45.1 281.9,36.4 281.9,34.1 281.9,34.1 279.1,36.9 279.1,36.9 265,51 265,51    259.6,56.4 261.9,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9683_s9xaskocwf"><polygon
                                points="253.7,36.4 259.1,31 261.9,28.2 259.6,28.2 253.7,34.1 253.7,36.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9684_s9xaskocwf"><polygon
                                points="253.7,50.5 259.1,45.1 273.2,31 273.2,31 276,28.2 273.7,28.2 265,36.9 265,36.9 253.7,48.2    253.7,50.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9685_s9xaskocwf"><polygon
                                points="281.9,50.5 281.9,48.2 281.9,48.2 279.1,51 279.1,51 273.7,56.4 276,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9686_s9xaskocwf"><polygon
                                points="281.9,62.3 279.1,65.1 279.1,65.1 265,79.2 265,79.2 259.6,84.6 261.9,84.6 273.2,73.3 273.2,73.3    281.9,64.6 281.9,62.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9687_s9xaskocwf"><polygon
                                points="253.7,64.6 259.1,59.2 261.9,56.4 259.6,56.4 253.7,62.3 253.7,64.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9688_s9xaskocwf"><polygon
                                points="253.7,78.7 259.1,73.3 273.2,59.2 273.2,59.2 276,56.4 273.7,56.4 265,65.1 265,65.1 253.7,76.4    253.7,78.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9689_s9xaskocwf"><polygon
                                points="281.9,76.4 279.1,79.2 279.1,79.2 273.7,84.6 276,84.6 281.9,78.7 281.9,76.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9690_s9xaskocwf"><polygon
                                points="281.9,90.5 279.1,93.3 279.1,93.3 265,107.4 265,107.4 259.6,112.8 261.9,112.8 273.2,101.5    273.2,101.5 281.9,92.8 281.9,90.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9691_s9xaskocwf"><polygon
                                points="253.7,90.5 253.7,92.8 253.7,92.8 259.1,87.4 261.9,84.6 259.6,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9692_s9xaskocwf"><polygon
                                points="265,93.3 265,93.3 253.7,104.6 253.7,106.9 253.7,106.9 259.1,101.5 273.2,87.4 273.2,87.4    276,84.6 273.7,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9693_s9xaskocwf"><polygon
                                points="281.9,106.9 281.9,104.6 281.9,104.6 279.1,107.4 279.1,107.4 273.7,112.8 276,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9694_s9xaskocwf"><polygon
                                points="273.2,129.7 273.2,129.7 281.9,121 281.9,118.7 281.9,118.7 279.1,121.5 279.1,121.5 265,135.6    265,135.6 259.6,141 261.9,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9695_s9xaskocwf"><polygon
                                points="253.7,118.7 253.7,121 253.7,121 259.1,115.6 261.9,112.8 259.6,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9696_s9xaskocwf"><polygon
                                points="253.7,135.1 259.1,129.7 273.2,115.6 273.2,115.6 276,112.8 273.7,112.8 265,121.5 265,121.5    253.7,132.8 253.7,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9697_s9xaskocwf"><polygon
                                points="281.9,132.8 279.1,135.6 279.1,135.6 273.7,141 276,141 281.9,135.1 281.9,132.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9698_s9xaskocwf"><polygon
                                points="273.2,157.9 273.2,157.9 281.9,149.1 281.9,146.9 281.9,146.9 279.1,149.7 279.1,149.7 265,163.8    265,163.8 259.6,169.1 261.9,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9699_s9xaskocwf"><polygon
                                points="253.7,149.1 259.1,143.8 261.9,141 259.6,141 253.7,146.9 253.7,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9700_s9xaskocwf"><polygon
                                points="265,149.7 265,149.7 253.7,160.9 253.7,163.2 253.7,163.2 259.1,157.9 273.2,143.8 273.2,143.8    276,141 273.7,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9701_s9xaskocwf"><polygon
                                points="281.9,160.9 279.1,163.8 279.1,163.8 273.7,169.1 276,169.1 281.9,163.2 281.9,160.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9702_s9xaskocwf"><polygon
                                points="273.2,186.1 273.2,186.1 281.9,177.3 281.9,175 281.9,175 279.1,177.9 279.1,177.9 265,192    265,192 259.6,197.3 261.9,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9703_s9xaskocwf"><polygon
                                points="253.7,177.3 259.1,172 261.9,169.1 259.6,169.1 253.7,175 253.7,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9704_s9xaskocwf"><polygon
                                points="265,177.9 265,177.9 253.7,189.1 253.7,191.4 253.7,191.4 259.1,186.1 273.2,172 273.2,172    276,169.1 273.7,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9705_s9xaskocwf"><polygon
                                points="281.9,189.1 279.1,192 279.1,192 273.7,197.3 276,197.3 281.9,191.4 281.9,189.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9706_s9xaskocwf"><polygon
                                points="273.2,214.3 273.2,214.3 281.9,205.5 281.9,203.2 281.9,203.2 279.1,206.1 279.1,206.1 265,220.2    265,220.2 259.6,225.5 261.9,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9707_s9xaskocwf"><polygon
                                points="253.7,205.5 259.1,200.2 261.9,197.3 259.6,197.3 253.7,203.2 253.7,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9708_s9xaskocwf"><polygon
                                points="265,206.1 265,206.1 253.7,217.3 253.7,219.6 253.7,219.6 259.1,214.3 273.2,200.2 273.2,200.2    276,197.3 273.7,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9709_s9xaskocwf"><polygon
                                points="281.9,219.6 281.9,217.3 281.9,217.3 279.1,220.2 279.1,220.2 273.7,225.5 276,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9710_s9xaskocwf"><polygon
                                points="273.2,242.5 273.2,242.5 281.9,233.7 281.9,231.4 281.9,231.4 279.1,234.3 279.1,234.3 265,248.4    265,248.4 259.6,253.7 261.9,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9711_s9xaskocwf"><polygon
                                points="253.7,233.7 259.1,228.4 261.9,225.5 259.6,225.5 253.7,231.4 253.7,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9712_s9xaskocwf"><polygon
                                points="253.7,247.8 259.1,242.5 273.2,228.4 273.2,228.4 276,225.5 273.7,225.5 265,234.3 265,234.3    253.7,245.5 253.7,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9713_s9xaskocwf"><polygon
                                points="281.9,245.5 279.1,248.4 279.1,248.4 273.7,253.7 276,253.7 281.9,247.8 281.9,245.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9714_s9xaskocwf"><polygon
                                points="281.9,259.6 279.1,262.5 279.1,262.5 265,276.5 265,276.5 259.6,281.9 261.9,281.9 273.2,270.6    273.2,270.6 281.9,261.9 281.9,259.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9715_s9xaskocwf"><polygon
                                points="253.7,261.9 259.1,256.6 261.9,253.7 259.6,253.7 253.7,259.6 253.7,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9716_s9xaskocwf"><polygon
                                points="265,262.5 265,262.5 253.7,273.7 253.7,276 253.7,276 259.1,270.6 273.2,256.6 273.2,256.6    276,253.7 273.7,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9717_s9xaskocwf"><polygon
                                points="281.9,276 281.9,273.7 281.9,273.7 279.1,276.5 279.1,276.5 273.7,281.9 276,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9718_s9xaskocwf"><polygon
                                points="273.2,298.8 273.2,298.8 281.9,290.1 281.9,287.8 281.9,287.8 279.1,290.6 279.1,290.6 265,304.7    265,304.7 259.6,310.1 261.9,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9719_s9xaskocwf"><polygon
                                points="253.7,287.8 253.7,290.1 253.7,290.1 259.1,284.7 261.9,281.9 259.6,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9720_s9xaskocwf"><polygon
                                points="253.7,304.2 259.1,298.8 273.2,284.7 273.2,284.7 276,281.9 273.7,281.9 265,290.6 265,290.6    253.7,301.9 253.7,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9721_s9xaskocwf"><polygon
                                points="281.9,301.9 279.1,304.7 279.1,304.7 273.7,310.1 276,310.1 281.9,304.2 281.9,301.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9722_s9xaskocwf"><polygon
                                points="273.2,327 273.2,327 281.9,318.3 281.9,316 281.9,316 279.1,318.8 279.1,318.8 265,332.9    265,332.9 259.6,338.3 261.9,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9723_s9xaskocwf"><polygon
                                points="253.7,318.3 259.1,312.9 261.9,310.1 259.6,310.1 253.7,316 253.7,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9724_s9xaskocwf"><polygon
                                points="265,318.8 265,318.8 253.7,330.1 253.7,332.4 253.7,332.4 259.1,327 273.2,312.9 273.2,312.9    276,310.1 273.7,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9725_s9xaskocwf"><polygon
                                points="281.9,330.1 279.1,332.9 279.1,332.9 273.7,338.3 276,338.3 281.9,332.4 281.9,330.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9726_s9xaskocwf"><polygon
                                points="273.2,355.2 273.2,355.2 281.9,346.5 281.9,344.2 281.9,344.2 279.1,347 279.1,347 265,361.1    265,361.1 259.6,366.5 261.9,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9727_s9xaskocwf"><polygon
                                points="253.7,346.5 259.1,341.1 261.9,338.3 259.6,338.3 253.7,344.2 253.7,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9728_s9xaskocwf"><polygon
                                points="265,347 265,347 253.7,358.3 253.7,360.6 253.7,360.6 259.1,355.2 273.2,341.1 273.2,341.1    276,338.3 273.7,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9729_s9xaskocwf"><polygon
                                points="281.9,360.6 281.9,358.3 281.9,358.3 279.1,361.1 279.1,361.1 273.7,366.5 276,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9730_s9xaskocwf"><polygon
                                points="281.9,372.4 279.1,375.2 279.1,375.2 265,389.3 265,389.3 259.6,394.7 261.9,394.7 273.2,383.4    273.2,383.4 281.9,374.7 281.9,372.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9731_s9xaskocwf"><polygon
                                points="253.7,374.7 259.1,369.3 261.9,366.5 259.6,366.5 253.7,372.4 253.7,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9732_s9xaskocwf"><polygon
                                points="253.7,388.8 259.1,383.4 273.2,369.3 273.2,369.3 276,366.5 273.7,366.5 265,375.2 265,375.2    253.7,386.5 253.7,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9733_s9xaskocwf"><polygon
                                points="281.9,388.8 281.9,386.5 281.9,386.5 279.1,389.3 279.1,389.3 273.7,394.7 276,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9734_s9xaskocwf"><polygon
                                points="273.2,411.6 273.2,411.6 281.9,402.9 281.9,400.6 281.9,400.6 279.1,403.4 279.1,403.4 265,417.5    265,417.5 259.6,422.9 261.9,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9735_s9xaskocwf"><polygon
                                points="253.7,400.6 253.7,402.9 253.7,402.9 259.1,397.5 261.9,394.7 259.6,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9736_s9xaskocwf"><polygon
                                points="253.7,417 259.1,411.6 273.2,397.5 273.2,397.5 276,394.7 273.7,394.7 265,403.4 265,403.4    253.7,414.7 253.7,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9737_s9xaskocwf"><polygon
                                points="281.9,417 281.9,414.7 281.9,414.7 279.1,417.5 279.1,417.5 273.7,422.9 276,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9738_s9xaskocwf"><polygon
                                points="273.2,439.8 273.2,439.8 281.9,431.1 281.9,428.8 281.9,428.8 279.1,431.6 279.1,431.6 265,445.7    265,445.7 259.6,451 261.9,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9739_s9xaskocwf"><polygon
                                points="253.7,431.1 259.1,425.7 261.9,422.9 259.6,422.9 253.7,428.8 253.7,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9740_s9xaskocwf"><polygon
                                points="253.7,445.1 259.1,439.8 273.2,425.7 273.2,425.7 276,422.9 273.7,422.9 265,431.6 265,431.6    253.7,442.9 253.7,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9741_s9xaskocwf"><polygon
                                points="281.9,445.1 281.9,442.9 281.9,442.9 279.1,445.7 279.1,445.7 273.7,451 276,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9742_s9xaskocwf"><polygon
                                points="273.2,468 273.2,468 281.9,459.2 281.9,456.9 281.9,456.9 279.1,459.8 279.1,459.8 265,473.9    265,473.9 259.6,479.2 261.9,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9743_s9xaskocwf"><polygon
                                points="253.7,459.2 259.1,453.9 261.9,451 259.6,451 253.7,456.9 253.7,459.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9744_s9xaskocwf"><polygon
                                points="253.7,473.3 259.1,468 273.2,453.9 273.2,453.9 276,451 273.7,451 265,459.8 265,459.8 253.7,471    253.7,473.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9745_s9xaskocwf"><polygon
                                points="281.9,473.3 281.9,471 281.9,471 279.1,473.9 279.1,473.9 273.7,479.2 276,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9746_s9xaskocwf"><path
                                d="M281.9,487.4v-2.3v0l-2.8,2.8l0,0l-5.7,5.7c0.9-0.1,1.7-0.2,2.6-0.3L281.9,487.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9747_s9xaskocwf"><polygon
                                points="253.7,487.4 259.1,482.1 261.9,479.2 259.6,479.2 253.7,485.1 253.7,487.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9748_s9xaskocwf"><path
                                d="M273.2,482.1L273.2,482.1l2.8-2.8h-2.3L265,488l0,0l-6.8,6.8c0.8,0,1.6-0.1,2.4-0.1L273.2,482.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9749_s9xaskocwf"><polygon
                                points="245,16.9 245,16.9 253.7,8.2 253.7,5.9 253.7,5.9 250.9,8.7 250.9,8.7 236.8,22.8 236.8,22.8    231.4,28.2 233.7,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9750_s9xaskocwf"><path
                                d="M230.9,2.8l2.4-2.4c-0.8,0-1.6,0.1-2.4,0.2l-5.3,5.3v2.3v0L230.9,2.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9751_s9xaskocwf"><path
                                d="M225.5,22.3l5.4-5.4L245,2.8h0l2.8-2.8c-0.1,0-0.2,0-0.3,0c-0.7,0-1.3,0-2,0l-8.7,8.7l0,0L225.5,20V22.3   L225.5,22.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9752_s9xaskocwf"><polygon
                                points="253.7,22.3 253.7,20 253.7,20 250.9,22.8 250.9,22.8 245.5,28.2 247.8,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9753_s9xaskocwf"><polygon
                                points="245,45.1 245,45.1 253.7,36.4 253.7,34.1 253.7,34.1 250.9,36.9 250.9,36.9 236.8,51 236.8,51    231.4,56.4 233.7,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9754_s9xaskocwf"><polygon
                                points="225.5,36.4 230.9,31 233.7,28.2 231.4,28.2 225.5,34.1 225.5,36.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9755_s9xaskocwf"><polygon
                                points="225.5,50.5 230.9,45.1 245,31 245,31 247.8,28.2 245.5,28.2 236.8,36.9 236.8,36.9 225.5,48.2    225.5,50.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9756_s9xaskocwf"><polygon
                                points="253.7,50.5 253.7,48.2 253.7,48.2 250.9,51 250.9,51 245.5,56.4 247.8,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9757_s9xaskocwf"><polygon
                                points="245,73.3 245,73.3 253.7,64.6 253.7,62.3 253.7,62.3 250.9,65.1 250.9,65.1 236.8,79.2 236.8,79.2    231.4,84.6 233.7,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9758_s9xaskocwf"><polygon
                                points="225.5,64.6 230.9,59.2 233.7,56.4 231.4,56.4 225.5,62.3 225.5,64.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9759_s9xaskocwf"><polygon
                                points="225.5,78.7 230.9,73.3 245,59.2 245,59.2 247.8,56.4 245.5,56.4 236.8,65.1 236.8,65.1 225.5,76.4    225.5,78.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9760_s9xaskocwf"><polygon
                                points="253.7,78.7 253.7,76.4 253.7,76.4 250.9,79.2 250.9,79.2 245.5,84.6 247.8,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9761_s9xaskocwf"><polygon
                                points="253.7,90.5 250.9,93.3 250.9,93.3 236.8,107.4 236.8,107.4 231.4,112.8 233.7,112.8 245,101.5    245,101.5 253.7,92.8 253.7,90.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9762_s9xaskocwf"><polygon
                                points="225.5,92.8 230.9,87.4 233.7,84.6 231.4,84.6 225.5,90.5 225.5,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9763_s9xaskocwf"><polygon
                                points="225.5,106.9 230.9,101.5 245,87.4 245,87.4 247.8,84.6 245.5,84.6 236.8,93.3 236.8,93.3    225.5,104.6 225.5,106.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9764_s9xaskocwf"><polygon
                                points="253.7,104.6 250.9,107.4 250.9,107.4 245.5,112.8 247.8,112.8 253.7,106.9 253.7,104.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9765_s9xaskocwf"><polygon
                                points="253.7,118.7 250.9,121.5 250.9,121.5 236.8,135.6 236.8,135.6 231.4,141 233.7,141 245,129.7    245,129.7 253.7,121 253.7,118.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9766_s9xaskocwf"><polygon
                                points="225.5,118.7 225.5,121 225.5,121 230.9,115.6 233.7,112.8 231.4,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9767_s9xaskocwf"><polygon
                                points="236.8,121.5 236.8,121.5 225.5,132.8 225.5,135.1 225.5,135.1 230.9,129.7 245,115.6 245,115.6    247.8,112.8 245.5,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9768_s9xaskocwf"><polygon
                                points="253.7,135.1 253.7,132.8 253.7,132.8 250.9,135.6 250.9,135.6 245.5,141 247.8,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9769_s9xaskocwf"><polygon
                                points="245,157.9 245,157.9 253.7,149.1 253.7,146.9 253.7,146.9 250.9,149.7 250.9,149.7 236.8,163.8    236.8,163.8 231.4,169.1 233.7,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9770_s9xaskocwf"><polygon
                                points="225.5,146.9 225.5,149.1 225.5,149.1 230.9,143.8 233.7,141 231.4,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9771_s9xaskocwf"><polygon
                                points="225.5,163.2 230.9,157.9 245,143.8 245,143.8 247.8,141 245.5,141 236.8,149.7 236.8,149.7    225.5,160.9 225.5,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9772_s9xaskocwf"><polygon
                                points="253.7,160.9 250.9,163.8 250.9,163.8 245.5,169.1 247.8,169.1 253.7,163.2 253.7,160.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9773_s9xaskocwf"><polygon
                                points="245,186.1 245,186.1 253.7,177.3 253.7,175 253.7,175 250.9,177.9 250.9,177.9 236.8,192    236.8,192 231.4,197.3 233.7,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9774_s9xaskocwf"><polygon
                                points="225.5,177.3 230.9,172 233.7,169.1 231.4,169.1 225.5,175 225.5,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9775_s9xaskocwf"><polygon
                                points="236.8,177.9 236.8,177.9 225.5,189.1 225.5,191.4 225.5,191.4 230.9,186.1 245,172 245,172    247.8,169.1 245.5,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9776_s9xaskocwf"><polygon
                                points="253.7,189.1 250.9,192 250.9,192 245.5,197.3 247.8,197.3 253.7,191.4 253.7,189.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9777_s9xaskocwf"><polygon
                                points="245,214.3 245,214.3 253.7,205.5 253.7,203.2 253.7,203.2 250.9,206.1 250.9,206.1 236.8,220.2    236.8,220.2 231.4,225.5 233.7,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9778_s9xaskocwf"><polygon
                                points="225.5,205.5 230.9,200.2 233.7,197.3 231.4,197.3 225.5,203.2 225.5,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9779_s9xaskocwf"><polygon
                                points="236.8,206.1 236.8,206.1 225.5,217.3 225.5,219.6 225.5,219.6 230.9,214.3 245,200.2 245,200.2    247.8,197.3 245.5,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9780_s9xaskocwf"><polygon
                                points="253.7,217.3 250.9,220.2 250.9,220.2 245.5,225.5 247.8,225.5 253.7,219.6 253.7,217.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9781_s9xaskocwf"><polygon
                                points="245,242.5 245,242.5 253.7,233.7 253.7,231.4 253.7,231.4 250.9,234.3 250.9,234.3 236.8,248.4    236.8,248.4 231.4,253.7 233.7,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9782_s9xaskocwf"><polygon
                                points="225.5,233.7 230.9,228.4 233.7,225.5 231.4,225.5 225.5,231.4 225.5,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9783_s9xaskocwf"><polygon
                                points="236.8,234.3 236.8,234.3 225.5,245.5 225.5,247.8 225.5,247.8 230.9,242.5 245,228.4 245,228.4    247.8,225.5 245.5,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9784_s9xaskocwf"><polygon
                                points="253.7,247.8 253.7,245.5 253.7,245.5 250.9,248.4 250.9,248.4 245.5,253.7 247.8,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9785_s9xaskocwf"><polygon
                                points="245,270.6 245,270.6 253.7,261.9 253.7,259.6 253.7,259.6 250.9,262.5 250.9,262.5 236.8,276.5    236.8,276.5 231.4,281.9 233.7,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9786_s9xaskocwf"><polygon
                                points="225.5,261.9 230.9,256.6 233.7,253.7 231.4,253.7 225.5,259.6 225.5,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9787_s9xaskocwf"><polygon
                                points="225.5,276 230.9,270.6 245,256.6 245,256.6 247.8,253.7 245.5,253.7 236.8,262.5 236.8,262.5    225.5,273.7 225.5,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9788_s9xaskocwf"><polygon
                                points="253.7,273.7 250.9,276.5 250.9,276.5 245.5,281.9 247.8,281.9 253.7,276 253.7,273.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9789_s9xaskocwf"><polygon
                                points="253.7,287.8 250.9,290.6 250.9,290.6 236.8,304.7 236.8,304.7 231.4,310.1 233.7,310.1 245,298.8    245,298.8 253.7,290.1 253.7,287.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9790_s9xaskocwf"><polygon
                                points="225.5,290.1 230.9,284.7 233.7,281.9 231.4,281.9 225.5,287.8 225.5,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9791_s9xaskocwf"><polygon
                                points="236.8,290.6 236.8,290.6 225.5,301.9 225.5,304.2 225.5,304.2 230.9,298.8 245,284.7 245,284.7    247.8,281.9 245.5,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9792_s9xaskocwf"><polygon
                                points="253.7,304.2 253.7,301.9 253.7,301.9 250.9,304.7 250.9,304.7 245.5,310.1 247.8,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9793_s9xaskocwf"><polygon
                                points="245,327 245,327 253.7,318.3 253.7,316 253.7,316 250.9,318.8 250.9,318.8 236.8,332.9    236.8,332.9 231.4,338.3 233.7,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9794_s9xaskocwf"><polygon
                                points="225.5,316 225.5,318.3 225.5,318.3 230.9,312.9 233.7,310.1 231.4,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9795_s9xaskocwf"><polygon
                                points="225.5,332.4 230.9,327 245,312.9 245,312.9 247.8,310.1 245.5,310.1 236.8,318.8 236.8,318.8    225.5,330.1 225.5,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9796_s9xaskocwf"><polygon
                                points="253.7,330.1 250.9,332.9 250.9,332.9 245.5,338.3 247.8,338.3 253.7,332.4 253.7,330.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9797_s9xaskocwf"><polygon
                                points="245,355.2 245,355.2 253.7,346.5 253.7,344.2 253.7,344.2 250.9,347 250.9,347 236.8,361.1    236.8,361.1 231.4,366.5 233.7,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9798_s9xaskocwf"><polygon
                                points="225.5,346.5 230.9,341.1 233.7,338.3 231.4,338.3 225.5,344.2 225.5,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9799_s9xaskocwf"><polygon
                                points="236.8,347 236.8,347 225.5,358.3 225.5,360.6 225.5,360.6 230.9,355.2 245,341.1 245,341.1    247.8,338.3 245.5,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9800_s9xaskocwf"><polygon
                                points="253.7,358.3 250.9,361.1 250.9,361.1 245.5,366.5 247.8,366.5 253.7,360.6 253.7,358.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9801_s9xaskocwf"><polygon
                                points="245,383.4 245,383.4 253.7,374.7 253.7,372.4 253.7,372.4 250.9,375.2 250.9,375.2 236.8,389.3    236.8,389.3 231.4,394.7 233.7,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9802_s9xaskocwf"><polygon
                                points="225.5,374.7 230.9,369.3 233.7,366.5 231.4,366.5 225.5,372.4 225.5,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9803_s9xaskocwf"><polygon
                                points="236.8,375.2 236.8,375.2 225.5,386.5 225.5,388.8 225.5,388.8 230.9,383.4 245,369.3 245,369.3    247.8,366.5 245.5,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9804_s9xaskocwf"><polygon
                                points="253.7,388.8 253.7,386.5 253.7,386.5 250.9,389.3 250.9,389.3 245.5,394.7 247.8,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9805_s9xaskocwf"><polygon
                                points="253.7,400.6 250.9,403.4 250.9,403.4 236.8,417.5 236.8,417.5 231.4,422.9 233.7,422.9 245,411.6    245,411.6 253.7,402.9 253.7,400.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9806_s9xaskocwf"><polygon
                                points="225.5,402.9 230.9,397.5 233.7,394.7 231.4,394.7 225.5,400.6 225.5,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9807_s9xaskocwf"><polygon
                                points="225.5,417 230.9,411.6 245,397.5 245,397.5 247.8,394.7 245.5,394.7 236.8,403.4 236.8,403.4    225.5,414.7 225.5,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9808_s9xaskocwf"><polygon
                                points="253.7,417 253.7,414.7 253.7,414.7 250.9,417.5 250.9,417.5 245.5,422.9 247.8,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9809_s9xaskocwf"><polygon
                                points="245,439.8 245,439.8 253.7,431.1 253.7,428.8 253.7,428.8 250.9,431.6 250.9,431.6 236.8,445.7    236.8,445.7 231.4,451 233.7,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9810_s9xaskocwf"><polygon
                                points="225.5,428.8 225.5,431.1 225.5,431.1 230.9,425.7 233.7,422.9 231.4,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9811_s9xaskocwf"><polygon
                                points="225.5,445.1 230.9,439.8 245,425.7 245,425.7 247.8,422.9 245.5,422.9 236.8,431.6 236.8,431.6    225.5,442.9 225.5,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9812_s9xaskocwf"><polygon
                                points="253.7,445.1 253.7,442.9 253.7,442.9 250.9,445.7 250.9,445.7 245.5,451 247.8,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9813_s9xaskocwf"><polygon
                                points="245,468 245,468 253.7,459.2 253.7,456.9 253.7,456.9 250.9,459.8 250.9,459.8 236.8,473.9    236.8,473.9 231.4,479.2 233.7,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9814_s9xaskocwf"><polygon
                                points="225.5,459.2 230.9,453.9 233.7,451 231.4,451 225.5,456.9 225.5,459.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9815_s9xaskocwf"><polygon
                                points="225.5,473.3 230.9,468 245,453.9 245,453.9 247.8,451 245.5,451 236.8,459.8 236.8,459.8    225.5,471 225.5,473.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9816_s9xaskocwf"><polygon
                                points="253.7,473.3 253.7,471 253.7,471 250.9,473.9 250.9,473.9 245.5,479.2 247.8,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9817_s9xaskocwf"><path
                                d="M253.7,487.4v-2.3v0l-2.8,2.8l0,0l-7,7c0.8,0,1.5,0,2.3,0L253.7,487.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9818_s9xaskocwf"><polygon
                                points="225.5,487.4 230.9,482.1 233.7,479.2 231.4,479.2 225.5,485.1 225.5,487.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9819_s9xaskocwf"><path
                                d="M245,482.1L245,482.1l2.8-2.8h-2.3l-8.7,8.7l0,0l-6.4,6.4c0.7,0,1.4,0.1,2.2,0.1L245,482.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9820_s9xaskocwf"><polygon
                                points="225.5,5.9 222.7,8.7 222.7,8.7 208.6,22.8 208.6,22.8 203.2,28.2 205.5,28.2 216.8,16.9    216.8,16.9 225.5,8.2 225.5,5.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9821_s9xaskocwf"><path
                                d="M197.3,8.2l3.8-3.8c-0.9,0.2-1.9,0.4-2.8,0.5l-1,1V8.2L197.3,8.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9822_s9xaskocwf"><path
                                d="M197.3,22.3l5.4-5.4l14.1-14.1h0l1.1-1.1c-0.9,0.1-1.7,0.2-2.6,0.3l-6.6,6.6l0,0L197.3,20V22.3L197.3,22.3z   "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9823_s9xaskocwf"><polygon
                                points="225.5,22.3 225.5,20 225.5,20 222.7,22.8 222.7,22.8 217.3,28.2 219.6,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9824_s9xaskocwf"><polygon
                                points="216.8,45.1 216.8,45.1 225.5,36.4 225.5,34.1 225.5,34.1 222.7,36.9 222.7,36.9 208.6,51 208.6,51    203.2,56.4 205.5,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9825_s9xaskocwf"><polygon
                                points="197.3,34.1 197.3,36.4 197.3,36.4 202.7,31 205.5,28.2 203.2,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9826_s9xaskocwf"><polygon
                                points="197.3,50.5 202.7,45.1 216.8,31 216.8,31 219.6,28.2 217.3,28.2 208.6,36.9 208.6,36.9 197.3,48.2    197.3,50.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9827_s9xaskocwf"><polygon
                                points="225.5,50.5 225.5,48.2 225.5,48.2 222.7,51 222.7,51 217.3,56.4 219.6,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9828_s9xaskocwf"><polygon
                                points="216.8,73.3 216.8,73.3 225.5,64.6 225.5,62.3 225.5,62.3 222.7,65.1 222.7,65.1 208.6,79.2    208.6,79.2 203.2,84.6 205.5,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9829_s9xaskocwf"><polygon
                                points="197.3,64.6 202.7,59.2 205.5,56.4 203.2,56.4 197.3,62.3 197.3,64.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9830_s9xaskocwf"><polygon
                                points="197.3,78.7 202.7,73.3 216.8,59.2 216.8,59.2 219.6,56.4 217.3,56.4 208.6,65.1 208.6,65.1    197.3,76.4 197.3,78.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9831_s9xaskocwf"><polygon
                                points="225.5,78.7 225.5,76.4 225.5,76.4 222.7,79.2 222.7,79.2 217.3,84.6 219.6,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9832_s9xaskocwf"><polygon
                                points="216.8,101.5 216.8,101.5 225.5,92.8 225.5,90.5 225.5,90.5 222.7,93.3 222.7,93.3 208.6,107.4    208.6,107.4 203.2,112.8 205.5,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9833_s9xaskocwf"><polygon
                                points="197.3,92.8 202.7,87.4 205.5,84.6 203.2,84.6 197.3,90.5 197.3,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9834_s9xaskocwf"><polygon
                                points="197.3,106.9 202.7,101.5 216.8,87.4 216.8,87.4 219.6,84.6 217.3,84.6 208.6,93.3 208.6,93.3    197.3,104.6 197.3,106.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9835_s9xaskocwf"><polygon
                                points="225.5,106.9 225.5,104.6 225.5,104.6 222.7,107.4 222.7,107.4 217.3,112.8 219.6,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9836_s9xaskocwf"><polygon
                                points="225.5,118.7 222.7,121.5 222.7,121.5 208.6,135.6 208.6,135.6 203.2,141 205.5,141 216.8,129.7    216.8,129.7 225.5,121 225.5,118.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9837_s9xaskocwf"><polygon
                                points="197.3,121 202.7,115.6 205.5,112.8 203.2,112.8 197.3,118.7 197.3,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9838_s9xaskocwf"><polygon
                                points="197.3,135.1 202.7,129.7 216.8,115.6 216.8,115.6 219.6,112.8 217.3,112.8 208.6,121.5    208.6,121.5 197.3,132.8 197.3,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9839_s9xaskocwf"><polygon
                                points="225.5,132.8 222.7,135.6 222.7,135.6 217.3,141 219.6,141 225.5,135.1 225.5,132.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9840_s9xaskocwf"><polygon
                                points="225.5,146.9 222.7,149.7 222.7,149.7 208.6,163.8 208.6,163.8 203.2,169.1 205.5,169.1    216.8,157.9 216.8,157.9 225.5,149.1 225.5,146.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9841_s9xaskocwf"><polygon
                                points="197.3,146.9 197.3,149.1 197.3,149.1 202.7,143.8 205.5,141 203.2,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9842_s9xaskocwf"><polygon
                                points="208.6,149.7 208.6,149.7 197.3,160.9 197.3,163.2 197.3,163.2 202.7,157.9 216.8,143.8    216.8,143.8 219.6,141 217.3,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9843_s9xaskocwf"><polygon
                                points="225.5,163.2 225.5,160.9 225.5,160.9 222.7,163.8 222.7,163.8 217.3,169.1 219.6,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9844_s9xaskocwf"><polygon
                                points="216.8,186.1 216.8,186.1 225.5,177.3 225.5,175 225.5,175 222.7,177.9 222.7,177.9 208.6,192    208.6,192 203.2,197.3 205.5,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9845_s9xaskocwf"><polygon
                                points="197.3,175 197.3,177.3 197.3,177.3 202.7,172 205.5,169.1 203.2,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9846_s9xaskocwf"><polygon
                                points="197.3,191.4 202.7,186.1 216.8,172 216.8,172 219.6,169.1 217.3,169.1 208.6,177.9 208.6,177.9    197.3,189.1 197.3,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9847_s9xaskocwf"><polygon
                                points="225.5,189.1 222.7,192 222.7,192 217.3,197.3 219.6,197.3 225.5,191.4 225.5,189.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9848_s9xaskocwf"><polygon
                                points="216.8,214.3 216.8,214.3 225.5,205.5 225.5,203.2 225.5,203.2 222.7,206.1 222.7,206.1    208.6,220.2 208.6,220.2 203.2,225.5 205.5,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9849_s9xaskocwf"><polygon
                                points="197.3,205.5 202.7,200.2 205.5,197.3 203.2,197.3 197.3,203.2 197.3,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9850_s9xaskocwf"><polygon
                                points="208.6,206.1 208.6,206.1 197.3,217.3 197.3,219.6 197.3,219.6 202.7,214.3 216.8,200.2    216.8,200.2 219.6,197.3 217.3,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9851_s9xaskocwf"><polygon
                                points="225.5,217.3 222.7,220.2 222.7,220.2 217.3,225.5 219.6,225.5 225.5,219.6 225.5,217.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9852_s9xaskocwf"><polygon
                                points="216.8,242.5 216.8,242.5 225.5,233.7 225.5,231.4 225.5,231.4 222.7,234.3 222.7,234.3    208.6,248.4 208.6,248.4 203.2,253.7 205.5,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9853_s9xaskocwf"><polygon
                                points="197.3,233.7 202.7,228.4 205.5,225.5 203.2,225.5 197.3,231.4 197.3,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9854_s9xaskocwf"><polygon
                                points="208.6,234.3 208.6,234.3 197.3,245.5 197.3,247.8 197.3,247.8 202.7,242.5 216.8,228.4    216.8,228.4 219.6,225.5 217.3,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9855_s9xaskocwf"><polygon
                                points="225.5,245.5 222.7,248.4 222.7,248.4 217.3,253.7 219.6,253.7 225.5,247.8 225.5,245.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9856_s9xaskocwf"><polygon
                                points="216.8,270.6 216.8,270.6 225.5,261.9 225.5,259.6 225.5,259.6 222.7,262.5 222.7,262.5    208.6,276.5 208.6,276.5 203.2,281.9 205.5,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9857_s9xaskocwf"><polygon
                                points="197.3,261.9 202.7,256.6 205.5,253.7 203.2,253.7 197.3,259.6 197.3,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9858_s9xaskocwf"><polygon
                                points="208.6,262.5 208.6,262.5 197.3,273.7 197.3,276 197.3,276 202.7,270.6 216.8,256.6 216.8,256.6    219.6,253.7 217.3,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9859_s9xaskocwf"><polygon
                                points="225.5,276 225.5,273.7 225.5,273.7 222.7,276.5 222.7,276.5 217.3,281.9 219.6,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9860_s9xaskocwf"><polygon
                                points="216.8,298.8 216.8,298.8 225.5,290.1 225.5,287.8 225.5,287.8 222.7,290.6 222.7,290.6    208.6,304.7 208.6,304.7 203.2,310.1 205.5,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9861_s9xaskocwf"><polygon
                                points="197.3,290.1 202.7,284.7 205.5,281.9 203.2,281.9 197.3,287.8 197.3,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9862_s9xaskocwf"><polygon
                                points="197.3,304.2 202.7,298.8 216.8,284.7 216.8,284.7 219.6,281.9 217.3,281.9 208.6,290.6    208.6,290.6 197.3,301.9 197.3,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9863_s9xaskocwf"><polygon
                                points="225.5,301.9 222.7,304.7 222.7,304.7 217.3,310.1 219.6,310.1 225.5,304.2 225.5,301.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9864_s9xaskocwf"><polygon
                                points="225.5,316 222.7,318.8 222.7,318.8 208.6,332.9 208.6,332.9 203.2,338.3 205.5,338.3 216.8,327    216.8,327 225.5,318.3 225.5,316  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9865_s9xaskocwf"><polygon
                                points="197.3,318.3 202.7,312.9 205.5,310.1 203.2,310.1 197.3,316 197.3,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9866_s9xaskocwf"><polygon
                                points="208.6,318.8 208.6,318.8 197.3,330.1 197.3,332.4 197.3,332.4 202.7,327 216.8,312.9 216.8,312.9    219.6,310.1 217.3,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9867_s9xaskocwf"><polygon
                                points="225.5,332.4 225.5,330.1 225.5,330.1 222.7,332.9 222.7,332.9 217.3,338.3 219.6,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9868_s9xaskocwf"><polygon
                                points="216.8,355.2 216.8,355.2 225.5,346.5 225.5,344.2 225.5,344.2 222.7,347 222.7,347 208.6,361.1    208.6,361.1 203.2,366.5 205.5,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9869_s9xaskocwf"><polygon
                                points="197.3,344.2 197.3,346.5 197.3,346.5 202.7,341.1 205.5,338.3 203.2,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9870_s9xaskocwf"><polygon
                                points="197.3,360.6 202.7,355.2 216.8,341.1 216.8,341.1 219.6,338.3 217.3,338.3 208.6,347 208.6,347    197.3,358.3 197.3,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9871_s9xaskocwf"><polygon
                                points="225.5,358.3 222.7,361.1 222.7,361.1 217.3,366.5 219.6,366.5 225.5,360.6 225.5,358.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9872_s9xaskocwf"><polygon
                                points="216.8,383.4 216.8,383.4 225.5,374.7 225.5,372.4 225.5,372.4 222.7,375.2 222.7,375.2    208.6,389.3 208.6,389.3 203.2,394.7 205.5,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9873_s9xaskocwf"><polygon
                                points="197.3,374.7 202.7,369.3 205.5,366.5 203.2,366.5 197.3,372.4 197.3,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9874_s9xaskocwf"><polygon
                                points="208.6,375.2 208.6,375.2 197.3,386.5 197.3,388.8 197.3,388.8 202.7,383.4 216.8,369.3    216.8,369.3 219.6,366.5 217.3,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9875_s9xaskocwf"><polygon
                                points="225.5,386.5 222.7,389.3 222.7,389.3 217.3,394.7 219.6,394.7 225.5,388.8 225.5,386.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9876_s9xaskocwf"><polygon
                                points="216.8,411.6 216.8,411.6 225.5,402.9 225.5,400.6 225.5,400.6 222.7,403.4 222.7,403.4    208.6,417.5 208.6,417.5 203.2,422.9 205.5,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9877_s9xaskocwf"><polygon
                                points="197.3,402.9 202.7,397.5 205.5,394.7 203.2,394.7 197.3,400.6 197.3,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9878_s9xaskocwf"><polygon
                                points="208.6,403.4 208.6,403.4 197.3,414.7 197.3,417 197.3,417 202.7,411.6 216.8,397.5 216.8,397.5    219.6,394.7 217.3,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9879_s9xaskocwf"><polygon
                                points="225.5,417 225.5,414.7 225.5,414.7 222.7,417.5 222.7,417.5 217.3,422.9 219.6,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9880_s9xaskocwf"><polygon
                                points="225.5,428.8 222.7,431.6 222.7,431.6 208.6,445.7 208.6,445.7 203.2,451 205.5,451 216.8,439.8    216.8,439.8 225.5,431.1 225.5,428.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9881_s9xaskocwf"><polygon
                                points="197.3,431.1 202.7,425.7 205.5,422.9 203.2,422.9 197.3,428.8 197.3,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9882_s9xaskocwf"><polygon
                                points="197.3,445.1 202.7,439.8 216.8,425.7 216.8,425.7 219.6,422.9 217.3,422.9 208.6,431.6    208.6,431.6 197.3,442.9 197.3,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9883_s9xaskocwf"><polygon
                                points="225.5,445.1 225.5,442.9 225.5,442.9 222.7,445.7 222.7,445.7 217.3,451 219.6,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9884_s9xaskocwf"><polygon
                                points="216.8,468 216.8,468 225.5,459.2 225.5,456.9 225.5,456.9 222.7,459.8 222.7,459.8 208.6,473.9    208.6,473.9 203.2,479.2 205.5,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9885_s9xaskocwf"><polygon
                                points="197.3,456.9 197.3,459.2 197.3,459.2 202.7,453.9 205.5,451 203.2,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9886_s9xaskocwf"><polygon
                                points="197.3,473.3 202.7,468 216.8,453.9 216.8,453.9 219.6,451 217.3,451 208.6,459.8 208.6,459.8    197.3,471 197.3,473.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9887_s9xaskocwf"><polygon
                                points="225.5,473.3 225.5,471 225.5,471 222.7,473.9 222.7,473.9 217.3,479.2 219.6,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9888_s9xaskocwf"><path
                                d="M225.5,487.4v-2.3v0l-2.8,2.8l0,0l-5.2,5.2c0.7,0.1,1.4,0.2,2.1,0.2L225.5,487.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9889_s9xaskocwf"><polygon
                                points="197.3,487.4 202.7,482.1 205.5,479.2 203.2,479.2 197.3,485.1 197.3,487.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9890_s9xaskocwf"><path
                                d="M216.8,482.1L216.8,482.1l2.8-2.8h-2.3l-8.7,8.7l0,0l-3.4,3.4c0.7,0.1,1.3,0.2,2,0.3L216.8,482.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9891_s9xaskocwf"><polygon
                                points="188.6,16.9 188.6,16.9 197.3,8.2 197.3,5.9 197.3,5.9 194.5,8.7 194.5,8.7 180.4,22.8 180.4,22.8    175,28.2 177.3,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9892_s9xaskocwf"><path
                                d="M169.1,22.3l5.4-5.4l8.4-8.4c-1,0.3-2.1,0.6-3.1,0.9L169.1,20V22.3L169.1,22.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9893_s9xaskocwf"><polygon
                                points="197.3,22.3 197.3,20 197.3,20 194.5,22.8 194.5,22.8 189.1,28.2 191.4,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9894_s9xaskocwf"><polygon
                                points="197.3,34.1 194.5,36.9 194.5,36.9 180.4,51 180.4,51 175,56.4 177.3,56.4 188.6,45.1 188.6,45.1    197.3,36.4 197.3,34.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9895_s9xaskocwf"><polygon
                                points="169.1,36.4 174.5,31 177.3,28.2 175,28.2 169.1,34.1 169.1,36.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9896_s9xaskocwf"><polygon
                                points="169.1,50.5 174.5,45.1 188.6,31 188.6,31 191.4,28.2 189.1,28.2 180.4,36.9 180.4,36.9 169.1,48.2    169.1,50.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9897_s9xaskocwf"><polygon
                                points="197.3,50.5 197.3,48.2 197.3,48.2 194.5,51 194.5,51 189.1,56.4 191.4,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9898_s9xaskocwf"><polygon
                                points="188.6,73.3 188.6,73.3 197.3,64.6 197.3,62.3 197.3,62.3 194.5,65.1 194.5,65.1 180.4,79.2    180.4,79.2 175,84.6 177.3,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9899_s9xaskocwf"><polygon
                                points="169.1,62.3 169.1,64.6 169.1,64.6 174.5,59.2 177.3,56.4 175,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9900_s9xaskocwf"><polygon
                                points="169.1,78.7 174.5,73.3 188.6,59.2 188.6,59.2 191.4,56.4 189.1,56.4 180.4,65.1 180.4,65.1    169.1,76.4 169.1,78.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9901_s9xaskocwf"><polygon
                                points="197.3,78.7 197.3,76.4 197.3,76.4 194.5,79.2 194.5,79.2 189.1,84.6 191.4,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9902_s9xaskocwf"><polygon
                                points="188.6,101.5 188.6,101.5 197.3,92.8 197.3,90.5 197.3,90.5 194.5,93.3 194.5,93.3 180.4,107.4    180.4,107.4 175,112.8 177.3,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9903_s9xaskocwf"><polygon
                                points="169.1,92.8 174.5,87.4 177.3,84.6 175,84.6 169.1,90.5 169.1,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9904_s9xaskocwf"><polygon
                                points="169.1,106.9 174.5,101.5 188.6,87.4 188.6,87.4 191.4,84.6 189.1,84.6 180.4,93.3 180.4,93.3    169.1,104.6 169.1,106.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9905_s9xaskocwf"><polygon
                                points="197.3,106.9 197.3,104.6 197.3,104.6 194.5,107.4 194.5,107.4 189.1,112.8 191.4,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9906_s9xaskocwf"><polygon
                                points="188.6,129.7 188.6,129.7 197.3,121 197.3,118.7 197.3,118.7 194.5,121.5 194.5,121.5 180.4,135.6    180.4,135.6 175,141 177.3,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9907_s9xaskocwf"><polygon
                                points="169.1,121 174.5,115.6 177.3,112.8 175,112.8 169.1,118.7 169.1,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9908_s9xaskocwf"><polygon
                                points="169.1,135.1 174.5,129.7 188.6,115.6 188.6,115.6 191.4,112.8 189.1,112.8 180.4,121.5    180.4,121.5 169.1,132.8 169.1,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9909_s9xaskocwf"><polygon
                                points="197.3,135.1 197.3,132.8 197.3,132.8 194.5,135.6 194.5,135.6 189.1,141 191.4,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9910_s9xaskocwf"><polygon
                                points="197.3,146.9 194.5,149.7 194.5,149.7 180.4,163.8 180.4,163.8 175,169.1 177.3,169.1 188.6,157.9    188.6,157.9 197.3,149.1 197.3,146.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9911_s9xaskocwf"><polygon
                                points="169.1,149.1 174.5,143.8 177.3,141 175,141 169.1,146.9 169.1,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9912_s9xaskocwf"><polygon
                                points="169.1,163.2 174.5,157.9 188.6,143.8 188.6,143.8 191.4,141 189.1,141 180.4,149.7 180.4,149.7    169.1,160.9 169.1,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9913_s9xaskocwf"><polygon
                                points="197.3,160.9 194.5,163.8 194.5,163.8 189.1,169.1 191.4,169.1 197.3,163.2 197.3,160.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9914_s9xaskocwf"><polygon
                                points="197.3,175 194.5,177.9 194.5,177.9 180.4,192 180.4,192 175,197.3 177.3,197.3 188.6,186.1    188.6,186.1 197.3,177.3 197.3,175  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9915_s9xaskocwf"><polygon
                                points="169.1,175 169.1,177.3 169.1,177.3 174.5,172 177.3,169.1 175,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9916_s9xaskocwf"><polygon
                                points="180.4,177.9 180.4,177.9 169.1,189.1 169.1,191.4 169.1,191.4 174.5,186.1 188.6,172 188.6,172    191.4,169.1 189.1,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9917_s9xaskocwf"><polygon
                                points="197.3,191.4 197.3,189.1 197.3,189.1 194.5,192 194.5,192 189.1,197.3 191.4,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9918_s9xaskocwf"><polygon
                                points="188.6,214.3 188.6,214.3 197.3,205.5 197.3,203.2 197.3,203.2 194.5,206.1 194.5,206.1    180.4,220.2 180.4,220.2 175,225.5 177.3,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9919_s9xaskocwf"><polygon
                                points="169.1,203.2 169.1,205.5 169.1,205.5 174.5,200.2 177.3,197.3 175,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9920_s9xaskocwf"><polygon
                                points="169.1,219.6 174.5,214.3 188.6,200.2 188.6,200.2 191.4,197.3 189.1,197.3 180.4,206.1    180.4,206.1 169.1,217.3 169.1,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9921_s9xaskocwf"><polygon
                                points="197.3,217.3 194.5,220.2 194.5,220.2 189.1,225.5 191.4,225.5 197.3,219.6 197.3,217.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9922_s9xaskocwf"><polygon
                                points="188.6,242.5 188.6,242.5 197.3,233.7 197.3,231.4 197.3,231.4 194.5,234.3 194.5,234.3    180.4,248.4 180.4,248.4 175,253.7 177.3,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9923_s9xaskocwf"><polygon
                                points="169.1,233.7 174.5,228.4 177.3,225.5 175,225.5 169.1,231.4 169.1,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9924_s9xaskocwf"><polygon
                                points="180.4,234.3 180.4,234.3 169.1,245.5 169.1,247.8 169.1,247.8 174.5,242.5 188.6,228.4    188.6,228.4 191.4,225.5 189.1,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9925_s9xaskocwf"><polygon
                                points="197.3,245.5 194.5,248.4 194.5,248.4 189.1,253.7 191.4,253.7 197.3,247.8 197.3,245.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9926_s9xaskocwf"><polygon
                                points="188.6,270.6 188.6,270.6 197.3,261.9 197.3,259.6 197.3,259.6 194.5,262.5 194.5,262.5    180.4,276.5 180.4,276.5 175,281.9 177.3,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9927_s9xaskocwf"><polygon
                                points="169.1,261.9 174.5,256.6 177.3,253.7 175,253.7 169.1,259.6 169.1,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9928_s9xaskocwf"><polygon
                                points="180.4,262.5 180.4,262.5 169.1,273.7 169.1,276 169.1,276 174.5,270.6 188.6,256.6 188.6,256.6    191.4,253.7 189.1,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9929_s9xaskocwf"><polygon
                                points="197.3,273.7 194.5,276.5 194.5,276.5 189.1,281.9 191.4,281.9 197.3,276 197.3,273.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9930_s9xaskocwf"><polygon
                                points="188.6,298.8 188.6,298.8 197.3,290.1 197.3,287.8 197.3,287.8 194.5,290.6 194.5,290.6    180.4,304.7 180.4,304.7 175,310.1 177.3,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9931_s9xaskocwf"><polygon
                                points="169.1,290.1 174.5,284.7 177.3,281.9 175,281.9 169.1,287.8 169.1,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9932_s9xaskocwf"><polygon
                                points="180.4,290.6 180.4,290.6 169.1,301.9 169.1,304.2 169.1,304.2 174.5,298.8 188.6,284.7    188.6,284.7 191.4,281.9 189.1,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9933_s9xaskocwf"><polygon
                                points="197.3,304.2 197.3,301.9 197.3,301.9 194.5,304.7 194.5,304.7 189.1,310.1 191.4,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9934_s9xaskocwf"><polygon
                                points="188.6,327 188.6,327 197.3,318.3 197.3,316 197.3,316 194.5,318.8 194.5,318.8 180.4,332.9    180.4,332.9 175,338.3 177.3,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9935_s9xaskocwf"><polygon
                                points="169.1,318.3 174.5,312.9 177.3,310.1 175,310.1 169.1,316 169.1,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9936_s9xaskocwf"><polygon
                                points="169.1,332.4 174.5,327 188.6,312.9 188.6,312.9 191.4,310.1 189.1,310.1 180.4,318.8 180.4,318.8    169.1,330.1 169.1,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9937_s9xaskocwf"><polygon
                                points="197.3,330.1 194.5,332.9 194.5,332.9 189.1,338.3 191.4,338.3 197.3,332.4 197.3,330.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9938_s9xaskocwf"><polygon
                                points="197.3,344.2 194.5,347 194.5,347 180.4,361.1 180.4,361.1 175,366.5 177.3,366.5 188.6,355.2    188.6,355.2 197.3,346.5 197.3,344.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9939_s9xaskocwf"><polygon
                                points="169.1,346.5 174.5,341.1 177.3,338.3 175,338.3 169.1,344.2 169.1,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9940_s9xaskocwf"><polygon
                                points="180.4,347 180.4,347 169.1,358.3 169.1,360.6 169.1,360.6 174.5,355.2 188.6,341.1 188.6,341.1    191.4,338.3 189.1,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9941_s9xaskocwf"><polygon
                                points="197.3,360.6 197.3,358.3 197.3,358.3 194.5,361.1 194.5,361.1 189.1,366.5 191.4,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9942_s9xaskocwf"><polygon
                                points="188.6,383.4 188.6,383.4 197.3,374.7 197.3,372.4 197.3,372.4 194.5,375.2 194.5,375.2    180.4,389.3 180.4,389.3 175,394.7 177.3,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9943_s9xaskocwf"><polygon
                                points="169.1,372.4 169.1,374.7 169.1,374.7 174.5,369.3 177.3,366.5 175,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9944_s9xaskocwf"><polygon
                                points="169.1,388.8 174.5,383.4 188.6,369.3 188.6,369.3 191.4,366.5 189.1,366.5 180.4,375.2    180.4,375.2 169.1,386.5 169.1,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9945_s9xaskocwf"><polygon
                                points="197.3,386.5 194.5,389.3 194.5,389.3 189.1,394.7 191.4,394.7 197.3,388.8 197.3,386.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9946_s9xaskocwf"><polygon
                                points="188.6,411.6 188.6,411.6 197.3,402.9 197.3,400.6 197.3,400.6 194.5,403.4 194.5,403.4    180.4,417.5 180.4,417.5 175,422.9 177.3,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9947_s9xaskocwf"><polygon
                                points="169.1,402.9 174.5,397.5 177.3,394.7 175,394.7 169.1,400.6 169.1,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9948_s9xaskocwf"><polygon
                                points="180.4,403.4 180.4,403.4 169.1,414.7 169.1,417 169.1,417 174.5,411.6 188.6,397.5 188.6,397.5    191.4,394.7 189.1,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9949_s9xaskocwf"><polygon
                                points="197.3,414.7 194.5,417.5 194.5,417.5 189.1,422.9 191.4,422.9 197.3,417 197.3,414.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9950_s9xaskocwf"><polygon
                                points="188.6,439.8 188.6,439.8 197.3,431.1 197.3,428.8 197.3,428.8 194.5,431.6 194.5,431.6    180.4,445.7 180.4,445.7 175,451 177.3,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9951_s9xaskocwf"><polygon
                                points="169.1,431.1 174.5,425.7 177.3,422.9 175,422.9 169.1,428.8 169.1,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9952_s9xaskocwf"><polygon
                                points="180.4,431.6 180.4,431.6 169.1,442.9 169.1,445.1 169.1,445.1 174.5,439.8 188.6,425.7    188.6,425.7 191.4,422.9 189.1,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9953_s9xaskocwf"><polygon
                                points="197.3,445.1 197.3,442.9 197.3,442.9 194.5,445.7 194.5,445.7 189.1,451 191.4,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9954_s9xaskocwf"><polygon
                                points="197.3,456.9 194.5,459.8 194.5,459.8 180.4,473.9 180.4,473.9 175,479.2 177.3,479.2 188.6,468    188.6,468 197.3,459.2 197.3,456.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9955_s9xaskocwf"><polygon
                                points="169.1,459.2 174.5,453.9 177.3,451 175,451 169.1,456.9 169.1,459.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9956_s9xaskocwf"><polygon
                                points="169.1,473.3 174.5,468 188.6,453.9 188.6,453.9 191.4,451 189.1,451 180.4,459.8 180.4,459.8    169.1,471 169.1,473.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9957_s9xaskocwf"><polygon
                                points="197.3,473.3 197.3,471 197.3,471 194.5,473.9 194.5,473.9 189.1,479.2 191.4,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9958_s9xaskocwf"><path
                                d="M195.3,489.5l2-2v-2.3v0l-2.8,2.8l0,0l-1.1,1.1C194,489.2,194.7,489.3,195.3,489.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9959_s9xaskocwf"><path
                                d="M171.3,483c0.6,0.2,1.2,0.4,1.7,0.6l1.5-1.5l2.8-2.8H175L171.3,483z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9960_s9xaskocwf"><path
                                d="M188.6,482.1l2.8-2.8h-2.3l-7,7c0.6,0.2,1.2,0.3,1.8,0.5L188.6,482.1L188.6,482.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9961_s9xaskocwf"><path
                                d="M152.2,22.8l-5.4,5.4h2.3l11.3-11.3h0l1.9-1.9c-1.2,0.5-2.5,0.9-3.7,1.4L152.2,22.8L152.2,22.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9962_s9xaskocwf"><polygon
                                points="169.1,22.3 169.1,20 169.1,20 166.3,22.8 166.3,22.8 161,28.2 163.2,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9963_s9xaskocwf"><polygon
                                points="160.4,45.1 160.4,45.1 169.1,36.4 169.1,34.1 169.1,34.1 166.3,36.9 166.3,36.9 152.2,51 152.2,51    146.9,56.4 149.1,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9964_s9xaskocwf"><polygon
                                points="141,34.1 141,36.4 141,36.4 146.3,31 149.1,28.2 146.9,28.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9965_s9xaskocwf"><polygon
                                points="141,50.5 146.3,45.1 160.4,31 160.4,31 163.2,28.2 161,28.2 152.2,36.9 152.2,36.9 141,48.2    141,50.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9966_s9xaskocwf"><polygon
                                points="169.1,50.5 169.1,48.2 169.1,48.2 166.3,51 166.3,51 161,56.4 163.2,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9967_s9xaskocwf"><polygon
                                points="169.1,62.3 166.3,65.1 166.3,65.1 152.2,79.2 152.2,79.2 146.9,84.6 149.1,84.6 160.4,73.3    160.4,73.3 169.1,64.6 169.1,62.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9968_s9xaskocwf"><polygon
                                points="141,64.6 146.3,59.2 149.1,56.4 146.9,56.4 141,62.3 141,64.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9969_s9xaskocwf"><polygon
                                points="141,78.7 146.3,73.3 160.4,59.2 160.4,59.2 163.2,56.4 161,56.4 152.2,65.1 152.2,65.1 141,76.4    141,78.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9970_s9xaskocwf"><polygon
                                points="169.1,78.7 169.1,76.4 169.1,76.4 166.3,79.2 166.3,79.2 161,84.6 163.2,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9971_s9xaskocwf"><polygon
                                points="160.4,101.5 160.4,101.5 169.1,92.8 169.1,90.5 169.1,90.5 166.3,93.3 166.3,93.3 152.2,107.4    152.2,107.4 146.9,112.8 149.1,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9972_s9xaskocwf"><polygon
                                points="141,90.5 141,92.8 141,92.8 146.3,87.4 149.1,84.6 146.9,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9973_s9xaskocwf"><polygon
                                points="141,106.9 146.3,101.5 160.4,87.4 160.4,87.4 163.2,84.6 161,84.6 152.2,93.3 152.2,93.3    141,104.6 141,106.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9974_s9xaskocwf"><polygon
                                points="169.1,106.9 169.1,104.6 169.1,104.6 166.3,107.4 166.3,107.4 161,112.8 163.2,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9975_s9xaskocwf"><polygon
                                points="160.4,129.7 160.4,129.7 169.1,121 169.1,118.7 169.1,118.7 166.3,121.5 166.3,121.5 152.2,135.6    152.2,135.6 146.9,141 149.1,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9976_s9xaskocwf"><polygon
                                points="141,121 146.3,115.6 149.1,112.8 146.9,112.8 141,118.7 141,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9977_s9xaskocwf"><polygon
                                points="141,135.1 146.3,129.7 160.4,115.6 160.4,115.6 163.2,112.8 161,112.8 152.2,121.5 152.2,121.5    141,132.8 141,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9978_s9xaskocwf"><polygon
                                points="169.1,135.1 169.1,132.8 169.1,132.8 166.3,135.6 166.3,135.6 161,141 163.2,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9979_s9xaskocwf"><polygon
                                points="160.4,157.9 160.4,157.9 169.1,149.1 169.1,146.9 169.1,146.9 166.3,149.7 166.3,149.7    152.2,163.8 152.2,163.8 146.9,169.1 149.1,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9980_s9xaskocwf"><polygon
                                points="141,149.1 146.3,143.8 149.1,141 146.9,141 141,146.9 141,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9981_s9xaskocwf"><polygon
                                points="141,163.2 146.3,157.9 160.4,143.8 160.4,143.8 163.2,141 161,141 152.2,149.7 152.2,149.7    141,160.9 141,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9982_s9xaskocwf"><polygon
                                points="169.1,163.2 169.1,160.9 169.1,160.9 166.3,163.8 166.3,163.8 161,169.1 163.2,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9983_s9xaskocwf"><polygon
                                points="169.1,175 166.3,177.9 166.3,177.9 152.2,192 152.2,192 146.9,197.3 149.1,197.3 160.4,186.1    160.4,186.1 169.1,177.3 169.1,175  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9984_s9xaskocwf"><polygon
                                points="141,177.3 146.3,172 149.1,169.1 146.9,169.1 141,175 141,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9985_s9xaskocwf"><polygon
                                points="141,191.4 146.3,186.1 160.4,172 160.4,172 163.2,169.1 161,169.1 152.2,177.9 152.2,177.9    141,189.1 141,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9986_s9xaskocwf"><polygon
                                points="169.1,189.1 166.3,192 166.3,192 161,197.3 163.2,197.3 169.1,191.4 169.1,189.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9987_s9xaskocwf"><polygon
                                points="169.1,203.2 166.3,206.1 166.3,206.1 152.2,220.2 152.2,220.2 146.9,225.5 149.1,225.5    160.4,214.3 160.4,214.3 169.1,205.5 169.1,203.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9988_s9xaskocwf"><polygon
                                points="141,203.2 141,205.5 141,205.5 146.3,200.2 149.1,197.3 146.9,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9989_s9xaskocwf"><polygon
                                points="152.2,206.1 152.2,206.1 141,217.3 141,219.6 141,219.6 146.3,214.3 160.4,200.2 160.4,200.2    163.2,197.3 161,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9990_s9xaskocwf"><polygon
                                points="169.1,219.6 169.1,217.3 169.1,217.3 166.3,220.2 166.3,220.2 161,225.5 163.2,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9991_s9xaskocwf"><polygon
                                points="160.4,242.5 160.4,242.5 169.1,233.7 169.1,231.4 169.1,231.4 166.3,234.3 166.3,234.3    152.2,248.4 152.2,248.4 146.9,253.7 149.1,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9992_s9xaskocwf"><polygon
                                points="141,231.4 141,233.7 141,233.7 146.3,228.4 149.1,225.5 146.9,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9993_s9xaskocwf"><polygon
                                points="141,247.8 146.3,242.5 160.4,228.4 160.4,228.4 163.2,225.5 161,225.5 152.2,234.3 152.2,234.3    141,245.5 141,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9994_s9xaskocwf"><polygon
                                points="169.1,245.5 166.3,248.4 166.3,248.4 161,253.7 163.2,253.7 169.1,247.8 169.1,245.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9995_s9xaskocwf"><polygon
                                points="160.4,270.6 160.4,270.6 169.1,261.9 169.1,259.6 169.1,259.6 166.3,262.5 166.3,262.5    152.2,276.5 152.2,276.5 146.9,281.9 149.1,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9996_s9xaskocwf"><polygon
                                points="141,261.9 146.3,256.6 149.1,253.7 146.9,253.7 141,259.6 141,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9997_s9xaskocwf"><polygon
                                points="152.2,262.5 152.2,262.5 141,273.7 141,276 141,276 146.3,270.6 160.4,256.6 160.4,256.6    163.2,253.7 161,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9998_s9xaskocwf"><polygon
                                points="169.1,273.7 166.3,276.5 166.3,276.5 161,281.9 163.2,281.9 169.1,276 169.1,273.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id9999_s9xaskocwf"><polygon
                                points="160.4,298.8 160.4,298.8 169.1,290.1 169.1,287.8 169.1,287.8 166.3,290.6 166.3,290.6    152.2,304.7 152.2,304.7 146.9,310.1 149.1,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10000_s9xaskocwf"><polygon
                                points="141,290.1 146.3,284.7 149.1,281.9 146.9,281.9 141,287.8 141,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10001_s9xaskocwf"><polygon
                                points="152.2,290.6 152.2,290.6 141,301.9 141,304.2 141,304.2 146.3,298.8 160.4,284.7 160.4,284.7    163.2,281.9 161,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10002_s9xaskocwf"><polygon
                                points="169.1,301.9 166.3,304.7 166.3,304.7 161,310.1 163.2,310.1 169.1,304.2 169.1,301.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10003_s9xaskocwf"><polygon
                                points="160.4,327 160.4,327 169.1,318.3 169.1,316 169.1,316 166.3,318.8 166.3,318.8 152.2,332.9    152.2,332.9 146.9,338.3 149.1,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10004_s9xaskocwf"><polygon
                                points="141,318.3 146.3,312.9 149.1,310.1 146.9,310.1 141,316 141,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10005_s9xaskocwf"><polygon
                                points="152.2,318.8 152.2,318.8 141,330.1 141,332.4 141,332.4 146.3,327 160.4,312.9 160.4,312.9    163.2,310.1 161,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10006_s9xaskocwf"><polygon
                                points="169.1,332.4 169.1,330.1 169.1,330.1 166.3,332.9 166.3,332.9 161,338.3 163.2,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10007_s9xaskocwf"><polygon
                                points="160.4,355.2 160.4,355.2 169.1,346.5 169.1,344.2 169.1,344.2 166.3,347 166.3,347 152.2,361.1    152.2,361.1 146.9,366.5 149.1,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10008_s9xaskocwf"><polygon
                                points="141,346.5 146.3,341.1 149.1,338.3 146.9,338.3 141,344.2 141,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10009_s9xaskocwf"><polygon
                                points="141,360.6 146.3,355.2 160.4,341.1 160.4,341.1 163.2,338.3 161,338.3 152.2,347 152.2,347    141,358.3 141,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10010_s9xaskocwf"><polygon
                                points="169.1,358.3 166.3,361.1 166.3,361.1 161,366.5 163.2,366.5 169.1,360.6 169.1,358.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10011_s9xaskocwf"><polygon
                                points="169.1,372.4 166.3,375.2 166.3,375.2 152.2,389.3 152.2,389.3 146.9,394.7 149.1,394.7    160.4,383.4 160.4,383.4 169.1,374.7 169.1,372.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10012_s9xaskocwf"><polygon
                                points="141,374.7 146.3,369.3 149.1,366.5 146.9,366.5 141,372.4 141,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10013_s9xaskocwf"><polygon
                                points="152.2,375.2 152.2,375.2 141,386.5 141,388.8 141,388.8 146.3,383.4 160.4,369.3 160.4,369.3    163.2,366.5 161,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10014_s9xaskocwf"><polygon
                                points="169.1,388.8 169.1,386.5 169.1,386.5 166.3,389.3 166.3,389.3 161,394.7 163.2,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10015_s9xaskocwf"><polygon
                                points="160.4,411.6 160.4,411.6 169.1,402.9 169.1,400.6 169.1,400.6 166.3,403.4 166.3,403.4    152.2,417.5 152.2,417.5 146.9,422.9 149.1,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10016_s9xaskocwf"><polygon
                                points="141,400.6 141,402.9 141,402.9 146.3,397.5 149.1,394.7 146.9,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10017_s9xaskocwf"><polygon
                                points="141,417 146.3,411.6 160.4,397.5 160.4,397.5 163.2,394.7 161,394.7 152.2,403.4 152.2,403.4    141,414.7 141,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10018_s9xaskocwf"><polygon
                                points="169.1,414.7 166.3,417.5 166.3,417.5 161,422.9 163.2,422.9 169.1,417 169.1,414.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10019_s9xaskocwf"><polygon
                                points="160.4,439.8 160.4,439.8 169.1,431.1 169.1,428.8 169.1,428.8 166.3,431.6 166.3,431.6    152.2,445.7 152.2,445.7 146.9,451 149.1,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10020_s9xaskocwf"><polygon
                                points="141,431.1 146.3,425.7 149.1,422.9 146.9,422.9 141,428.8 141,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10021_s9xaskocwf"><polygon
                                points="152.2,431.6 152.2,431.6 141,442.9 141,445.1 141,445.1 146.3,439.8 160.4,425.7 160.4,425.7    163.2,422.9 161,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10022_s9xaskocwf"><polygon
                                points="169.1,442.9 166.3,445.7 166.3,445.7 161,451 163.2,451 169.1,445.1 169.1,442.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10023_s9xaskocwf"><path
                                d="M160.4,468l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-14.1,14.1l0,0l-1.5,1.5c0.5,0.2,1.1,0.4,1.6,0.7L160.4,468   L160.4,468z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10024_s9xaskocwf"><polygon
                                points="141,459.2 146.3,453.9 149.1,451 146.9,451 141,456.9 141,459.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10025_s9xaskocwf"><path
                                d="M152.2,459.8L152.2,459.8L141,471c0.5,0.2,1,0.5,1.6,0.7l3.7-3.7l14.1-14.1h0l2.8-2.8H161L152.2,459.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10026_s9xaskocwf"><polygon
                                points="169.1,473.3 169.1,471 169.1,471 166.3,473.9 166.3,473.9 161,479.2 163.2,479.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10027_s9xaskocwf"><path
                                d="M161,479.2l-0.1,0.1c0.6,0.2,1.1,0.4,1.7,0.6l0.8-0.8H161z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10028_s9xaskocwf"><path
                                d="M137.5,25.8c-1.6,0.8-3.1,1.6-4.7,2.4l-0.1,0.1h2.3L137.5,25.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10029_s9xaskocwf"><polygon
                                points="141,34.1 138.1,36.9 138.1,36.9 124,51 124,51 118.7,56.4 121,56.4 132.2,45.1 132.2,45.1    141,36.4 141,34.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10030_s9xaskocwf"><polygon
                                points="118.1,45.1 132.2,31 132.2,31 135.1,28.2 132.8,28.2 124,36.9 124,36.9 112.8,48.2 112.8,50.5    112.8,50.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10031_s9xaskocwf"><polygon
                                points="141,50.5 141,48.2 141,48.2 138.1,51 138.1,51 132.8,56.4 135.1,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10032_s9xaskocwf"><polygon
                                points="132.2,73.3 132.2,73.3 141,64.6 141,62.3 141,62.3 138.1,65.1 138.1,65.1 124,79.2 124,79.2    118.7,84.6 121,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10033_s9xaskocwf"><polygon
                                points="112.8,62.3 112.8,64.6 112.8,64.6 118.1,59.2 121,56.4 118.7,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10034_s9xaskocwf"><polygon
                                points="112.8,78.7 118.1,73.3 132.2,59.2 132.2,59.2 135.1,56.4 132.8,56.4 124,65.1 124,65.1 112.8,76.4    112.8,78.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10035_s9xaskocwf"><polygon
                                points="141,78.7 141,76.4 141,76.4 138.1,79.2 138.1,79.2 132.8,84.6 135.1,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10036_s9xaskocwf"><polygon
                                points="141,90.5 138.1,93.3 138.1,93.3 124,107.4 124,107.4 118.7,112.8 121,112.8 132.2,101.5    132.2,101.5 141,92.8 141,90.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10037_s9xaskocwf"><polygon
                                points="112.8,92.8 118.1,87.4 121,84.6 118.7,84.6 112.8,90.5 112.8,92.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10038_s9xaskocwf"><polygon
                                points="112.8,106.9 118.1,101.5 132.2,87.4 132.2,87.4 135.1,84.6 132.8,84.6 124,93.3 124,93.3    112.8,104.6 112.8,106.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10039_s9xaskocwf"><polygon
                                points="141,106.9 141,104.6 141,104.6 138.1,107.4 138.1,107.4 132.8,112.8 135.1,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10040_s9xaskocwf"><polygon
                                points="132.2,129.7 132.2,129.7 141,121 141,118.7 141,118.7 138.1,121.5 138.1,121.5 124,135.6    124,135.6 118.7,141 121,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10041_s9xaskocwf"><polygon
                                points="112.8,118.7 112.8,121 112.8,121 118.1,115.6 121,112.8 118.7,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10042_s9xaskocwf"><polygon
                                points="112.8,135.1 118.1,129.7 132.2,115.6 132.2,115.6 135.1,112.8 132.8,112.8 124,121.5 124,121.5    112.8,132.8 112.8,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10043_s9xaskocwf"><polygon
                                points="141,135.1 141,132.8 141,132.8 138.1,135.6 138.1,135.6 132.8,141 135.1,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10044_s9xaskocwf"><polygon
                                points="132.2,157.9 132.2,157.9 141,149.1 141,146.9 141,146.9 138.1,149.7 138.1,149.7 124,163.8    124,163.8 118.7,169.1 121,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10045_s9xaskocwf"><polygon
                                points="112.8,149.1 118.1,143.8 121,141 118.7,141 112.8,146.9 112.8,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10046_s9xaskocwf"><polygon
                                points="112.8,163.2 118.1,157.9 132.2,143.8 132.2,143.8 135.1,141 132.8,141 124,149.7 124,149.7    112.8,160.9 112.8,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10047_s9xaskocwf"><polygon
                                points="141,163.2 141,160.9 141,160.9 138.1,163.8 138.1,163.8 132.8,169.1 135.1,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10048_s9xaskocwf"><polygon
                                points="132.2,186.1 132.2,186.1 141,177.3 141,175 141,175 138.1,177.9 138.1,177.9 124,192 124,192    118.7,197.3 121,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10049_s9xaskocwf"><polygon
                                points="112.8,177.3 118.1,172 121,169.1 118.7,169.1 112.8,175 112.8,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10050_s9xaskocwf"><polygon
                                points="112.8,191.4 118.1,186.1 132.2,172 132.2,172 135.1,169.1 132.8,169.1 124,177.9 124,177.9    112.8,189.1 112.8,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10051_s9xaskocwf"><polygon
                                points="141,191.4 141,189.1 141,189.1 138.1,192 138.1,192 132.8,197.3 135.1,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10052_s9xaskocwf"><polygon
                                points="141,203.2 138.1,206.1 138.1,206.1 124,220.2 124,220.2 118.7,225.5 121,225.5 132.2,214.3    132.2,214.3 141,205.5 141,203.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10053_s9xaskocwf"><polygon
                                points="112.8,205.5 118.1,200.2 121,197.3 118.7,197.3 112.8,203.2 112.8,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10054_s9xaskocwf"><polygon
                                points="112.8,219.6 118.1,214.3 132.2,200.2 132.2,200.2 135.1,197.3 132.8,197.3 124,206.1 124,206.1    112.8,217.3 112.8,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10055_s9xaskocwf"><polygon
                                points="141,217.3 138.1,220.2 138.1,220.2 132.8,225.5 135.1,225.5 141,219.6 141,217.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10056_s9xaskocwf"><polygon
                                points="141,231.4 138.1,234.3 138.1,234.3 124,248.4 124,248.4 118.7,253.7 121,253.7 132.2,242.5    132.2,242.5 141,233.7 141,231.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10057_s9xaskocwf"><polygon
                                points="112.8,231.4 112.8,233.7 112.8,233.7 118.1,228.4 121,225.5 118.7,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10058_s9xaskocwf"><polygon
                                points="124,234.3 124,234.3 112.8,245.5 112.8,247.8 112.8,247.8 118.1,242.5 132.2,228.4 132.2,228.4    135.1,225.5 132.8,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10059_s9xaskocwf"><polygon
                                points="141,247.8 141,245.5 141,245.5 138.1,248.4 138.1,248.4 132.8,253.7 135.1,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10060_s9xaskocwf"><polygon
                                points="132.2,270.6 132.2,270.6 141,261.9 141,259.6 141,259.6 138.1,262.5 138.1,262.5 124,276.5    124,276.5 118.7,281.9 121,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10061_s9xaskocwf"><polygon
                                points="112.8,259.6 112.8,261.9 112.8,261.9 118.1,256.6 121,253.7 118.7,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10062_s9xaskocwf"><polygon
                                points="112.8,276 118.1,270.6 132.2,256.6 132.2,256.6 135.1,253.7 132.8,253.7 124,262.5 124,262.5    112.8,273.7 112.8,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10063_s9xaskocwf"><polygon
                                points="141,273.7 138.1,276.5 138.1,276.5 132.8,281.9 135.1,281.9 141,276 141,273.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10064_s9xaskocwf"><polygon
                                points="132.2,298.8 132.2,298.8 141,290.1 141,287.8 141,287.8 138.1,290.6 138.1,290.6 124,304.7    124,304.7 118.7,310.1 121,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10065_s9xaskocwf"><polygon
                                points="112.8,290.1 118.1,284.7 121,281.9 118.7,281.9 112.8,287.8 112.8,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10066_s9xaskocwf"><polygon
                                points="124,290.6 124,290.6 112.8,301.9 112.8,304.2 112.8,304.2 118.1,298.8 132.2,284.7 132.2,284.7    135.1,281.9 132.8,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10067_s9xaskocwf"><polygon
                                points="141,301.9 138.1,304.7 138.1,304.7 132.8,310.1 135.1,310.1 141,304.2 141,301.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10068_s9xaskocwf"><polygon
                                points="132.2,327 132.2,327 141,318.3 141,316 141,316 138.1,318.8 138.1,318.8 124,332.9 124,332.9    118.7,338.3 121,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10069_s9xaskocwf"><polygon
                                points="112.8,318.3 118.1,312.9 121,310.1 118.7,310.1 112.8,316 112.8,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10070_s9xaskocwf"><polygon
                                points="124,318.8 124,318.8 112.8,330.1 112.8,332.4 112.8,332.4 118.1,327 132.2,312.9 132.2,312.9    135.1,310.1 132.8,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10071_s9xaskocwf"><polygon
                                points="141,330.1 138.1,332.9 138.1,332.9 132.8,338.3 135.1,338.3 141,332.4 141,330.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10072_s9xaskocwf"><polygon
                                points="132.2,355.2 132.2,355.2 141,346.5 141,344.2 141,344.2 138.1,347 138.1,347 124,361.1 124,361.1    118.7,366.5 121,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10073_s9xaskocwf"><polygon
                                points="112.8,346.5 118.1,341.1 121,338.3 118.7,338.3 112.8,344.2 112.8,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10074_s9xaskocwf"><polygon
                                points="124,347 124,347 112.8,358.3 112.8,360.6 112.8,360.6 118.1,355.2 132.2,341.1 132.2,341.1    135.1,338.3 132.8,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10075_s9xaskocwf"><polygon
                                points="141,360.6 141,358.3 141,358.3 138.1,361.1 138.1,361.1 132.8,366.5 135.1,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10076_s9xaskocwf"><polygon
                                points="132.2,383.4 132.2,383.4 141,374.7 141,372.4 141,372.4 138.1,375.2 138.1,375.2 124,389.3    124,389.3 118.7,394.7 121,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10077_s9xaskocwf"><polygon
                                points="112.8,374.7 118.1,369.3 121,366.5 118.7,366.5 112.8,372.4 112.8,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10078_s9xaskocwf"><polygon
                                points="112.8,388.8 118.1,383.4 132.2,369.3 132.2,369.3 135.1,366.5 132.8,366.5 124,375.2 124,375.2    112.8,386.5 112.8,388.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10079_s9xaskocwf"><polygon
                                points="141,386.5 138.1,389.3 138.1,389.3 132.8,394.7 135.1,394.7 141,388.8 141,386.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10080_s9xaskocwf"><polygon
                                points="141,400.6 138.1,403.4 138.1,403.4 124,417.5 124,417.5 118.7,422.9 121,422.9 132.2,411.6    132.2,411.6 141,402.9 141,400.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10081_s9xaskocwf"><polygon
                                points="112.8,402.9 118.1,397.5 121,394.7 118.7,394.7 112.8,400.6 112.8,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10082_s9xaskocwf"><polygon
                                points="124,403.4 124,403.4 112.8,414.7 112.8,417 112.8,417 118.1,411.6 132.2,397.5 132.2,397.5    135.1,394.7 132.8,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10083_s9xaskocwf"><polygon
                                points="141,417 141,414.7 141,414.7 138.1,417.5 138.1,417.5 132.8,422.9 135.1,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10084_s9xaskocwf"><polygon
                                points="132.2,439.8 132.2,439.8 141,431.1 141,428.8 141,428.8 138.1,431.6 138.1,431.6 124,445.7    124,445.7 118.7,451 121,451  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10085_s9xaskocwf"><polygon
                                points="112.8,428.8 112.8,431.1 112.8,431.1 118.1,425.7 121,422.9 118.7,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10086_s9xaskocwf"><polygon
                                points="112.8,445.1 118.1,439.8 132.2,425.7 132.2,425.7 135.1,422.9 132.8,422.9 124,431.6 124,431.6    112.8,442.9 112.8,445.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10087_s9xaskocwf"><polygon
                                points="141,442.9 138.1,445.7 138.1,445.7 132.8,451 135.1,451 141,445.1 141,442.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10088_s9xaskocwf"><path
                                d="M141,456.9L141,456.9l-2.8,2.8l0,0l-6.5,6.5c0.5,0.3,1,0.5,1.5,0.8l7.8-7.8V456.9z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10089_s9xaskocwf"><path
                                d="M121,451h-2.3l-4.8,4.8c0.5,0.3,0.9,0.6,1.4,0.9l2.9-2.9L121,451z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10090_s9xaskocwf"><path
                                d="M124,459.8L124,459.8l-1.4,1.4c0.5,0.3,1,0.6,1.4,0.9l8.2-8.2h0l2.8-2.8h-2.3L124,459.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10091_s9xaskocwf"><path
                                d="M101.5,47.7c-3.4,2.5-6.8,5.1-10,7.7l-1,1h2.3L101.5,47.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10092_s9xaskocwf"><polygon
                                points="112.8,48.2 109.9,51 109.9,51 104.6,56.4 106.9,56.4 112.8,50.5 112.8,48.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10093_s9xaskocwf"><polygon
                                points="112.8,62.3 109.9,65.1 109.9,65.1 95.8,79.2 95.8,79.2 90.5,84.6 92.8,84.6 104,73.3 104,73.3    112.8,64.6 112.8,62.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10094_s9xaskocwf"><polygon
                                points="89.9,59.2 92.8,56.4 90.5,56.4 84.6,62.3 84.6,64.6 84.6,64.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10095_s9xaskocwf"><polygon
                                points="95.8,65.1 95.8,65.1 84.6,76.4 84.6,78.7 84.6,78.7 89.9,73.3 104,59.2 104,59.2 106.9,56.4    104.6,56.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10096_s9xaskocwf"><polygon
                                points="112.8,78.7 112.8,76.4 112.8,76.4 109.9,79.2 109.9,79.2 104.6,84.6 106.9,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10097_s9xaskocwf"><polygon
                                points="104,101.5 104,101.5 112.8,92.8 112.8,90.5 112.8,90.5 109.9,93.3 109.9,93.3 95.8,107.4    95.8,107.4 90.5,112.8 92.8,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10098_s9xaskocwf"><polygon
                                points="84.6,90.5 84.6,92.8 84.6,92.8 89.9,87.4 92.8,84.6 90.5,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10099_s9xaskocwf"><polygon
                                points="84.6,106.9 89.9,101.5 104,87.4 104,87.4 106.9,84.6 104.6,84.6 95.8,93.3 95.8,93.3 84.6,104.6    84.6,106.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10100_s9xaskocwf"><polygon
                                points="112.8,106.9 112.8,104.6 112.8,104.6 109.9,107.4 109.9,107.4 104.6,112.8 106.9,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10101_s9xaskocwf"><polygon
                                points="112.8,118.7 109.9,121.5 109.9,121.5 95.8,135.6 95.8,135.6 90.5,141 92.8,141 104,129.7    104,129.7 112.8,121 112.8,118.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10102_s9xaskocwf"><polygon
                                points="84.6,121 89.9,115.6 92.8,112.8 90.5,112.8 84.6,118.7 84.6,121  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10103_s9xaskocwf"><polygon
                                points="84.6,135.1 89.9,129.7 104,115.6 104,115.6 106.9,112.8 104.6,112.8 95.8,121.5 95.8,121.5    84.6,132.8 84.6,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10104_s9xaskocwf"><polygon
                                points="112.8,135.1 112.8,132.8 112.8,132.8 109.9,135.6 109.9,135.6 104.6,141 106.9,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10105_s9xaskocwf"><polygon
                                points="104,157.9 104,157.9 112.8,149.1 112.8,146.9 112.8,146.9 109.9,149.7 109.9,149.7 95.8,163.8    95.8,163.8 90.5,169.1 92.8,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10106_s9xaskocwf"><polygon
                                points="84.6,146.9 84.6,149.1 84.6,149.1 89.9,143.8 92.8,141 90.5,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10107_s9xaskocwf"><polygon
                                points="84.6,163.2 89.9,157.9 104,143.8 104,143.8 106.9,141 104.6,141 95.8,149.7 95.8,149.7 84.6,160.9    84.6,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10108_s9xaskocwf"><polygon
                                points="112.8,163.2 112.8,160.9 112.8,160.9 109.9,163.8 109.9,163.8 104.6,169.1 106.9,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10109_s9xaskocwf"><polygon
                                points="104,186.1 104,186.1 112.8,177.3 112.8,175 112.8,175 109.9,177.9 109.9,177.9 95.8,192 95.8,192    90.5,197.3 92.8,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10110_s9xaskocwf"><polygon
                                points="84.6,177.3 89.9,172 92.8,169.1 90.5,169.1 84.6,175 84.6,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10111_s9xaskocwf"><polygon
                                points="84.6,191.4 89.9,186.1 104,172 104,172 106.9,169.1 104.6,169.1 95.8,177.9 95.8,177.9 84.6,189.1    84.6,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10112_s9xaskocwf"><polygon
                                points="112.8,191.4 112.8,189.1 112.8,189.1 109.9,192 109.9,192 104.6,197.3 106.9,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10113_s9xaskocwf"><polygon
                                points="104,214.3 104,214.3 112.8,205.5 112.8,203.2 112.8,203.2 109.9,206.1 109.9,206.1 95.8,220.2    95.8,220.2 90.5,225.5 92.8,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10114_s9xaskocwf"><polygon
                                points="84.6,205.5 89.9,200.2 92.8,197.3 90.5,197.3 84.6,203.2 84.6,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10115_s9xaskocwf"><polygon
                                points="84.6,219.6 89.9,214.3 104,200.2 104,200.2 106.9,197.3 104.6,197.3 95.8,206.1 95.8,206.1    84.6,217.3 84.6,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10116_s9xaskocwf"><polygon
                                points="112.8,219.6 112.8,217.3 112.8,217.3 109.9,220.2 109.9,220.2 104.6,225.5 106.9,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10117_s9xaskocwf"><polygon
                                points="112.8,231.4 109.9,234.3 109.9,234.3 95.8,248.4 95.8,248.4 90.5,253.7 92.8,253.7 104,242.5    104,242.5 112.8,233.7 112.8,231.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10118_s9xaskocwf"><polygon
                                points="84.6,233.7 89.9,228.4 92.8,225.5 90.5,225.5 84.6,231.4 84.6,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10119_s9xaskocwf"><polygon
                                points="84.6,247.8 89.9,242.5 104,228.4 104,228.4 106.9,225.5 104.6,225.5 95.8,234.3 95.8,234.3    84.6,245.5 84.6,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10120_s9xaskocwf"><polygon
                                points="112.8,245.5 109.9,248.4 109.9,248.4 104.6,253.7 106.9,253.7 112.8,247.8 112.8,245.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10121_s9xaskocwf"><polygon
                                points="112.8,259.6 109.9,262.5 109.9,262.5 95.8,276.5 95.8,276.5 90.5,281.9 92.8,281.9 104,270.6    104,270.6 112.8,261.9 112.8,259.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10122_s9xaskocwf"><polygon
                                points="84.6,259.6 84.6,261.9 84.6,261.9 89.9,256.6 92.8,253.7 90.5,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10123_s9xaskocwf"><polygon
                                points="95.8,262.5 95.8,262.5 84.6,273.7 84.6,276 84.6,276 89.9,270.6 104,256.6 104,256.6 106.9,253.7    104.6,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10124_s9xaskocwf"><polygon
                                points="112.8,276 112.8,273.7 112.8,273.7 109.9,276.5 109.9,276.5 104.6,281.9 106.9,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10125_s9xaskocwf"><polygon
                                points="104,298.8 104,298.8 112.8,290.1 112.8,287.8 112.8,287.8 109.9,290.6 109.9,290.6 95.8,304.7    95.8,304.7 90.5,310.1 92.8,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10126_s9xaskocwf"><polygon
                                points="84.6,287.8 84.6,290.1 84.6,290.1 89.9,284.7 92.8,281.9 90.5,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10127_s9xaskocwf"><polygon
                                points="84.6,304.2 89.9,298.8 104,284.7 104,284.7 106.9,281.9 104.6,281.9 95.8,290.6 95.8,290.6    84.6,301.9 84.6,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10128_s9xaskocwf"><polygon
                                points="112.8,301.9 109.9,304.7 109.9,304.7 104.6,310.1 106.9,310.1 112.8,304.2 112.8,301.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10129_s9xaskocwf"><polygon
                                points="104,327 104,327 112.8,318.3 112.8,316 112.8,316 109.9,318.8 109.9,318.8 95.8,332.9 95.8,332.9    90.5,338.3 92.8,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10130_s9xaskocwf"><polygon
                                points="84.6,318.3 89.9,312.9 92.8,310.1 90.5,310.1 84.6,316 84.6,318.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10131_s9xaskocwf"><polygon
                                points="95.8,318.8 95.8,318.8 84.6,330.1 84.6,332.4 84.6,332.4 89.9,327 104,312.9 104,312.9    106.9,310.1 104.6,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10132_s9xaskocwf"><polygon
                                points="112.8,330.1 109.9,332.9 109.9,332.9 104.6,338.3 106.9,338.3 112.8,332.4 112.8,330.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10133_s9xaskocwf"><polygon
                                points="104,355.2 104,355.2 112.8,346.5 112.8,344.2 112.8,344.2 109.9,347 109.9,347 95.8,361.1    95.8,361.1 90.5,366.5 92.8,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10134_s9xaskocwf"><polygon
                                points="84.6,346.5 89.9,341.1 92.8,338.3 90.5,338.3 84.6,344.2 84.6,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10135_s9xaskocwf"><polygon
                                points="95.8,347 95.8,347 84.6,358.3 84.6,360.6 84.6,360.6 89.9,355.2 104,341.1 104,341.1 106.9,338.3    104.6,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10136_s9xaskocwf"><polygon
                                points="112.8,358.3 109.9,361.1 109.9,361.1 104.6,366.5 106.9,366.5 112.8,360.6 112.8,358.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10137_s9xaskocwf"><polygon
                                points="104,383.4 104,383.4 112.8,374.7 112.8,372.4 112.8,372.4 109.9,375.2 109.9,375.2 95.8,389.3    95.8,389.3 90.5,394.7 92.8,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10138_s9xaskocwf"><polygon
                                points="84.6,374.7 89.9,369.3 92.8,366.5 90.5,366.5 84.6,372.4 84.6,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10139_s9xaskocwf"><polygon
                                points="95.8,375.2 95.8,375.2 84.6,386.5 84.6,388.8 84.6,388.8 89.9,383.4 104,369.3 104,369.3    106.9,366.5 104.6,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10140_s9xaskocwf"><polygon
                                points="112.8,388.8 112.8,386.5 112.8,386.5 109.9,389.3 109.9,389.3 104.6,394.7 106.9,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10141_s9xaskocwf"><polygon
                                points="104,411.6 104,411.6 112.8,402.9 112.8,400.6 112.8,400.6 109.9,403.4 109.9,403.4 95.8,417.5    95.8,417.5 90.5,422.9 92.8,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10142_s9xaskocwf"><polygon
                                points="84.6,402.9 89.9,397.5 92.8,394.7 90.5,394.7 84.6,400.6 84.6,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10143_s9xaskocwf"><polygon
                                points="84.6,417 89.9,411.6 104,397.5 104,397.5 106.9,394.7 104.6,394.7 95.8,403.4 95.8,403.4    84.6,414.7 84.6,417  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10144_s9xaskocwf"><polygon
                                points="112.8,414.7 109.9,417.5 109.9,417.5 104.6,422.9 106.9,422.9 112.8,417 112.8,414.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10145_s9xaskocwf"><path
                                d="M112.8,428.8l-2.8,2.8l0,0l-12.6,12.6c0.4,0.3,0.9,0.7,1.3,1l5.4-5.4h0l8.7-8.7V428.8L112.8,428.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10146_s9xaskocwf"><polygon
                                points="84.6,431.1 89.9,425.7 92.8,422.9 90.5,422.9 84.6,428.8 84.6,431.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10147_s9xaskocwf"><path
                                d="M95.8,431.6L95.8,431.6l-6.4,6.4c0.4,0.3,0.8,0.7,1.3,1l13.3-13.3h0l2.8-2.8h-2.3L95.8,431.6z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10148_s9xaskocwf"><path
                                d="M112.8,445.1v-2.3v0l-2.8,2.8l0,0l-4.5,4.5c0.4,0.3,0.8,0.6,1.3,0.9h0.2L112.8,445.1z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10149_s9xaskocwf"><path
                                d="M106.7,451c0,0,0.1,0,0.1,0.1l0.1-0.1H106.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10150_s9xaskocwf"><polygon
                                points="84.6,62.3 81.7,65.1 81.7,65.1 67.6,79.2 67.6,79.2 62.3,84.6 64.6,84.6 75.8,73.3 75.8,73.3    84.6,64.6 84.6,62.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10151_s9xaskocwf"><polygon
                                points="84.6,76.4 81.7,79.2 81.7,79.2 76.4,84.6 78.7,84.6 84.6,78.7 84.6,76.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10152_s9xaskocwf"><polygon
                                points="84.6,90.5 81.7,93.3 81.7,93.3 67.6,107.4 67.6,107.4 62.3,112.8 64.6,112.8 75.8,101.5    75.8,101.5 84.6,92.8 84.6,90.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10153_s9xaskocwf"><polygon
                                points="56.4,90.5 56.4,92.8 56.4,92.8 61.7,87.4 64.6,84.6 62.3,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10154_s9xaskocwf"><polygon
                                points="67.6,93.3 67.6,93.3 56.4,104.6 56.4,106.9 56.4,106.9 61.7,101.5 75.8,87.4 75.8,87.4 78.7,84.6    76.4,84.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10155_s9xaskocwf"><polygon
                                points="84.6,106.9 84.6,104.6 84.6,104.6 81.7,107.4 81.7,107.4 76.4,112.8 78.7,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10156_s9xaskocwf"><polygon
                                points="75.8,129.7 75.8,129.7 84.6,121 84.6,118.7 84.6,118.7 81.7,121.5 81.7,121.5 67.6,135.6    67.6,135.6 62.3,141 64.6,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10157_s9xaskocwf"><polygon
                                points="56.4,118.7 56.4,121 56.4,121 61.7,115.6 64.6,112.8 62.3,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10158_s9xaskocwf"><polygon
                                points="56.4,135.1 61.7,129.7 75.8,115.6 75.8,115.6 78.7,112.8 76.4,112.8 67.6,121.5 67.6,121.5    56.4,132.8 56.4,135.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10159_s9xaskocwf"><polygon
                                points="84.6,135.1 84.6,132.8 84.6,132.8 81.7,135.6 81.7,135.6 76.4,141 78.7,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10160_s9xaskocwf"><polygon
                                points="84.6,146.9 81.7,149.7 81.7,149.7 67.6,163.8 67.6,163.8 62.3,169.1 64.6,169.1 75.8,157.9    75.8,157.9 84.6,149.1 84.6,146.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10161_s9xaskocwf"><polygon
                                points="56.4,149.1 61.7,143.8 64.6,141 62.3,141 56.4,146.9 56.4,149.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10162_s9xaskocwf"><polygon
                                points="56.4,163.2 61.7,157.9 75.8,143.8 75.8,143.8 78.7,141 76.4,141 67.6,149.7 67.6,149.7 56.4,160.9    56.4,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10163_s9xaskocwf"><polygon
                                points="84.6,163.2 84.6,160.9 84.6,160.9 81.7,163.8 81.7,163.8 76.4,169.1 78.7,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10164_s9xaskocwf"><polygon
                                points="75.8,186.1 75.8,186.1 84.6,177.3 84.6,175 84.6,175 81.7,177.9 81.7,177.9 67.6,192 67.6,192    62.3,197.3 64.6,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10165_s9xaskocwf"><polygon
                                points="56.4,175 56.4,177.3 56.4,177.3 61.7,172 64.6,169.1 62.3,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10166_s9xaskocwf"><polygon
                                points="56.4,191.4 61.7,186.1 75.8,172 75.8,172 78.7,169.1 76.4,169.1 67.6,177.9 67.6,177.9 56.4,189.1    56.4,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10167_s9xaskocwf"><polygon
                                points="84.6,191.4 84.6,189.1 84.6,189.1 81.7,192 81.7,192 76.4,197.3 78.7,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10168_s9xaskocwf"><polygon
                                points="75.8,214.3 75.8,214.3 84.6,205.5 84.6,203.2 84.6,203.2 81.7,206.1 81.7,206.1 67.6,220.2    67.6,220.2 62.3,225.5 64.6,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10169_s9xaskocwf"><polygon
                                points="56.4,205.5 61.7,200.2 64.6,197.3 62.3,197.3 56.4,203.2 56.4,205.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10170_s9xaskocwf"><polygon
                                points="56.4,219.6 61.7,214.3 75.8,200.2 75.8,200.2 78.7,197.3 76.4,197.3 67.6,206.1 67.6,206.1    56.4,217.3 56.4,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10171_s9xaskocwf"><polygon
                                points="84.6,219.6 84.6,217.3 84.6,217.3 81.7,220.2 81.7,220.2 76.4,225.5 78.7,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10172_s9xaskocwf"><polygon
                                points="75.8,242.5 75.8,242.5 84.6,233.7 84.6,231.4 84.6,231.4 81.7,234.3 81.7,234.3 67.6,248.4    67.6,248.4 62.3,253.7 64.6,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10173_s9xaskocwf"><polygon
                                points="56.4,233.7 61.7,228.4 64.6,225.5 62.3,225.5 56.4,231.4 56.4,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10174_s9xaskocwf"><polygon
                                points="56.4,247.8 61.7,242.5 75.8,228.4 75.8,228.4 78.7,225.5 76.4,225.5 67.6,234.3 67.6,234.3    56.4,245.5 56.4,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10175_s9xaskocwf"><polygon
                                points="84.6,247.8 84.6,245.5 84.6,245.5 81.7,248.4 81.7,248.4 76.4,253.7 78.7,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10176_s9xaskocwf"><polygon
                                points="84.6,259.6 81.7,262.5 81.7,262.5 67.6,276.5 67.6,276.5 62.3,281.9 64.6,281.9 75.8,270.6    75.8,270.6 84.6,261.9 84.6,259.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10177_s9xaskocwf"><polygon
                                points="56.4,261.9 61.7,256.6 64.6,253.7 62.3,253.7 56.4,259.6 56.4,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10178_s9xaskocwf"><polygon
                                points="56.4,276 61.7,270.6 75.8,256.6 75.8,256.6 78.7,253.7 76.4,253.7 67.6,262.5 67.6,262.5    56.4,273.7 56.4,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10179_s9xaskocwf"><polygon
                                points="84.6,273.7 81.7,276.5 81.7,276.5 76.4,281.9 78.7,281.9 84.6,276 84.6,273.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10180_s9xaskocwf"><polygon
                                points="84.6,287.8 81.7,290.6 81.7,290.6 67.6,304.7 67.6,304.7 62.3,310.1 64.6,310.1 75.8,298.8    75.8,298.8 84.6,290.1 84.6,287.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10181_s9xaskocwf"><polygon
                                points="56.4,287.8 56.4,290.1 56.4,290.1 61.7,284.7 64.6,281.9 62.3,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10182_s9xaskocwf"><polygon
                                points="67.6,290.6 67.6,290.6 56.4,301.9 56.4,304.2 56.4,304.2 61.7,298.8 75.8,284.7 75.8,284.7    78.7,281.9 76.4,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10183_s9xaskocwf"><polygon
                                points="84.6,304.2 84.6,301.9 84.6,301.9 81.7,304.7 81.7,304.7 76.4,310.1 78.7,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10184_s9xaskocwf"><polygon
                                points="75.8,327 75.8,327 84.6,318.3 84.6,316 84.6,316 81.7,318.8 81.7,318.8 67.6,332.9 67.6,332.9    62.3,338.3 64.6,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10185_s9xaskocwf"><polygon
                                points="56.4,316 56.4,318.3 56.4,318.3 61.7,312.9 64.6,310.1 62.3,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10186_s9xaskocwf"><polygon
                                points="56.4,332.4 61.7,327 75.8,312.9 75.8,312.9 78.7,310.1 76.4,310.1 67.6,318.8 67.6,318.8    56.4,330.1 56.4,332.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10187_s9xaskocwf"><polygon
                                points="84.6,330.1 81.7,332.9 81.7,332.9 76.4,338.3 78.7,338.3 84.6,332.4 84.6,330.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10188_s9xaskocwf"><polygon
                                points="75.8,355.2 75.8,355.2 84.6,346.5 84.6,344.2 84.6,344.2 81.7,347 81.7,347 67.6,361.1 67.6,361.1    62.3,366.5 64.6,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10189_s9xaskocwf"><polygon
                                points="56.4,346.5 61.7,341.1 64.6,338.3 62.3,338.3 56.4,344.2 56.4,346.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10190_s9xaskocwf"><polygon
                                points="67.6,347 67.6,347 56.4,358.3 56.4,360.6 56.4,360.6 61.7,355.2 75.8,341.1 75.8,341.1 78.7,338.3    76.4,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10191_s9xaskocwf"><polygon
                                points="84.6,358.3 81.7,361.1 81.7,361.1 76.4,366.5 78.7,366.5 84.6,360.6 84.6,358.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10192_s9xaskocwf"><polygon
                                points="75.8,383.4 75.8,383.4 84.6,374.7 84.6,372.4 84.6,372.4 81.7,375.2 81.7,375.2 67.6,389.3    67.6,389.3 62.3,394.7 64.6,394.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10193_s9xaskocwf"><polygon
                                points="56.4,374.7 61.7,369.3 64.6,366.5 62.3,366.5 56.4,372.4 56.4,374.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10194_s9xaskocwf"><polygon
                                points="67.6,375.2 67.6,375.2 56.4,386.5 56.4,388.8 56.4,388.8 61.7,383.4 75.8,369.3 75.8,369.3    78.7,366.5 76.4,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10195_s9xaskocwf"><polygon
                                points="84.6,386.5 81.7,389.3 81.7,389.3 76.4,394.7 78.7,394.7 84.6,388.8 84.6,386.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10196_s9xaskocwf"><path
                                d="M68.8,418.7l7.1-7.1h0l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-14.1,14.1l0,0l0,0C68,417.9,68.4,418.3,68.8,418.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10197_s9xaskocwf"><polygon
                                points="56.4,402.9 61.7,397.5 64.6,394.7 62.3,394.7 56.4,400.6 56.4,402.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10198_s9xaskocwf"><path
                                d="M67.6,403.4L67.6,403.4l-6.7,6.7c0.4,0.4,0.7,0.8,1.1,1.2l13.8-13.8h0l2.8-2.8h-2.3L67.6,403.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10199_s9xaskocwf"><polygon
                                points="84.6,417 84.6,414.7 84.6,414.7 81.7,417.5 81.7,417.5 76.4,422.9 78.7,422.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10200_s9xaskocwf"><path
                                d="M84.6,428.8L84.6,428.8l-2.7,2.7c0.4,0.4,0.8,0.7,1.2,1.1l1.5-1.5V428.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10201_s9xaskocwf"><path
                                d="M75.8,425.7l2.8-2.8h-2.3l-1.7,1.7C75,425,75.4,425.4,75.8,425.7L75.8,425.7L75.8,425.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10202_s9xaskocwf"><path
                                d="M56.4,90.5l-1,1c-2.7,3.3-5.2,6.6-7.7,10l8.7-8.7V90.5L56.4,90.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10203_s9xaskocwf"><polygon
                                points="56.4,104.6 53.5,107.4 53.5,107.4 48.2,112.8 50.5,112.8 56.4,106.9 56.4,104.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10204_s9xaskocwf"><polygon
                                points="56.4,118.7 53.5,121.5 53.5,121.5 39.4,135.6 39.4,135.6 34.1,141 36.4,141 47.6,129.7 47.6,129.7    56.4,121 56.4,118.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10205_s9xaskocwf"><polygon
                                points="39.4,121.5 39.4,121.5 28.2,132.8 28.2,135.1 28.2,135.1 33.5,129.7 47.6,115.6 47.6,115.6    50.5,112.8 48.2,112.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10206_s9xaskocwf"><polygon
                                points="56.4,135.1 56.4,132.8 56.4,132.8 53.5,135.6 53.5,135.6 48.2,141 50.5,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10207_s9xaskocwf"><polygon
                                points="47.6,157.9 47.6,157.9 56.4,149.1 56.4,146.9 56.4,146.9 53.5,149.7 53.5,149.7 39.4,163.8    39.4,163.8 34.1,169.1 36.4,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10208_s9xaskocwf"><polygon
                                points="28.2,146.9 28.2,149.1 28.2,149.1 33.5,143.8 36.4,141 34.1,141  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10209_s9xaskocwf"><polygon
                                points="28.2,163.2 33.5,157.9 47.6,143.8 47.6,143.8 50.5,141 48.2,141 39.4,149.7 39.4,149.7 28.2,160.9    28.2,163.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10210_s9xaskocwf"><polygon
                                points="56.4,163.2 56.4,160.9 56.4,160.9 53.5,163.8 53.5,163.8 48.2,169.1 50.5,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10211_s9xaskocwf"><polygon
                                points="56.4,175 53.5,177.9 53.5,177.9 39.4,192 39.4,192 34.1,197.3 36.4,197.3 47.6,186.1 47.6,186.1    56.4,177.3 56.4,175  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10212_s9xaskocwf"><polygon
                                points="28.2,177.3 33.5,172 36.4,169.1 34.1,169.1 28.2,175 28.2,177.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10213_s9xaskocwf"><polygon
                                points="28.2,191.4 33.5,186.1 47.6,172 47.6,172 50.5,169.1 48.2,169.1 39.4,177.9 39.4,177.9 28.2,189.1    28.2,191.4  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10214_s9xaskocwf"><polygon
                                points="56.4,191.4 56.4,189.1 56.4,189.1 53.5,192 53.5,192 48.2,197.3 50.5,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10215_s9xaskocwf"><polygon
                                points="47.6,214.3 47.6,214.3 56.4,205.5 56.4,203.2 56.4,203.2 53.5,206.1 53.5,206.1 39.4,220.2    39.4,220.2 34.1,225.5 36.4,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10216_s9xaskocwf"><polygon
                                points="28.2,203.2 28.2,205.5 28.2,205.5 33.5,200.2 36.4,197.3 34.1,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10217_s9xaskocwf"><polygon
                                points="28.2,219.6 33.5,214.3 47.6,200.2 47.6,200.2 50.5,197.3 48.2,197.3 39.4,206.1 39.4,206.1    28.2,217.3 28.2,219.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10218_s9xaskocwf"><polygon
                                points="56.4,219.6 56.4,217.3 56.4,217.3 53.5,220.2 53.5,220.2 48.2,225.5 50.5,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10219_s9xaskocwf"><polygon
                                points="47.6,242.5 47.6,242.5 56.4,233.7 56.4,231.4 56.4,231.4 53.5,234.3 53.5,234.3 39.4,248.4    39.4,248.4 34.1,253.7 36.4,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10220_s9xaskocwf"><polygon
                                points="28.2,233.7 33.5,228.4 36.4,225.5 34.1,225.5 28.2,231.4 28.2,233.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10221_s9xaskocwf"><polygon
                                points="28.2,247.8 33.5,242.5 47.6,228.4 47.6,228.4 50.5,225.5 48.2,225.5 39.4,234.3 39.4,234.3    28.2,245.5 28.2,247.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10222_s9xaskocwf"><polygon
                                points="56.4,247.8 56.4,245.5 56.4,245.5 53.5,248.4 53.5,248.4 48.2,253.7 50.5,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10223_s9xaskocwf"><polygon
                                points="47.6,270.6 47.6,270.6 56.4,261.9 56.4,259.6 56.4,259.6 53.5,262.5 53.5,262.5 39.4,276.5    39.4,276.5 34.1,281.9 36.4,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10224_s9xaskocwf"><polygon
                                points="28.2,261.9 33.5,256.6 36.4,253.7 34.1,253.7 28.2,259.6 28.2,261.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10225_s9xaskocwf"><polygon
                                points="28.2,276 33.5,270.6 47.6,256.6 47.6,256.6 50.5,253.7 48.2,253.7 39.4,262.5 39.4,262.5    28.2,273.7 28.2,276  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10226_s9xaskocwf"><polygon
                                points="56.4,276 56.4,273.7 56.4,273.7 53.5,276.5 53.5,276.5 48.2,281.9 50.5,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10227_s9xaskocwf"><polygon
                                points="56.4,287.8 53.5,290.6 53.5,290.6 39.4,304.7 39.4,304.7 34.1,310.1 36.4,310.1 47.6,298.8    47.6,298.8 56.4,290.1 56.4,287.8  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10228_s9xaskocwf"><polygon
                                points="28.2,290.1 33.5,284.7 36.4,281.9 34.1,281.9 28.2,287.8 28.2,290.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10229_s9xaskocwf"><polygon
                                points="28.2,304.2 33.5,298.8 47.6,284.7 47.6,284.7 50.5,281.9 48.2,281.9 39.4,290.6 39.4,290.6    28.2,301.9 28.2,304.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10230_s9xaskocwf"><polygon
                                points="56.4,301.9 53.5,304.7 53.5,304.7 48.2,310.1 50.5,310.1 56.4,304.2 56.4,301.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10231_s9xaskocwf"><polygon
                                points="56.4,316 53.5,318.8 53.5,318.8 39.4,332.9 39.4,332.9 34.1,338.3 36.4,338.3 47.6,327 47.6,327    56.4,318.3 56.4,316  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10232_s9xaskocwf"><polygon
                                points="28.2,316 28.2,318.3 28.2,318.3 33.5,312.9 36.4,310.1 34.1,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10233_s9xaskocwf"><polygon
                                points="39.4,318.8 39.4,318.8 28.2,330.1 28.2,332.4 28.2,332.4 33.5,327 47.6,312.9 47.6,312.9    50.5,310.1 48.2,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10234_s9xaskocwf"><polygon
                                points="56.4,332.4 56.4,330.1 56.4,330.1 53.5,332.9 53.5,332.9 48.2,338.3 50.5,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10235_s9xaskocwf"><polygon
                                points="36.4,366.5 47.6,355.2 47.6,355.2 56.4,346.5 56.4,344.2 56.4,344.2 53.5,347 53.5,347 39.4,361.1    39.4,361.1 34.1,366.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10236_s9xaskocwf"><polygon
                                points="28.2,344.2 28.2,346.5 28.2,346.5 33.5,341.1 36.4,338.3 34.1,338.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10237_s9xaskocwf"><polygon
                                points="28.2,360.6 33.5,355.2 47.6,341.1 47.6,341.1 50.5,338.3 48.2,338.3 39.4,347 39.4,347 28.2,358.3    28.2,360.6  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10238_s9xaskocwf"><polygon
                                points="56.4,358.3 53.5,361.1 53.5,361.1 48.2,366.5 50.5,366.5 56.4,360.6 56.4,358.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10239_s9xaskocwf"><path
                                d="M43.5,387.6l4.2-4.2h0l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-11,11C42.8,386.7,43.1,387.1,43.5,387.6z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10240_s9xaskocwf"><path
                                d="M31.7,368.8c0.3,0.5,0.5,1,0.8,1.5l1-1l2.8-2.8h-2.3L31.7,368.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10241_s9xaskocwf"><path
                                d="M39.4,375.2L39.4,375.2l-2.5,2.5c0.3,0.5,0.6,0.9,0.9,1.4l9.8-9.8h0l2.8-2.8h-2.3L39.4,375.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10242_s9xaskocwf"><path
                                d="M56.4,386.5l-2.8,2.8l0,0l-5.2,5.2c0,0.1,0.1,0.1,0.1,0.2h2l5.9-5.9V386.5L56.4,386.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10243_s9xaskocwf"><path
                                d="M54.5,402.4c0.3,0.4,0.7,0.8,1,1.3l0.8-0.8v-2.3v0L54.5,402.4z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10244_s9xaskocwf"><path
                                d="M49.3,395.8l1.1-1.1h-2C48.8,395,49.1,395.4,49.3,395.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10245_s9xaskocwf"><path
                                d="M28.2,132.8L28.2,132.8c-0.9,1.6-1.7,3.2-2.4,4.7l2.4-2.4V132.8L28.2,132.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10246_s9xaskocwf"><path
                                d="M28.2,146.9l-2.8,2.8l0,0l-8.9,8.9c-0.5,1.2-1,2.5-1.4,3.7l4.4-4.4h0l8.7-8.7V146.9L28.2,146.9z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10247_s9xaskocwf"><polygon
                                points="28.2,163.2 28.2,160.9 28.2,160.9 25.4,163.8 25.4,163.8 20,169.1 22.3,169.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10248_s9xaskocwf"><polygon
                                points="19.5,186.1 19.5,186.1 28.2,177.3 28.2,175 28.2,175 25.4,177.9 25.4,177.9 11.3,192 11.3,192    5.9,197.3 8.2,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10249_s9xaskocwf"><path
                                d="M19.5,172l2.8-2.8H20l-8.7,8.7l0,0l-1.9,1.9c-0.3,1-0.6,2.1-0.9,3.1L19.5,172L19.5,172z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10250_s9xaskocwf"><polygon
                                points="28.2,191.4 28.2,189.1 28.2,189.1 25.4,192 25.4,192 20,197.3 22.3,197.3  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10251_s9xaskocwf"><polygon
                                points="28.2,203.2 25.4,206.1 25.4,206.1 11.3,220.2 11.3,220.2 5.9,225.5 8.2,225.5 19.5,214.3    19.5,214.3 28.2,205.5 28.2,203.2  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10252_s9xaskocwf"><path
                                d="M5.4,200.2l2.8-2.8H5.9l-1,1c-0.2,0.9-0.4,1.9-0.5,2.8L5.4,200.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10253_s9xaskocwf"><path
                                d="M5.4,214.3l14.1-14.1h0l2.8-2.8H20l-8.7,8.7l0,0l-9.2,9.2c-0.1,0.9-0.2,1.7-0.3,2.6L5.4,214.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10254_s9xaskocwf"><polygon
                                points="28.2,219.6 28.2,217.3 28.2,217.3 25.4,220.2 25.4,220.2 20,225.5 22.3,225.5  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10255_s9xaskocwf"><polygon
                                points="8.2,253.7 19.5,242.5 19.5,242.5 28.2,233.7 28.2,231.4 28.2,231.4 25.4,234.3 25.4,234.3    11.3,248.4 11.3,248.4 5.9,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10256_s9xaskocwf"><path
                                d="M0.6,230.9c-0.1,0.8-0.1,1.6-0.2,2.4l4.9-4.9l2.8-2.8H5.9L0.6,230.9z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10257_s9xaskocwf"><path
                                d="M5.4,242.5l14.1-14.1h0l2.8-2.8H20l-8.7,8.7l0,0L0,245.5c0,0.7,0,1.3,0,2c0,0.1,0,0.2,0,0.3L5.4,242.5z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10258_s9xaskocwf"><polygon
                                points="28.2,247.8 28.2,245.5 28.2,245.5 25.4,248.4 25.4,248.4 20,253.7 22.3,253.7  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10259_s9xaskocwf"><polygon
                                points="19.5,270.6 19.5,270.6 28.2,261.9 28.2,259.6 28.2,259.6 25.4,262.5 25.4,262.5 11.3,276.5    11.3,276.5 5.9,281.9 8.2,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10260_s9xaskocwf"><path
                                d="M0.3,259.3c0,0.7,0.1,1.5,0.1,2.2l5-5l2.8-2.8H5.9L0.3,259.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10261_s9xaskocwf"><path
                                d="M5.4,270.6l14.1-14.1h0l2.8-2.8H20l-8.7,8.7l0,0l-10,10c0.1,0.7,0.2,1.4,0.2,2.1L5.4,270.6z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10262_s9xaskocwf"><polygon
                                points="28.2,276 28.2,273.7 28.2,273.7 25.4,276.5 25.4,276.5 20,281.9 22.3,281.9  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10263_s9xaskocwf"><path
                                d="M8,310.1h0.2l11.3-11.3h0l8.7-8.7v-2.3v0l-2.8,2.8l0,0l-14.1,14.1l0,0l-3.7,3.7C7.7,309,7.8,309.5,8,310.1z   "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10264_s9xaskocwf"><path
                                d="M5.4,284.7l2.8-2.8H5.9L2.8,285c0.1,0.7,0.2,1.3,0.3,2L5.4,284.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10265_s9xaskocwf"><path
                                d="M5.4,298.8l14.1-14.1h0l2.8-2.8H20l-8.7,8.7l0,0L4.9,297C5.1,297.6,5.2,298.2,5.4,298.8L5.4,298.8z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10266_s9xaskocwf"><polygon
                                points="28.2,304.2 28.2,301.9 28.2,301.9 25.4,304.7 25.4,304.7 20,310.1 22.3,310.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10267_s9xaskocwf"><path
                                d="M28.2,316l-2.8,2.8l0,0l-11.2,11.2c0.2,0.6,0.4,1.1,0.6,1.7l4.7-4.7h0l8.7-8.7V316L28.2,316z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10268_s9xaskocwf"><path
                                d="M8,310.3l0.2-0.2H8C8,310.1,8,310.2,8,310.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10269_s9xaskocwf"><path
                                d="M11.2,321.2l8.3-8.3h0l2.8-2.8H20l-8.7,8.7l0,0l-0.6,0.6C10.8,320,11,320.6,11.2,321.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10270_s9xaskocwf"><polygon
                                points="28.2,330.1 25.4,332.9 25.4,332.9 20,338.3 22.3,338.3 28.2,332.4 28.2,330.1  "
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10271_s9xaskocwf"><path
                                d="M28.2,344.2l-2.8,2.8l0,0l-3.1,3.1c0.2,0.5,0.5,1,0.7,1.6l5.2-5.2V344.2L28.2,344.2z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10272_s9xaskocwf"><path
                                d="M18,340.3c0.2,0.5,0.4,1.1,0.7,1.6l0.8-0.8h0l2.8-2.8H20L18,340.3z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                            <g id="__id10273_s9xaskocwf"><path
                                d="M26.8,359.7c0.3,0.5,0.5,1,0.8,1.5l0.6-0.6v-2.3v0L26.8,359.7z"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} /></g>
                        </g>
                    </svg>
                </div>
            </div>
            <div
                style={{
                    width: '10vw',
                    transform: 'translate(80vw, 80vh) rotate(0deg)',
                    position: 'fixed'
                }}>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1277.915 283.413"
                        enableBackground="new 0 0 1277.915 283.413"
                        xmlSpace="preserve"
                        style={{
                            fill: 'rgb(0, 0, 0)'
                        }}>
                        <g id="__id10276_stqycgvqk3">
                            <path
                                d="M68.157,283.413c-20.409,0-40.574-9.164-53.942-26.549c-22.995-29.75-17.52-72.489,12.281-95.484   L217.035,14.245c24.478-18.969,58.76-18.969,83.237,0L449.15,129.17L597.759,14.245c24.537-18.969,58.76-18.969,83.287,0   L829.688,129.17L978.205,14.245c24.536-18.969,58.793-19.036,83.321,0.05l189.941,147.084   c29.801,23.113,35.217,65.852,12.162,95.602c-23.062,29.666-65.835,35.158-95.576,12.164l-148.188-114.942L871.29,269.146   c-24.536,18.951-58.725,18.951-83.295,0L639.453,154.203L490.811,269.146c-24.537,18.951-58.819,18.9-83.229,0.05L258.637,154.153   L109.699,269.195C97.385,278.765,82.636,283.413,68.157,283.413"
                                style={{
                                    fill: 'rgb(34, 65, 98)'
                                }} />
                        </g>
                    </svg>
                </div>
            </div>
            <div
                style={{
                    width: '10vw',
                    transform: 'translate(80vw, 76vh) rotate(0deg)',
                    position: 'fixed'
                }}>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1277.915 283.413"
                        enableBackground="new 0 0 1277.915 283.413"
                        xmlSpace="preserve"
                        style={{
                            fill: 'rgb(0, 0, 0)'
                        }}>
                        <g id="__id10277_sq4o26lgsim">
                            <path
                                d="M68.157,283.413c-20.409,0-40.574-9.164-53.942-26.549c-22.995-29.75-17.52-72.489,12.281-95.484   L217.035,14.245c24.478-18.969,58.76-18.969,83.237,0L449.15,129.17L597.759,14.245c24.537-18.969,58.76-18.969,83.287,0   L829.688,129.17L978.205,14.245c24.536-18.969,58.793-19.036,83.321,0.05l189.941,147.084   c29.801,23.113,35.217,65.852,12.162,95.602c-23.062,29.666-65.835,35.158-95.576,12.164l-148.188-114.942L871.29,269.146   c-24.536,18.951-58.725,18.951-83.295,0L639.453,154.203L490.811,269.146c-24.537,18.951-58.819,18.9-83.229,0.05L258.637,154.153   L109.699,269.195C97.385,278.765,82.636,283.413,68.157,283.413"
                                style={{
                                    fill: 'rgb(255, 198, 80)'
                                }} />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    )
}
export default App