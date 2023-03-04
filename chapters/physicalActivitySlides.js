import Thumbnail from '../images/chapter-6-thumbnail.png';
import Posi1 from '../images/physicalPosi.png';

const physicalActivitySlides = [
    {
        id: '1',
        summary: [`Physical activity is about more than working out to fit into an outfit. Physical activity means any activity that has your body moving and burning energy, like walking and dancing. Physical activity may strengthen your bones and muscles, as well as:`],
        bullets: [
            {
                bullet: [
                    `prevent heart disease and stroke`,
                    `prevent back pain`,
                    `improve ability to sleep well`,
                    `reduce body fat`,
                    `lower blood pressure and cholesterol`,
                    `reduce stress and manage depression`,
                    `manage diabetes.`
                ],
                paragraph: [`Here are the governmental recommendations for physical activity. These can be found at www.MyPyramid.gov. For health benefits, physical activity should be moderate or vigorous and add up to at least thirty minutes a day.`]
            }
        ],
        image: Thumbnail,
        imageAlt: `chapter 6 physical activity and nutrition`
    },
    {
        id: '2',
        bullets: [
            {
                title: `Moderate physical activities include:`,
                tableData: [
                    ['Walking briskly', 'about 3 ½ miles per hour'],
                    ['hiking', ''],
                    ['gardening/yard work', ''],
                    ['dancing', ''],
                    ['golf', 'walking and carryng clubs'], ['bicycling', 'less than 10 miles per hour'], ['weight training', 'general light workout']
                ]
            }
        ],
        image: Thumbnail,
        imageAlt: `chapter 6 physical activity and nutrition`
    },
    {
        id: '3',
        bullets: [
            {
                title: `Vigorous physical activities include:`,
                tableData: [
                    ['Running/jogging', '5 miles per hour'],
                    ['Bicycling', 'more than 10 miles per hour'],
                    ['Swimming', 'freestyle laps'],
                    ['Aerobics', ''],
                    ['Walking very fast', '4 ½ miles per hour'],
                    ['Weight lifting', 'vigorous effort'],
                    ['Basketball', 'competitive']
                ]
            }
        ],
        image: Thumbnail,
        imageAlt: `chapter 6 physical activity and nutrition`,
        pinkPosi: Posi1
    },
    {
        id: '4',
        heading: `Diet`,
        bullets: [
            {
                summary: [`Diet is more than eating lettuce and carrots. It’s about having balance in your meals. The right diet can combat and fight all types of diseases and conditions. See the new and improved governmental recommendations for food and health at www.MyPyramid.gov. For your reference, here are the highlights:`],
                bullet: [],
            }
        ],
        paragraph: [],
        image: Thumbnail,
        imageAlt: `chapter 6 physical activity and nutrition`
    },
    {
        id: '5',
        heading: `Food Sources`,
        bullets: [
            {
                summary: [
                    `Grains: eat at least three ounces of 100 percent whole grain bread, cereal, crackers, rice, or pasta every day.`,

                    `Vegetables: vary your vegetables; eat more dark green and orange veggies, and more dry beans and peas.`,

                    `Fruits: focus on fruits; eat a variety of fruit; choose fresh, frozen, canned, or dried fruit; go easy on fruit juices.`,

                    `Milk: get your calcium-rich foods; go low-fat or fat-free; if you don’t or can’t consume milk, choose lactose-free products or other calcium sources.`,

                    `Meats: go lean on protein; choose low-fat or lean meats and poultry; bake it, broil it or grill it; vary your choices—with more fish, beans, peas, nuts, and seeds.`,

                    `Oils: know your fat; make the most of your fat sources from fish, nuts and vegetable oils; limit solid fats like butter, stick margarine, shortening, and lard.`,

                    `The charts and information listed are general information. Please always check with your doctor before making major changes to your physical activity and diet.`
                ],
            }
        ],
        image: Thumbnail,
        imageAlt: `chapter 6 physical activity and nutrition`
    },
    {
        id: '6',
        heading: `Eating Disorders`,
        bullets: [
            {
                summary: [
                    `When we worry too much about the changes to our bodies, we can develop eating disorders. There are many types of eating disorders, but the main three types can take the forms of starving yourself (anorexia nervosa); eating a lot of food at one time, then throwing it up or using a laxative to go to the bathroom (bulimia nervosa); or doing much too much exercise.`,

                    `If you are doing any of these things or you think you may be, you must speak with an adult you feel comfortable with or your doctor. You can also call the National Eating Disorders Association Helpline at 1-800-931-2237, twenty-four hours a day, seven days a week.`,

                    `I encourage you to let your body grow and develop in its own way. Eat healthy, be physically active and see your doctor yearly for regular checkups. If there is anything wrong or if there are any problems with the way you are developing and growing, your doctor will let you know. But take it from experience, I have learned, that WE are PERFECT just as we are.`
                ],
            }
        ],
        image: Thumbnail,
        imageAlt: `chapter 6 physical activity and nutrition`
    },
    {
        id: '7',
        heading: `Things to Remember about Physical Activity And Nutrition:`,
        numberList: [
            {
                id: '1',
                bullet: `Physical activity means any activity that has your body moving and burning energy, like walking and dancing.`
            },
            {
                id: '2',
                bullet: `Visit www.MyPyramid.gov for healthy physical activity and nutrition recommendations.`
            },
            {
                id: '3',
                bullet: `Nutrition is about having a balance in your meals.`
            },
            {
                id: '4',
                bullet: `If you are starving yourself or eating lots of food then throwing up, please call the National Eating Disorders Association Helpline at 1-800-931-2237, 24 hours a day, 7 days a week.`
            },
            {
                id: '5',
                bullet: `WE are PERFECT just as we are.`
            },
        ],
        image: Thumbnail,
        imageAlt: `chapter 6 physical activity and nutrition`
    }
];

export default physicalActivitySlides;