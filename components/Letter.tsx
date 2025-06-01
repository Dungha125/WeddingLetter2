"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { slideInFromBottom, slideInFromBottomtime, slideInFromLeft} from '@/util/motion';

// Define the form data type
type FormData = {
  name: string;
  relationship: string;
  wish: string;
  [key: string]: string; // Index signature
};

const Letter = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    relationship: '',
    wish: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  // Handle form input changes
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Explicitly cast the name to a key of FormData
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name as keyof FormData]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const googleFormUrl =
      'https://docs.google.com/forms/u/0/d/e/1FAIpQLScJ7UnYi37J62oiGuIO1lWkcnTRhn_MyNW7BIckZELTHPHBYA/formResponse'; // Replace with actual form ID

    const formDataToSend = new URLSearchParams();
    formDataToSend.append('entry.1840235555', formData.name); // Replace with actual entry IDs
    formDataToSend.append('entry.288465965', formData.relationship);
    formDataToSend.append('entry.1443390184', formData.wish);

    try {
      await fetch(googleFormUrl, {
        method: 'POST',
        body: formDataToSend,
      });

      // Hiển thị div cảm ơn
      setSubmissionStatus('success');
      setFormVisible(false); // Ẩn form
      setFormData({ name: '', relationship: '', wish: '' }); // Reset form
    } catch  {
      // Vẫn hiển thị trạng thái cảm ơn dù có lỗi
      setSubmissionStatus('success');
      setFormVisible(false);
      setFormData({ name: '', relationship: '', wish: '' }); // Reset form
    }
  };

  return (
    <>
      <div className='h-full w-full bg-white flex flex-col items-center py-6'
          style={{
            backgroundImage: `url('/img/back.svg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}>
        <hr className='border-1 border-red-700 w-[180px] py-4' />

        <motion.div
          variants={slideInFromBottom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className='w-full px-4 text-center text-neutral-800'
        >
          <h2 className='Peristiwa text-3xl sm:text-4xl md:text-5xl text-red-500 mb-2'>Thư Mời</h2>
          <p className='text-xs sm:text-lg md:text-2xl'>THAM DỰ LỄ CƯỚI CỦA HOÀNG TRƯỜNG VÀ THUỲ TRANG</p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-4 mt-8 w-full">
          {/* Images */}
          <motion.div
            variants={slideInFromBottomtime(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="w-1/4 sm:w-1/4 md:w-1/5 max-w-[200px] lg:max-w-[250px]"
          >
            <img src="/img/RENA3519.JPG" alt="Image 1" className="w-full h-auto rounded-lg" />
          </motion.div>

          <motion.div
            variants={slideInFromBottomtime(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            className="w-1/3 sm:w-2/5 md:w-2/5 max-w-[250px] lg:max-w-[300px]"
          >
            <img src="/img/RENA3563.JPG" alt="Image 2" className="w-full h-auto rounded-lg" />
          </motion.div>

          <motion.div
            variants={slideInFromBottomtime(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className="w-1/4 sm:w-1/4 md:w-1/5 max-w-[200px] lg:max-w-[250px]"
          >
            <img src="/img/RENA3537.JPG" alt="Image 3" className="w-full h-auto rounded-lg" />
          </motion.div>
        </div>

        <div className='w-full h-full flex flex-col md:flex-row justify-center items-center mt-4'>
          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className='m-4 bg-red-100 max-w-[450px] md:min-w-[450px] rounded-md flex flex-col justify-center items-center p-4 gap-3'
          >
            <span className='text-red-600 font-semibold'>TIỆC CƯỚI NHÀ GÁI</span>
            <h3 className='text-red-600'>THỨ BA | 18H00</h3>
            <h2 className='text-red-600 font-semibold text-xl'>10 . 06 . 2025</h2>
            <span className='text-red-600 font-light'>(Tức ngày 15 tháng 5 năm âm lịch)</span>
            <span className='text-red-600'>TẠI GIA ĐÌNH NHÀ GÁI</span>
            <span className='text-red-600 text-center'>Bản Nà Pàn - Xã Nà Nghịu - Huyện Sông Mã</span>

            <button
              onClick={() => setFormVisible(true)}
              className='mt-4 px-6 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 focus:outline-none'
            >
              Xác nhận tham dự
            </button>
          </motion.div>

          <motion.div
            variants={slideInFromLeft(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            className='m-4 bg-red-100 max-w-[450px] md:min-w-[450px] rounded-md flex flex-col justify-center items-center p-4 gap-3'
          >
            <span className='text-red-600 font-semibold'>TIỆC CƯỚI NHÀ TRAI</span>
            <h3 className='text-red-600'>THỨ NĂM | 09H00</h3>
            <h2 className='text-red-600 font-semibold text-xl'>12 . 06 . 2025</h2>
            <span className='text-red-600 font-light'>(Tức ngày 17 tháng 05 năm Ất Tỵ)</span>
            <span className='text-red-600'>TẠI GIA ĐÌNH NHÀ TRAI</span>
            <span className='text-red-600 text-center'>Thôn Xuân Tiến - Xã Võ Lao - Văn Bàn - Lào Cai</span>

            <button
              onClick={() => setFormVisible(true)}
              className='mt-4 px-6 py-2 text-white font-semibold rounded-md bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 focus:outline-none'
            >
              Xác nhận tham dự
            </button>
          </motion.div>
        </div>
      </div>

      {/* Popup for form or "Thank you" message */}
      {isFormVisible && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={slideInFromBottom}
          className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
        >
          <form
            onSubmit={handleFormSubmit}
            className='bg-white p-6 rounded-lg shadow-md w-96'
          >
            <h2 className='text-2xl font-semibold mb-4 text-green-700 text-center Peristiwa'>Biểu mẫu của bạn</h2>
            {['Tên của bạn', 'Bạn là gì của cô dâu, chú rể?', 'Lời chúc đến đôi trai tài gái sắc'].map((label, idx) => (
              <div key={idx} className='mb-4'>
                <label
                  className='block text-gray-700 font-medium mb-2'
                  htmlFor={`field-${idx}`}
                >
                  {label}
                </label>
                <input
                  type={idx === 2 ? 'textarea' : 'text'}
                  id={`field-${idx}`}
                  name={['name', 'relationship', 'wish'][idx]}
                  value={formData[['name', 'relationship', 'wish'][idx]]}
                  onChange={handleFormChange}
                  className='w-full text-green-900 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
            ))}
            <div className='flex justify-end'>
              <button
                type='button'
                onClick={() => setFormVisible(false)}
                className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg mr-2'
              >
                Đóng
              </button>
              <button type='submit' className='px-8 py-2 bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 hover:from-yellow-600 hover:to-yellow-800 focus:outline-none text-white rounded-lg'>
                Gửi
              </button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Display the Thank You message and image after form submission */}
      {submissionStatus === 'success' && (
        <div className='flex flex-col items-center bg-white px-4 pb-[2rem]'
         style={{
            backgroundImage: `url('/img/back.svg')`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat',
          }}>
          <h2 className='text-2xl md:text-4xl mb-4 text-green-700 Peristiwa'>Chúng tôi rất hân hạnh được đón tiếp quý vị!</h2>
          <div
                  style={{
                    backgroundImage: `url('/img/anh.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                  className="w-full sm:w-3/4 md:w-[400px] lg:w-[500px] xl:w-[600px] h-48 sm:h-64 md:h-72 lg:h-80 xl:h-[300px] rounded-xl"
                />
        </div>
      )}
    </>
  );
};

export default Letter;
