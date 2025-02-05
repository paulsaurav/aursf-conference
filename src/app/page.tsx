import { ConferenceOverview } from "@/_components/ConferenceOverview";
import  Hero  from "@/_components/Hero";
import Motivation from "@/_components/Motivation";
import Notices from "@/_components/Notices";
import PartnerInstitute from "@/_components/PartnerInstitute";
import Sponsors from "@/_components/Sponsors";
import Strip from "@/_components/Strip";
import SubHero from "@/_components/SubHero";
import { VenueAndLocation } from "@/_components/VenueAndLocation";

export default function Home() {
  return (
    <>
    <Strip />
    <Hero />
    <SubHero />
    <ConferenceOverview />
    <Motivation />
    <Notices />
    <VenueAndLocation />
    <PartnerInstitute />
    <Sponsors />
    </>
  );
}
