import Accordion from "../components/accordion/Accordion"
import AccordionData from "../components/accordion/AccordionData"
import {Callout} from '../components/Ads'

export const Contact = () => {
  return (
    <div className="page">
      <h1>Need help with anything? </h1>
      <p>Our Customer Support Team are available during Monday to Fridays between 9:00 and 18:00.</p>

      <p>You're always welcome to shoot us an email, we'll contact you the following day.</p>

        <p>WhatsApp with us</p>
        <p>Give us a call: 020394802</p>
        <p>Email Us: info@goldenshoe.com </p>

      <Callout title={"Newsletter"} text={"Get News, Offers and Discounts."} button={"Subscribe"}></Callout>

    </div>
  )
}

export const FAQs = () => {
  return (
    <div className="page">
      <h1>Frequently Asked Questions</h1>
    
    <div className="accordion">
    {AccordionData.map(({ title, content }) => (
      <Accordion title={title} content={content} />
    ))}
    </div>
    
    <Callout title={"Newsletter"} text={"Get News, Offers and Discounts."} button={"Subscribe"}>
        <input type="text" placeholder="email"></input>
      </Callout>
    </div>

  )
}

export const SizeChart = ()  => {
  return (
    <div className="page">
    <h1>Size Guide</h1>
    <div>
      <div class="sizeChart">Women's Shoe Sizes</div>
        <table>
          <tr>
            <th>UK Size</th>
            <th>EU Size</th>
            <th>Foot Length</th>
          </tr>
          <tr>
            <td>2</td>
            <td>35</td>
            <td>212</td>
          </tr>
          <tr>
            <td>3</td>
            <td>36</td>
            <td>221</td>
          </tr>
          <tr>
            <td>4</td>
            <td>37</td>
            <td>229</td>
          </tr>
          <tr>
            <td>5</td>
            <td>38</td>
            <td>237</td>
          </tr>
          <tr>
            <td>6</td>
            <td>39</td>
            <td>246</td>
          </tr>
          <tr>
            <td>7</td>
            <td>40</td>
            <td>254</td>
          </tr>
          <tr>
            <td>8</td>
            <td>41</td>
            <td>263</td>
          </tr>
          <tr>
            <td>9</td>
            <td>42</td>
            <td>272</td>
          </tr>
        </table>
      <div class="sizeChart">Men's Shoe Sizes</div>
        <table>
          <tr>
            <th>UK Size</th>
            <th>EU Size</th>
            <th>Foot Length</th>
          </tr>
          <tr>
            <td>5</td>
            <td>38</td>
            <td>237</td>
          </tr>
          <tr>
            <td>6</td>
            <td>39</td>
            <td>246</td>
          </tr>
          <tr>
            <td>7</td>
            <td>40</td>
            <td>254</td>
          </tr>
          <tr>
            <td>8</td>
            <td>41</td>
            <td>263</td>
          </tr>
          <tr>
            <td>9</td>
            <td>42</td>
            <td>272</td>
          </tr>
          <tr>
            <td>10</td>
            <td>43</td>
            <td>280</td>
          </tr>
          <tr>
            <td>11</td>
            <td>44</td>
            <td>289</td>
          </tr>
          <tr>
            <td>12</td>
            <td>45</td>
            <td>298</td>
          </tr>
          <tr>
            <td>13</td>
            <td>46</td>
            <td>306</td>
          </tr>
          <tr>
            <td>14</td>
            <td>47</td>
            <td>314</td>
          </tr>
          <tr>
            <td>15</td>
            <td>48</td>
            <td>323</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export const FindAStore = ()  => {
  return (
    <div className="page">
    <h1>Our Stores</h1>
    </div>
  )
}