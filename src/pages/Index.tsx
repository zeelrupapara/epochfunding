import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import QualificationsSection from "@/components/QualificationsSection";
import StructureSection from "@/components/StructureSection";
import ParametersSection from "@/components/ParametersSection";
import ProcessSection from "@/components/ProcessSection";
import UseCasesSection from "@/components/UseCasesSection";
import TrackRecordSection from "@/components/TrackRecordSection";
import ApproachSection from "@/components/ApproachSection";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <AboutSection />
    <QualificationsSection />
    <StructureSection />
    <ParametersSection />
    <ProcessSection />
    <UseCasesSection />
    <TrackRecordSection />
    <ApproachSection />
    <ApplicationForm />
    <Footer />
  </div>
);

export default Index;
