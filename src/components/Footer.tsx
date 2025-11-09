// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li>About us</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Help & Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4">Follow us</h3>
          <div className="flex gap-4 mb-6">
            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
            <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          </div>
          <p className="text-sm text-gray-400 mb-4">Receive exclusive offers in your mailbox</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your email"
              className="px-4 py-3 bg-gray-800 rounded-l-full flex-1 outline-none"
            />
            <button className="px-6 py-3 bg-yellow-500 rounded-r-full font-bold hover:bg-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-12">
        All rights Reserved © Your Company, 2021
      </div>
    </footer>
  );
}