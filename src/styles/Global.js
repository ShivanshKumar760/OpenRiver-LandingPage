const styles = {
  whiteText: "text-white",
  blackText: "text-tertiary",

  bgWhite: "bg-white",
  bgPrimary: "bg-primary",

  boxClass: "flex flex-row md:flex-col",
  boxReverseClass: "flex flex-row-reverse md:flex-col-reverse",

  textLeft: "text-left",
  textRight: "text-right",

  h1Text:
    "font-bold font-IBMPlex text-4xl sm:text-3xl md:text-4xl lg:text-5xl leading-10 md:leading-12", // Reduced header text size
  pText:
    "my-4 md:my-8 font-IBMPlex font-light text-lg md:text-xl lg:text-2xl md:leading-14", // Reduced paragraph text size
  descriptionText:
    "my-4 md:my-8 font-IBMPlex font-light text-lg md:text-xl lg:text-2xl md:leading-14", // Reduced description text size
  btnText: "text-white font-IBMPlex text-md md:text-lg", // Slightly smaller button text

  btnPrimary:
    "bg-black mt-4 py-3 px-5 text-white text-md md:text-lg font-IBMPlex font-medium rounded-lg hover:shadow-lg", // Slightly smaller button
  btnBlack:
    "bg-black flex items-center py-1.5 px-3 rounded-md mt-2 w-fit cursor-pointer", // Smaller black button

  section: "flex justify-center items-center p-12 sm:p-6", // Reduced padding in sections
  subSection: "flex items-center w-full md:w-2/3", // Smaller subsection width
  descDiv: "flex-1 w-full flex justify-start flex-col md:mb-8", // Reduced margin for description div

  flexCenter: "flex justify-center items-center",
  flexWrap: "flex justify-center flex-wrap",

  fullImg: "w-8/12 h-auto object-cover", // Further reduced image width
  sectionImg: "w-6/12 h-auto md:w-5/12 object-contain", // Further reduced image size in sections
  btnIcon: "w-3 h-3 md:w-5 md:h-5 object-contain", // Reduced icon size

  featureImg: "w-10 h-10 lg:w-20 lg:h-20 object-contain mb-1", // Further reduced feature images
  featureText:
    "font-semibold font-IBMPlex text-base lg:text-xl text-tertiary", // Reduced feature text size
  featureCard:
    "bg-white m-6 p-4 rounded-md flex justify-around items-center flex-col hover:shadow-md cursor-pointer w-28 h-28 lg:w-48 lg:h-48", // Smaller feature cards
};

export default styles;
