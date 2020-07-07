import React from "react"
import "../styles/css/font-awesome.css"
import Swal from "sweetalert2"

const copy = require("copy-text-to-clipboard")

// const gps = document.getElementsByClassName("gps")[0]

// console.log(gps)

// gps.addEventListener("click", () => {
//   copy("51.164849, 17.043460")
//   console.log(gps)
// })

const copyGPS = () => {
  copy("51.164849, 17.043460")
  Swal.fire({
    text: "Skopiowano: 51.164849, 17.043460",
    width: "auto",
    padding: "2rem",
    background: "rgba(200, 200, 200, 0.9)",
    showConfirmButton: false,
    timer: 1300,
    showClass: {
      popup: "swal2-show",
      backdrop: "swal2-backdrop-show",
    },
  })
}

const GPS = () => (
  <button
    type="button"
    className="gps"
    onClick={() => copyGPS()}
    onKeyDown={() => copyGPS()}
    title="Kliknij żeby skopiować"
  >
    GPS: 51.164849, 17.043460
    <i className="fa fa-files-o" aria-hidden="true"></i>
  </button>
)

export default GPS
