import NewEnglandSilverGloves from "../../../src/boxing/NewEnglandSIlverGlovesImg1.jpg"; 


export class Event{
    constructor(title, description, date, img, imgCitation, attributes, id, price, instancesInCart = 0){
        this.title = title;
        this.description = description;
        this.date = date;
        this.img= img;
        this.imgCitation = imgCitation;
        this.attributes = attributes;
         this.id = id; 
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
             NewEnglandSilverGloves,
             "https://www.nationalsilvergloves.org/regionals/",
             ["New England", "Youth", "Open", "Flyweight", "Silver Gloves", "Tournament Bracket", "Community Gym"],
             "ab",
             200,
            0),
        new Event(
            "Mid-Atlantic Golden Gloves Fall Pro Card",
            "High-energy evening card featuring established regional contenders and local prospects.",
            "October 4, 2026",
            NewEnglandSilverGloves,
            "https://www.goldenglovesusa.org/",
            ["Mid-Atlantic", "Adult", "Elite", "Lightweight", "Golden Gloves", "Pro Card", "Arena"],
            "abc",
            50,
            0
        ),
       new Event(
            "Southeast Collegiate Team Dual Classic",
            "College programs face off in a scored dual-meet format across several bouts.",
            "October 11, 2026",
            NewEnglandSilverGloves,
            "https://usaboxing.org/",
            ["Southeast", "Teen", "Qualifier", "Welterweight", "NCAA Boxing", "Team Dual", "College Fieldhouse"],
            "abcd",
            500,
            0
        ),
       new Event(
            "Great Lakes Championship Night",
            "Regional title bouts headlined by top-ranked amateurs preparing for nationals.",
            "October 18, 2026",
            NewEnglandSilverGloves,
            "https://usaboxing.org/",
            ["Great Lakes", "Adult", "Elite", "Middleweight", "USA Boxing", "Title Fight", "Arena"],
            "abcde",
            50,
            0
        ),
       new Event(
            "West Coast Proving Grounds",
            "Prospect-focused card highlighting first-year pro talent in a major boxing market.",
            "October 25, 2026",
            NewEnglandSilverGloves,
            "https://boxrec.com/",
            ["West Coast", "Adult", "Novice", "Heavyweight", "Independent", "Pro Card", "Casino"],
            "acbd",
            50,
            0
        ),
       new Event(
            "International Amateur Exchange Showcase",
            "Traveling youth teams compete in friendly exhibition bouts with international officials.",
            "November 1, 2026",
            NewEnglandSilverGloves,
            "https://www.iba.sport/",
            ["International", "Junior", "Invitational", "Bantamweight", "USA Boxing", "Exhibition", "Outdoor Ring"],
            "acd",
            50,
            0
        ),
        new Event(
            "New England Golden Gloves Qualifier",
            "Key qualifying tournament where winners advance to the late-season regional finals.",
            "November 8, 2026",
            NewEnglandSilverGloves,
            "https://www.goldenglovesusa.org/",
            ["New England", "Teen", "Qualifier", "Featherweight", "Golden Gloves", "Tournament Bracket", "Community Gym"],
            "aacd",
            50,
            0
        ),
        new Event(
            "Mid-Atlantic Masters Evening Card",
            "Experienced fighters return for a professionally run masters division showcase.",
            "November 15, 2026",
            NewEnglandSilverGloves,
            "https://usaboxing.org/",
            ["Mid-Atlantic", "Masters", "Open", "Welterweight", "Independent", "Amateur Card", "Casino"],
            "aacda",
            50,
            0
        ),
       new Event(
            "Southeast Youth Development Festival",
            "Entry-level youth showcase with coaching clinics and short-form supervised exhibitions.",
            "November 22, 2026",
            NewEnglandSilverGloves,
            "https://usaboxing.org/",
            ["Southeast", "Youth", "Novice", "Flyweight", "USA Boxing", "Exhibition", "Outdoor Ring"],
            "aabbc",
            50,
            0
        ),
       new Event(
            "Great Lakes Silver Gloves Juniors",
            "Junior division card emphasizing technical scoring and championship progression points.",
            "December 6, 2026",
            NewEnglandSilverGloves,
            "https://www.nationalsilvergloves.org/",
            ["Great Lakes", "Junior", "Open", "Bantamweight", "Silver Gloves", "Amateur Card", "Community Gym"],
            "aabbec",
            50,
            0
        ),
       new Event(
            "West Coast Collegiate Invitational Duals",
            "Top college squads meet in an invitational dual format with national-level judging crews.",
            "December 13, 2026",
            NewEnglandSilverGloves,
            "https://www.usiba.org/",
            ["West Coast", "Adult", "Invitational", "Lightweight", "NCAA Boxing", "Team Dual", "College Fieldhouse"],
            "aabbeec",
            50,
            0
        ),
       new Event(
            "International Golden Gloves Championship Series",
            "Season-ending championship card featuring cross-border matchups and title defenses.",
            "December 20, 2026",
            NewEnglandSilverGloves,
            "https://www.goldenglovesusa.org/",
            ["International", "Masters", "Elite", "Featherweight", "Golden Gloves", "Title Fight", "Arena"],
            "abcdbbba",
            50,
            0
        ),
    ];

    
