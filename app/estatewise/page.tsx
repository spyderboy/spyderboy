import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BookButton from '@/components/BookButton';
import Walkthrough, { type WalkthroughSlide, type WalkthroughScreen } from '@/components/Walkthrough';
import { SITE } from '@/lib/constants';

const TITLE = `EstateWise walkthrough — ${SITE.name}`;
const DESCRIPTION =
  'A screen-by-screen tour of EstateWise, the app I built to run our own rental buildings: units, the people in them, rent, repairs, keys and finances, each with its own history.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/estatewise` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/estatewise`,
    siteName: SITE.name,
    type: 'website',
    images: [`${SITE.url}/images/walkthroughs/estatewise/dashboard.png`],
  },
};

// Screens captured from the app's built-in sample data at phone size (390 wide); heights are the captured page heights.
function screen(name: string, label: string, height = 844): WalkthroughScreen {
  return { src: `/images/walkthroughs/estatewise/${name}.png`, label, height };
}

const SLIDES: WalkthroughSlide[] = [
  {
    chapter: 'Start',
    title: 'Sign in',
    body: 'Everything sits behind your own account, so your records stay private and the same on your phone and laptop.',
    points: [
      'Sign in with email and password, create an account, or reset a forgotten password.',
      'It keeps working without signal: changes made in a basement sync when you are back online.',
      'A sample-data switch lets you explore with made-up buildings without touching real records.',
    ],
    screens: [screen('signin', 'Sign in')],
  },
  {
    chapter: 'Start',
    title: 'The dashboard',
    body: 'The first screen is the whole portfolio at a glance.',
    points: [
      'Buildings, units (vacancies flagged), the people living in them, and open repairs; tap a number to open that list.',
      'Rent collected this month, compared with the same month last year.',
      'Month-by-month charts of rent collected and repair spending.',
      'The bar along the bottom stays on every page, so any section is one tap away.',
    ],
    screens: [screen('dashboard', 'Dashboard', 973)],
  },
  {
    chapter: 'Property',
    title: 'Buildings',
    body: 'Every building with its units, who lives in each one today, and whether this month’s rent is in.',
    points: [
      'Each building shows how many units it has and how many are empty.',
      'Each unit shows who lives there and a rent label: Paid, Partial, Unpaid or Vacant.',
      'Tap a building or a unit to open it; the + button adds a building.',
    ],
    screens: [screen('buildings', 'Buildings')],
  },
  {
    chapter: 'Property',
    title: 'A building',
    body: 'One page per building: what it cost, what it costs to run, and everything that has happened there.',
    points: [
      'Purchase price and date, and the yearly property tax, as headline figures.',
      'Add an apartment, open the building’s keys, log a repair, or add a note.',
      'Running costs: the mortgage payment and the utilities you pay.',
      'A timeline of the whole building, newest first: repairs, conversations, notes and move-ins, across every unit.',
      'Photos, tax history and charts further down.',
    ],
    screens: [screen('building', 'Building', 2376)],
  },
  {
    chapter: 'Property',
    title: 'An apartment',
    body: 'Everything about one unit on one page.',
    points: [
      'Current rent and this month’s rent status at the top, with floor, bedrooms and key colour.',
      'Who lives here: the current residents, a Move out button for each, and Move in for someone new.',
      'The lease dates and security deposit, the unit’s repairs and rent history, and its photos.',
      'The unit’s own timeline, and charts of rent and repair costs.',
    ],
    screens: [screen('apartment', 'Apartment', 2031)],
  },
  {
    chapter: 'Property',
    title: 'Rent, unit details and appliances',
    body: 'The everyday entry screens, reached from an apartment.',
    points: [
      'Record a payment: amount, date and how it was paid (check, cash, money order, Venmo, Cash App).',
      'Edit the unit: number, floor, bedrooms, deposit, lease dates and key colour.',
      'Appliances: the stove, fridge, water heater and the rest in each unit, with age and condition.',
    ],
    screens: [
      screen('payment', 'Record payment'),
      screen('apartment_form', 'Edit apartment'),
      screen('appliances', 'Appliances'),
    ],
  },
  {
    chapter: 'Property',
    title: 'Keys',
    body: 'Every key for every building: who has it and how many copies exist.',
    points: [
      'The keyring photo, then keys for the common areas and for each unit.',
      'Each key has a photo, what it opens, the number of copies held, who holds them, and notes.',
    ],
    screens: [screen('keys', 'Keys'), screen('key', 'One key')],
  },
  {
    chapter: 'People',
    title: 'Everyone we deal with',
    body: 'One list of people: tenants and the others who live with them, their families, who referred them, the handyman and vendors.',
    points: [
      'Search by name, or filter to current tenants or to one kind of person.',
      'A person can be several things at once: a tenant who referred a friend, a relative who is the emergency contact.',
      'The + button adds someone.',
    ],
    screens: [screen('people', 'People', 1023)],
  },
  {
    chapter: 'People',
    title: 'A person',
    body: 'Everything about one person on one page.',
    points: [
      'Contact details and what they do.',
      'Where they live, and where they lived before, with move-in and move-out dates.',
      'Connections: family, friends, emergency contacts, and who referred whom, followed back as a referral chain.',
      'Their timeline: conversations, notes, moves and connections, newest first. Tap any entry to open it.',
      'Family and connection details are a memory aid only. They never decide who rents or renews.',
    ],
    screens: [screen('person', 'A person', 1131)],
  },
  {
    chapter: 'People',
    title: 'Moving in, connections and details',
    body: 'The entry screens for people.',
    points: [
      'Move someone in: who, which unit, leaseholder or occupant, the date, pets and smoking.',
      'Add a connection between two people: family, friend, coworker, roommate, emergency contact, or who referred whom.',
      'Edit a person’s details and what kind of person they are.',
    ],
    screens: [
      screen('move_in', 'Move in'),
      screen('relationship_form', 'Add a connection'),
      screen('person_form', 'Edit a person'),
    ],
  },
  {
    chapter: 'People',
    title: 'Conversations and notes',
    body: 'What was said and done, written down where it will be found again.',
    points: [
      'Log a conversation (in person, phone, text or email), an event, or a plain note, with photos.',
      'Mark who was involved, and attach it to people, units and buildings: it then appears on each of their timelines.',
    ],
    screens: [screen('conversation', 'Log a conversation')],
  },
  {
    chapter: 'People',
    title: 'History',
    body: 'Every change to every record is kept: what changed, when, and what it was before.',
    points: [
      'Open a person’s history to see each edit, oldest value and new value side by side.',
      'Nothing is lost by a mistaken edit: the earlier value is always there to look up.',
    ],
    screens: [screen('history', 'History')],
  },
  {
    chapter: 'Money',
    title: 'Finances',
    body: 'Income, expenses and profit, for the whole portfolio and for each building.',
    points: [
      'This month’s income against the mortgage, property taxes, repairs and evictions, and what is left.',
      'Rent over time, how tenants pay, and income against expenses.',
      'The portfolio report: profit over time, and a profit-and-loss summary for each building.',
    ],
    screens: [screen('finances', 'Finances', 998), screen('report', 'Portfolio report')],
  },
  {
    chapter: 'Repairs',
    title: 'Repairs',
    body: 'Every repair across all buildings, from planned to done.',
    points: [
      'Spending on repairs month by month, then every repair with contractor, cost and status.',
      'A repair’s page splits parts from labour and shows when it was planned, started and finished.',
    ],
    screens: [screen('repairs', 'All repairs', 1123), screen('repair', 'One repair'), screen('repair_form', 'New repair')],
  },
  {
    chapter: 'Account',
    title: 'Account',
    body: 'Who is signed in, the sample-data switch, and sign out.',
    points: [
      'Sample mode shows a banner across the top, so made-up data is never mistaken for the real thing.',
    ],
    screens: [screen('account', 'Account')],
  },
  {
    chapter: 'Next',
    title: 'What comes next',
    body: 'The app is ready for our real records. Those come next, then a way to ask it questions.',
    points: [
      'Loading what we already have: photos filed by building and unit, and the yearly tax packets.',
      'Then asking in plain words: who referred the tenant in 3B, what did we last talk about with a vendor, what did the Oak Ave boiler cost since 2023.',
    ],
    screens: [screen('dashboard', 'Dashboard today', 973)],
  },
];

