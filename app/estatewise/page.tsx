import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BookButton from '@/components/BookButton';
import Walkthrough, { type WalkthroughSlide, type WalkthroughScreen } from '@/components/Walkthrough';
import { SITE } from '@/lib/constants';

const TITLE = `EstateWise walkthrough — ${SITE.name}`;
const DESCRIPTION =
  'A screen-by-screen tour of EstateWise, the app I built to run our own rental buildings: units, tenants, rent, repairs, keys and finances.';

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
      'Buildings, units (vacancies flagged), tenants and open repairs; tap a number to open that list.',
      'Rent collected this month, compared with the same month last year.',
      'Month-by-month charts of rent collected and repair spending.',
      'The bar along the bottom stays on every page, so any section is one tap away.',
    ],
    screens: [screen('dashboard', 'Dashboard', 1150)],
  },
  {
    chapter: 'Property',
    title: 'Buildings',
    body: 'Every building with its units, who lives in each one, and whether this month’s rent is in.',
    points: [
      'Each building shows how many units it has and how many are empty.',
      'Each unit shows its tenant and a rent label: Paid, Partial, Unpaid or Vacant.',
      'Tap a building or a unit to open it; the + button adds a building.',
    ],
    screens: [screen('buildings', 'Buildings')],
  },
  {
    chapter: 'Property',
    title: 'A building',
    body: 'One page per building: what it cost, what it costs to run, and which way it is heading.',
    points: [
      'Purchase price and date, and the yearly property tax, as headline figures.',
      'Add an apartment, open the building’s keys, or log a repair.',
      'Rent and repair costs compared with last year.',
      'Running costs: the mortgage payment and the utilities you pay.',
      'Repairs, photos, tax history and charts further down.',
    ],
    screens: [screen('building', 'Building', 1750)],
  },
  {
    chapter: 'Property',
    title: 'An apartment',
    body: 'Everything about one unit on one page.',
    points: [
      'Current rent and this month’s rent status at the top, with floor, bedrooms and key colour.',
      'Record a payment, see the appliances, or add a tenant.',
      'The tenant, the lease dates and the security deposit.',
      'The unit’s repairs, its rent history, photos, and charts of rent and repair costs.',
    ],
    screens: [screen('apartment', 'Apartment', 1800)],
  },
  {
    chapter: 'Property',
    title: 'Rent, unit details and appliances',
    body: 'The everyday entry screens, reached from an apartment.',
    points: [
      'Record a payment: amount, date and how it was paid (check, cash, money order, Venmo, Cash App).',
      'Edit the unit: number, floor, bedrooms, deposit, lease dates and key colour.',
      'Appliances: the stove, fridge, boiler and the rest in each unit, with brand and condition.',
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
      'Keys for the common areas and for each unit.',
      'Each key has a photo, the number of copies held, who holds them, and notes.',
    ],
    screens: [screen('keys', 'Keys'), screen('key', 'One key')],
  },
  {
    chapter: 'People',
    title: 'Tenants',
    body: 'Who lives where, and their payment record.',
    points: [
      'The list shows each tenant’s unit and phone number.',
      'A tenant’s page: contact details, job and income, pets, next of kin, and every payment from their unit.',
    ],
    screens: [screen('tenants', 'Tenants'), screen('tenant', 'A tenant', 1500)],
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
    screens: [screen('finances', 'Finances', 1300), screen('report', 'Portfolio report')],
  },
  {
    chapter: 'Repairs',
    title: 'Repairs',
    body: 'Every repair across all buildings, from planned to done.',
    points: [
      'Spending on repairs month by month, then every repair with contractor, cost and status.',
      'A repair’s page splits parts from labour and shows when it was planned, started and finished.',
    ],
    screens: [screen('repairs', 'All repairs'), screen('repair', 'One repair'), screen('repair_form', 'New repair')],
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
    title: 'Being built now',
    body: 'Xanadu is building the next part of EstateWise as you read this. It adds people and history to every record.',
    points: [
      'A People tab: tenants, emergency contacts, referrers, vendors and the handyman in one list.',
      'Who lives here, on each apartment: current and past residents, with move-in and move-out dates.',
      'Notes with photos, attached to a person, a unit or a building.',
      'A timeline on each unit and building: repairs, rent changes, residents and notes in date order.',
    ],
    screens: [screen('dashboard', 'Dashboard today', 1150)],
  },
];

export default function EstateWisePage() {
  return (
    <main className="max-w-5xl mx-auto px-6">
      <Nav />
      <article className="pt-10 pb-16">
        <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">Walkthrough</p>
        <h1 className="text-3xl font-medium tracking-tight text-gray-900 mb-4">EstateWise</h1>
        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl mb-10">
          The app I built to run our own rental buildings: the memory of every building, unit, tenant, payment,
          repair and key, in one place on my phone, and how each building is doing over time. It is for our own use,
          not for sale. Built with{' '}
          <Link href="/#engine" className="text-gray-900 underline underline-offset-2">
            Xanadu
          </Link>
          . The screens below use the app’s built-in sample data, not our real records.
        </p>
        <Walkthrough slides={SLIDES} />
        <div className="mt-16 rounded-xl border border-gray-100 p-6 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-gray-600">Need a tool like this built for your own business?</p>
          <BookButton className="text-sm rounded-lg bg-gray-900 px-4 py-2 text-white hover:bg-gray-700 transition-colors">
            Book a call
          </BookButton>
        </div>
      </article>
      <Footer />
    </main>
  );
}
