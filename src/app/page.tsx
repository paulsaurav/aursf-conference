import { ConferenceOverview } from "@/_components/ConferenceOverview";
import ExpectedOutcomes from "@/_components/ExpectedOutcomes";
import { Hero } from "@/_components/Hero";
import Motivation from "@/_components/Motivation";
import Notices from "@/_components/Notices";
import Sponsors from "@/_components/Sponsors";
import { VenueAndLocation } from "@/_components/VenueAndLocation";

export default function Home() {
  return (
    <>
    <Hero />
    <ConferenceOverview />
    <Motivation />
    <ExpectedOutcomes />
    <Notices />
    <VenueAndLocation />
    <Sponsors />
    </>
  );
}