export default function EstateWisePage() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <Nav />
      <article className="pt-10 pb-16">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Walkthrough</p>
        <h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">EstateWise</h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-4">
          The app I built to run our own rental buildings: the memory of every building, unit, person, payment,
          repair, key and conversation, in one place on my phone, and how each building is doing over time. It is for
          our own use, not for sale. The screens below use the app’s built-in sample data, not our real records.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-6">
          It is also a working example of how I build for clients: one person sets the direction, a short written plan
          defines each stage, and{' '}
          <Link href="/#engine" className="text-gray-900 underline underline-offset-2">
            Xanadu
          </Link>{' '}
          builds it in small steps, each checked by its own test. About two months from the first line to what you see
          here.
        </p>
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <a
            href="/downloads/EstateWise-walkthrough.pdf"
            download
            className="text-sm rounded-lg border border-gray-200 px-4 py-2 text-gray-900 hover:border-gray-400 transition-colors"
          >
            Download the walkthrough (PDF) ↓
          </a>
          <span className="text-xs text-gray-500">18 pages, to read offline or share with your team.</span>
        </div>
        <Walkthrough slides={SLIDES} />
        <div className="mt-16 rounded-xl border border-gray-100 p-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-gray-600">Need a tool like this built for your own business?</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/downloads/EstateWise-walkthrough.pdf"
              download
              className="text-sm rounded-lg border border-gray-200 px-4 py-2 text-gray-900 hover:border-gray-400 transition-colors"
            >
              Walkthrough PDF ↓
            </a>
            <BookButton className="text-sm rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700 transition-colors">
              Book a call
            </BookButton>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
