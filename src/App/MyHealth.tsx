import { Upload } from 'lucide-react';
import { Share2 } from 'lucide-react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { RecentActivityTable } from './Tables/RecentActivityData';


export default function MyHealthContent() {

  return (
    <div className="bg-background">
      <Navbar />
      <main className="px-8 py-12">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-2">Upload and Share Your Health Data</h1>
          <p className="text-lg text-gray-600 mb-8">
            Easily upload and securely share your health data with professionals or facilities using LyfeLynk.
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <Link to="/App/MyHealth/Upload">
              <div className="p-6 border rounded-lg cursor-pointer">
                <Upload className="text-blue-500 h-16 w-24 mb-4" />
                <span className="block text-lg font-semibold">Upload</span>
              </div>
            </Link>

            <Link to="/App/MyHealth/Share">
              <div className="p-6 border rounded-lg cursor-pointer">
                <Share2 className="text-blue-500 h-16 w-24 mb-4" />
                <span className="block text-lg font-semibold">Share</span>
              </div>
            </Link>
          </div>

        </section>
        <section className="container mt-8">
          <h2 className="text-2xl md:text-4xl font-semibold">Recent Activities</h2>
          <p className="pb-6 text-gray-600">Recently shared or uploaded files on LyfeLynk.</p>
          <div>
            <RecentActivityTable/>
          </div>
        </section>
      </main>
    </div>
  );
}

