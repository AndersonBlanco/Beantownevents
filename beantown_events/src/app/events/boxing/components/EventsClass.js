import GreatLakesImage from "../../../src/boxing/GreatLakes.png";
import InternationalAmateurShowcaseImage from "../../../src/boxing/IntrenationalAmateurShowcase.png";
import MidAtlanticImage from "../../../src/boxing/MidAlantic.jpg";
import NewEnglandGoldenGlovesImage from "../../../src/boxing/NewEnglandGoldenGloves.png";
import NewEnglandSilverGlovesImage from "../../../src/boxing/NewEnglandSIlverGlovesImg1.jpg";
import WestCoastImage from "../../../src/boxing/WestCoast.png";

const boxingImages = {
    silverGlovesYouth: {
        img: NewEnglandSilverGlovesImage,
        citation: "../src/boxing/NewEnglandSIlverGlovesImg1.jpg",
        source: "https://www.nationalsilvergloves.org",
    },
    goldenGlovesPro: {
        img: MidAtlanticImage,
        citation: "../src/boxing/MidAlantic.jpg",
        source: "https://www.goldenglovesusa.org"
    },
    collegiateDual: {
        img: NewEnglandSilverGlovesImage,
        citation: "../src/boxing/NewEnglandSIlverGlovesImg1.jpg",
         source: "https://www.nationalsilvergloves.org",
    },
    championshipNight: {
        img: GreatLakesImage,
        citation: "../src/boxing/GreatLakes.png",
        source: "https://miamiredhawks.com/news/2025/6/9/hockey-miami-to-face-michigan-tech-in-gli-opener"
    },
    provingGrounds: {
        img: WestCoastImage,
        citation: "../src/boxing/WestCoast.png",
        source: "https://www.strideevents.com/proving-grounds/event-information"
    },
    internationalExchange: {
        img: InternationalAmateurShowcaseImage,
        citation: "../src/boxing/IntrenationalAmateurShowcase.png",
        source: "https://www.facebook.com/events/25777980761861048/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22external_search_engine%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
    },
    goldenGlovesQualifier: {
        img: NewEnglandGoldenGlovesImage,
        citation: "../src/boxing/NewEnglandGoldenGloves.png",
        source: "https://www.lowellgoldengloves.com"
    },
    mastersEveningCard: {
        img: MidAtlanticImage,
        citation: "../src/boxing/MidAlantic.jpg",
        source: "https://www.goldenglovesusa.org"
    },
    youthDevelopment: {
        img: NewEnglandSilverGlovesImage,
        citation: "../src/boxing/NewEnglandSIlverGlovesImg1.jpg",
        source: "https://www.nationalsilvergloves.org"
    },
    silverGlovesJuniors: {
        img: GreatLakesImage,
        citation: "../src/boxing/GreatLakes.png",
        source: "https://miamiredhawks.com/news/2025/6/9/hockey-miami-to-face-michigan-tech-in-gli-opener"

    },
    collegiateInvitational: {
        img: WestCoastImage,
        citation: "../src/boxing/WestCoast.png",
        source: "https://www.strideevents.com/proving-grounds/event-information"

    },
    internationalChampionship: {
        img: InternationalAmateurShowcaseImage,
        citation: "../src/boxing/IntrenationalAmateurShowcase.png",
        source: "https://www.facebook.com/events/25777980761861048/?acontext=%7B%22event_action_history%22%3A[%7B%22surface%22%3A%22external_search_engine%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D]%2C%22ref_notif_type%22%3Anull%7D",
    },
};

