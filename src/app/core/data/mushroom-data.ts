export interface Mushroom {
    name: string;
    edible: 'edible' | 'toxic';
    season: 'spring' | 'summer' | 'fall' | 'winter';
    description: string;
    notes: string;
}

export const mushrooms: Mushroom[] = [
    {
        name: 'Chanterelle',
        edible: 'edible',
        season: 'summer',
        description: 'Golden-yellow, funnel-shaped mushroom with false gills',
        notes: 'Has toxic look-alikes - learn proper identification'
    },
    {
        name: 'Morel',
        edible: 'toxic',
        season: 'spring',
        description: 'Distinctive honeycomb-like cap structure',
        notes: 'Must be cooked before eating'
    },
    {
        name: 'Chicken of the Woods',
        edible: 'edible',
        season: 'summer',
        description: 'Bright orange bracket fungus with yellow edges',
        notes: 'Avoid if growing on certain tree species'
    },
    {
        name: 'Death Cap',
        edible: 'toxic',
        season: 'summer',
        description: 'Pale green to white cap with white gills',
        notes: 'Extremely toxic - study for safety awareness'
    },
    {
        name: 'Oyster Mushroom',
        edible: 'edible',
        season: 'fall',
        description: 'Fan-shaped caps growing in clusters',
        notes: 'Great beginner mushroom, few look-alikes'
    },
    {
        name: 'Lion’s Mane',
        edible: 'edible',
        season: 'fall',
        description: "White, shaggy appearance like a lion's mane",
        notes: 'No toxic look-alikes'
    },
    {
        name: 'Destroying Angel',
        edible: 'toxic',
        season: 'summer',
        description: 'Pure white mushroom with a sack-like base',
        notes: 'Deadly toxic - study for safety awareness'
    },
    {
        name: 'King Bolete',
        edible: 'edible',
        season: 'summer',
        description: 'Large brown cap with thick stem',
        notes: 'Learn to distinguish from similar species'
    },
    {
        name: 'Shaggy Mane',
        edible: 'edible',
        season: 'fall',
        description: 'Tall white mushroom with shaggy scales',
        notes: 'Must be harvested and eaten quickly'
    },
    {
        name: 'Maitake',
        edible: 'edible',
        season: 'fall',
        description: 'Large, feathery clusters with overlapping gray-brown caps',
        notes: 'Also known as Hen of the Woods - no toxic look-alikes'
    },
    {
        name: 'False Morel',
        edible: 'toxic',
        season: 'spring',
        description: 'Brain-like, reddish-brown cap with irregular shape',
        notes: 'Highly toxic - often confused with true morels'
    },
    {
        name: 'Matsutake',
        edible: 'edible',
        season: 'fall',
        description: 'White to brown cap with thick stem and distinct spicy aroma',
        notes: 'Verify identification - has toxic look-alikes'
    },
];