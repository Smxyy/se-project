import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { MdOutlineLocalShipping } from "react-icons/md";
import { IoWarningOutline } from "react-icons/io5";

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      title: "Payment Success !!!",
      message:
        "We have received your payment toward ad Account : 9876543210. Your Ad is Running.",
      tags: ["INFO", "STATUS"],
      time: "Today, 09:39 PM",
      icon: <FaCheck className="text-green-400" />,
    },
    {
      id: 2,
      title: "Order Rejected !!!",
      message:
        "We're sorry to inform you that this order can not be proceed to another stage due to insufficient stocks!",
      tags: ["INFO", "STATUS"],
      time: "Today, 09:39 PM",
      icon: <RxCross2 className="text-red-500" />,
    },
    {
      id: 3,
      title: "Shipping !!!",
      message:
        "Order #111 is on shipping!!",
      tags: ["INFO", "STATUS"],
      time: "Today, 09:39 PM",
      icon: <MdOutlineLocalShipping className="text-tertiary" />,
    },
    {
      id: 4,
      title: "Alert",
      message:
        "There has been new Log in from your account at Melbourne. Mark it safe or change password.",
      tags: ["INFO"],
      time: "5 Jan 2019, 02:13 PM",
      icon: <IoWarningOutline className="text-red-500" />,
    },
  ];
  return (
    <div className="flex flex-col gap-8 w-full">
      <section className="bg-white rounded-md p-8 w-full">
        <p className="text-xl font-semibold">My Notifications</p>
        {/* <div className="flex flex-col gap-4 pt-10 lg:pt-16 w-full"> */}
          <div className="space-y-4 pt-12">
          {notifications.map((item) => (
            <div key={item.id} className="flex items-start gap-4 bg-white shadow-sm rounded-lg p-4 border">
              {/* Icon */}
              <div className="text-3xl">{item.icon}</div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-medium text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.message}</p>

                {/* Tags */}
                <div className="flex gap-2 mb-2">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 text-xs font-semibold rounded ${
                        tag === "INFO"
                          ? "bg-red-100 text-red-500"
                          : tag === "STATUS"
                          ? "bg-blue-100 text-blue-500"
                          : tag === "APPROVE"
                          ? "bg-green-100 text-green-600"
                          : tag === "REJECT"
                          ? "bg-red-100 text-red-600"
                          : tag === "ACTIVITY"
                          ? "bg-orange-100 text-orange-500"
                          : "text-blue-600"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Time */}
                <span className="text-xs text-gray-500">{item.time}</span>
              </div>
            </div>
          ))}
          </div>
        {/* </div> */}
      </section>
    </div>
  )
}