export class Event{
    constructor(title, description, date, img, imgCitation, attributes, id, price, instancesInCart = 0){
        this.title = title;
        this.description = description;
        this.date = date;
        this.img= img;
        this.imgCitation = imgCitation;
        this.attributes = attributes;
         this.id = id; //the same as the price_id of the product in stripe backend (ie this id is mapped to the event's corresponding stripe price_id)
         this.price = price; 
         this.instancesInCart = instancesInCart; 

    }
}


 //used gemini to generate dummy data and scrape web fro valid URL for learnMore links per Event 
  export  const Events = [
       new Event(
            "New England Silver Gloves Youth Bracket",
            "Regional youth tournament with multiple clubs competing in a weekend bracket.",
            "September 20, 2026",
             boxingImages.silverGlovesYouth.img,
             boxingImages.silverGlovesYouth.citation,
             ["New England", "Youth", "Open", "Flyweight", "Silver Gloves", "Tournament Bracket", "Community Gym"],
             "price_1TPmXkHo5oc8Dhhw0rpllgCv",
             15,
            0),
        new Event(
            "Mid-Atlantic Golden Gloves Fall Pro Card",
            "High-energy evening card featuring established regional contenders and local prospects.",
            "October 4, 2026",
            boxingImages.goldenGlovesPro.img,
            boxingImages.goldenGlovesPro.citation,
            ["Mid-Atlantic", "Adult", "Elite", "Lightweight", "Golden Gloves", "Pro Card", "Arena"],
            "price_1TPmQjHo5oc8DhhwOxgSzlIU",
            20,
            0
        ),
       new Event(
            "Southeast Collegiate Team Dual Classic",
            "College programs face off in a scored dual-meet format across several bouts.",
            "October 11, 2026",
            boxingImages.collegiateDual.img,
            boxingImages.collegiateDual.citation,
            ["Southeast", "Teen", "Qualifier", "Welterweight", "NCAA Boxing", "Team Dual", "College Fieldhouse"],
            "price_1TPmRBHo5oc8Dhhw7hNOVlxo",
            25,
            0
        ),
       new Event(
            "Great Lakes Championship Night",
            "Regional title bouts headlined by top-ranked amateurs preparing for nationals.",
            "October 18, 2026",
            boxingImages.championshipNight.img,
            boxingImages.championshipNight.citation,
            ["Great Lakes", "Adult", "Elite", "Middleweight", "USA Boxing", "Title Fight", "Arena"],
            "price_1TPmRgHo5oc8DhhwWikqDtgT",
            30,
            0
        ),
       new Event(
            "West Coast Proving Grounds",
            "Prospect-focused card highlighting first-year pro talent in a major boxing market.",
            "October 25, 2026",
            boxingImages.provingGrounds.img,
            boxingImages.provingGrounds.citation,
            ["West Coast", "Adult", "Novice", "Heavyweight", "Independent", "Pro Card", "Casino"],
            "price_1TPmS3Ho5oc8DhhwSzWGuFvX",
            35,
            0
        ),
       new Event(
            "International Amateur Exchange Showcase",
            "Traveling youth teams compete in friendly exhibition bouts with international officials.",
            "November 1, 2026",
            boxingImages.internationalExchange.img,
            boxingImages.internationalExchange.citation,
            ["International", "Junior", "Invitational", "Bantamweight", "USA Boxing", "Exhibition", "Outdoor Ring"],
             "price_1TPmSWHo5oc8DhhwWpcR9B7c",
            40,
           0
        ),
        new Event(
            "New England Golden Gloves Qualifier",
            "Key qualifying tournament where winners advance to the late-season regional finals.",
            "November 8, 2026",
            boxingImages.goldenGlovesQualifier.img,
            boxingImages.goldenGlovesQualifier.citation,
            ["New England", "Teen", "Qualifier", "Featherweight", "Golden Gloves", "Tournament Bracket", "Community Gym"],
            "price_1TPmSqHo5oc8DhhwktskDrLu",
            45,
            0
        ),
        new Event(
            "Mid-Atlantic Masters Evening Card",
            "Experienced fighters return for a professionally run masters division showcase.",
            "November 15, 2026",
            boxingImages.mastersEveningCard.img,
            boxingImages.mastersEveningCard.citation,
            ["Mid-Atlantic", "Masters", "Open", "Welterweight", "Independent", "Amateur Card", "Casino"],
            "prod_UOZcYYnijhVAvu",
            50,
            0
        ),
       new Event(
            "Southeast Youth Development Festival",
            "Entry-level youth showcase with coaching clinics and short-form supervised exhibitions.",
            "November 22, 2026",
            boxingImages.youthDevelopment.img,
            boxingImages.youthDevelopment.citation,
            ["Southeast", "Youth", "Novice", "Flyweight", "USA Boxing", "Exhibition", "Outdoor Ring"],
            "price_1TPmUzHo5oc8DhhwWKk2Q14i",
            55,
            0
        ),
       new Event(
            "Great Lakes Silver Gloves Juniors",
            "Junior division card emphasizing technical scoring and championship progression points.",
            "December 6, 2026",
            boxingImages.silverGlovesJuniors.img,
            boxingImages.silverGlovesJuniors.citation,
            ["Great Lakes", "Junior", "Open", "Bantamweight", "Silver Gloves", "Amateur Card", "Community Gym"],
            "price_1TPmVNHo5oc8DhhwUVZcbFmq",
            60,
            0
        ),
       new Event(
            "West Coast Collegiate Invitational Duals",
            "Top college squads meet in an invitational dual format with national-level judging crews.",
            "December 13, 2026",
            boxingImages.collegiateInvitational.img,
            boxingImages.collegiateInvitational.citation,
            ["West Coast", "Adult", "Invitational", "Lightweight", "NCAA Boxing", "Team Dual", "College Fieldhouse"],
            "price_1TPmViHo5oc8DhhwmqX0mbfv",
            65,
            0
        ),
       new Event(
            "International Golden Gloves Championship Series",
            "Season-ending championship card featuring cross-border matchups and title defenses.",
            "December 20, 2026",
            boxingImages.internationalChampionship.img,
            boxingImages.internationalChampionship.citation,
            ["International", "Masters", "Elite", "Featherweight", "Golden Gloves", "Title Fight", "Arena"],
            "price_1TPmWNHo5oc8DhhwZV9MDdlU",
            70,
            0
        ),
    ];

    
