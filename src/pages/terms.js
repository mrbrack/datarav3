import { Section } from "@/components";
import { NextSeo } from "next-seo";
import Link from "next/link";

const LOAD_MORE_STEP = 4; // controls how many initial posts are shown

const Work = ({ initialPosts, total }) => {
  return (
    <>
      <NextSeo
        title="terms and conditions | datarav3: creative technology and generative art"
        description="These legal terms concern your access to and use of the services on datarav3.art."
        canonical="https://www.datarav3.art/terms"
        noindex={true}
      />
      <Section
        type="header-page"
        img="/home_back.png"
        alt="hundres of purple, green and blue dots styled in the shape of a wave"
      >
        terms and conditions
      </Section>
      <Section type="standard">
        <p>Last updated August 10, 2023</p>
        <h3>AGREEMENT TO MY LEGAL TERMS</h3>
        <p>
          I am Nigel Fryatt (&apos;datarav3&apos;, &apos;we&apos;,
          &apos;us&apos;, &apos;i&apos;, &apos;me&apos; or &apos;our&apos;), an
          individual residing in the United Kingdom.
        </p>
        <p>
          I operate the website http://www.datarav3.art (the &apos;Site&apos;),
          as well as any other related products and services that refer or link
          to these legal terms (the &apos;Legal Terms&apos;) (collectively, the
          &apos;Services&apos;).
        </p>
        <p>You can contact me by email at nigel@datarav3.art.</p>
        <p>
          These Legal Terms constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (&apos;you&apos;),
          and datarav3, concerning your access to and use of the Services. You
          agree that by accessing the Services, you have read, understood, and
          agreed to be bound by all of these Legal Terms.
        </p>
        <p>
          IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
          EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE
          USE IMMEDIATELY.
        </p>
        <p>
          Supplemental terms and conditions or documents that may be posted on
          the Services from time to time are hereby expressly incorporated
          herein by reference. I reserve the right, at my sole discretion, to
          make changes or modifications to these Legal Terms from time to time.
        </p>
        <p>
          I will alert you about any changes by updating the &apos;Last
          updated&apos; date of these Legal Terms, and you waive any right to
          receive specific notice of each such change. It is your responsibility
          to periodically review these Legal Terms to stay informed of updates.
          You will be subject to, and will be deemed to have been made aware of
          and to have accepted, the changes in any revised Legal Terms by your
          continued use of the Services after the date such revised Legal Terms
          are posted.
        </p>
        <p>
          The Services are intended for users who are at least 18 years old.
          Persons under the age of 18 are not permitted to use or register for
          the Services.
        </p>
        <p>
          I recommend that you print a copy of these Legal Terms for your
          records.
        </p>
        <br />
        <h3>TABLE OF CONTENTS</h3>
        <ul>
          <li>1. MY SERVICES</li>
          <li>2. INTELLECTUAL PROPERTY RIGHTS</li>
          <li>3. USER REPRESENTATIONS</li>
          <li>4. PROHIBITED ACTIVITIES</li>
          <li>5. USER GENERATED CONTRIBUTIONS</li>
          <li>6. CONTRIBUTION LICENCE</li>
          <li>7. THIRD-PARTY WEBSITES AND CONTENT</li>
          <li>8. SERVICES MANAGEMENT</li>
          <li>9. PRIVACY POLICY</li>
          <li>10. TERM AND TERMINATION</li>
          <li>11. MODIFICATIONS AND INTERRUPTIONS</li>
          <li>12. GOVERNING LAW</li>
          <li>13. DISPUTE RESOLUTION</li>
          <li>14. CORRECTIONS </li>
          <li>15. DISCLAIMER</li>
          <li>16. LIMITATIONS OF LIABILITY</li>
          <li>17. INDEMNIFICATION</li>
          <li>18. USER DATA</li>
          <li>19. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</li>
          <li>20. MISCELLANEOUS</li>
          <li>21. CONTACT ME</li>
        </ul>
        <h3>1. MY SERVICES</h3>
        <p>
          The information provided when using the Services is not intended for
          distribution to or use by any person or entity in any jurisdiction or
          country where such distribution or use would be contrary to law or
          regulation or which would subject me to any registration requirement
          within such jurisdiction or country. Accordingly, those persons who
          choose to access the Services from other locations do so on their own
          initiative and are solely responsible for compliance with local laws,
          if and to the extent local laws are applicable.
        </p>
        <h3>2. INTELLECTUAL PROPERTY RIGHTS</h3>
        <p>
          My intellectual property - I am the owner or the licensee of all
          intellectual property rights in my Services, including databases,
          audio, video, text, photographs, logos and graphics and artworks in
          the Services (collectively, the &apos;Content&apos;), as well as the
          trademarks, service marks, and logos contained therein (the
          &apos;Marks&apos;). Website Source code (excluding artworks),
          functionality (excluding artworks) and website designs (excluding
          artworks) has been released on an open source basis.
        </p>
        <p>
          My Content and Marks are protected by copyright and trademark laws
          (and various other intellectual property rights and unfair competition
          laws) and treaties in the United States and around the world. The
          Content and Marks are provided in or through the Services &apos;AS
          IS&apos; for your personal, non-commercial use or internal business
          purpose only.
        </p>
        <p>
          Your use of my Services. Subject to your compliance with these Legal
          Terms, including the &apos;PROHIBITED ACTIVITIES&apos; section below,
          I grant you a non-exclusive, non-transferable, revocable licence to:
          access the Services; and download or print a copy of any portion of
          the Content to which you have properly gained access. solely for your
          personal, non-commercial use or internal business purpose. Except as
          set out in this section or elsewhere in my Legal Terms, no part of the
          Services and no Content or Marks may be copied, reproduced,
          aggregated, republished, uploaded, posted, publicly displayed,
          encoded, translated, transmitted, distributed, sold, licensed, or
          otherwise exploited for any commercial purpose whatsoever, without my
          express prior written permission.
        </p>
        <p>
          If you wish to make any use of the Services, Content, or Marks other
          than as set out in this section or elsewhere in my Legal Terms, please
          address your request to: nigel@datarav3.art. If I ever grant you the
          permission to post, reproduce, or publicly display any part of my
          Services or Content, you must identify me as the owners or licensors
          of the Services, Content, or Marks and ensure that any copyright or
          proprietary notice appears or is visible on posting, reproducing, or
          displaying my Content.
        </p>
        <p>
          I reserve all rights not expressly granted to you in and to the
          Services, Content, and Marks. Any breach of these Intellectual
          Property Rights will constitute a material breach of my Legal Terms
          and your right to use my Services will terminate immediately.
        </p>
        <p>
          Your submissions. Please review this section and the &apos;PROHIBITED
          ACTIVITIES&apos; section carefully prior to using my Services to
          understand the (a) rights you give me and (b) obligations you have
          when you post or upload any content through the Services.
        </p>
        <p>
          Submissions: By directly sending me any question, comment, suggestion,
          idea, feedback, or other information about the Services
          (&apos;Submissions&apos;), you agree to assign to me all intellectual
          property rights in such Submission. You agree that I shall own this
          Submission and be entitled to its unrestricted use and dissemination
          for any lawful purpose, commercial or otherwise, without
          acknowledgment or compensation to you.
        </p>
        <p>
          You are responsible for what you post or upload: By sending me
          Submissions through any part of the Services you: confirm that you
          have read and agree with my &apos;PROHIBITED ACTIVITIES&apos; and will
          not post, send, publish, upload, or transmit through the Services any
          Submission that is illegal, harassing, hateful, harmful, defamatory,
          obscene, bullying, abusive, discriminatory, threatening to any person
          or group, sexually explicit, false, inaccurate, deceitful, or
          misleading; to the extent permissible by applicable law, waive any and
          all moral rights to any such Submission; warrant that any such
          Submission are original to you or that you have the necessary rights
          and licences to submit such Submissions and that you have full
          authority to grant me the above-mentioned rights in relation to your
          Submissions; and warrant and represent that your Submissions do not
          constitute confidential information. You are solely responsible for
          your Submissions and you expressly agree to reimburse me for any and
          all losses that I may suffer because of your breach of (a) this
          section, (b) any third party’s intellectual property rights, or (c)
          applicable law.
        </p>
        <h3>3. USER REPRESENTATIONS</h3>
        <p>
          By using the Services, you represent and warrant that: (1) you have
          the legal capacity and you agree to comply with these Legal Terms; (2)
          you are not a minor in the jurisdiction in which you reside; (3) you
          will not access the Services through automated or non-human means,
          whether through a bot, artificial intelligence, script or otherwise;
          (4) you will not use the Services for any illegal or unauthorised
          purpose; and (5) your use of the Services will not violate any
          applicable law or regulation.
        </p>
        <p>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, I have the right to suspend or terminate your
          account and refuse any and all current or future use of the Services
          (or any portion thereof).
        </p>
        <h3>4. PROHIBITED ACTIVITIES</h3>
        <p>
          You may not access or use the Services for any purpose other than that
          for which I make the Services available. The Services may not be used
          in connection with any commercial endeavours except those that are
          specifically endorsed or approved by me. As a user of the Services,
          you agree not to: Systematically retrieve data or other content from
          the Services to create or compile, directly or indirectly, a
          collection, compilation, database, or directory without written
          permission from me. Trick, defraud, or mislead me and other users,
          especially in any attempt to learn sensitive account information such
          as user passwords. Circumvent, disable, or otherwise interfere with
          security-related features of the Services, including features that
          prevent or restrict the use or copying of any Content or enforce
          limitations on the use of the Services and/or the Content contained
          therein. Disparage, tarnish, or otherwise harm, in my opinion, me
          and/or the Services. Use any information obtained from the Services in
          order to harass, abuse, or harm another person. Make improper use of
          my support services or submit false reports of abuse or misconduct.
          Use the Services in a manner inconsistent with any applicable laws or
          regulations. Engage in unauthorised framing of or linking to the
          Services. Upload or transmit (or attempt to upload or to transmit)
          viruses, Trojan horses, or other material, including excessive use of
          capital letters and spamming (continuous posting of repetitive text),
          that interferes with any party’s uninterrupted use and enjoyment of
          the Services or modifies, impairs, disrupts, alters, or interferes
          with the use, features, functions, operation, or maintenance of the
          Services. Engage in any automated use of the system, such as using
          scripts to send comments or messages, or using any data mining,
          robots, or similar data gathering and extraction tools. Delete the
          copyright or other proprietary rights notice from any Content. Attempt
          to impersonate another user or person or use the username of another
          user. Upload or transmit (or attempt to upload or to transmit) any
          material that acts as a passive or active information collection or
          transmission mechanism, including without limitation, clear graphics
          interchange formats (&apos;gifs&apos;), 1×1 pixels, web bugs, cookies,
          or other similar devices (sometimes referred to as &apos;spyware&apos;
          or &apos;passive collection mechanisms&apos; or &apos;pcms&apos;).
          Interfere with, disrupt, or create an undue burden on the Services or
          the networks or services connected to the Services. Harass, annoy,
          intimidate, or threaten any of my employees or agents engaged in
          providing any portion of the Services to you. Attempt to bypass any
          measures of the Services designed to prevent or restrict access to the
          Services, or any portion of the Services. Copy or adapt the
          Services&apos; software, including but not limited to Flash, PHP,
          HTML, JavaScript, or other code. Except as permitted by applicable
          law, decipher, decompile, disassemble, or reverse engineer any of the
          software comprising or in any way making up a part of the Services.
          Except as may be the result of standard search engine or Internet
          browser usage, use, launch, develop, or distribute any automated
          system, including without limitation, any spider, robot, cheat
          utility, scraper, or offline reader that accesses the Services, or use
          or launch any unauthorised script or other software. Use a buying
          agent or purchasing agent to make purchases on the Services. Make any
          unauthorised use of the Services, including collecting usernames
          and/or email addresses of users by electronic or other means for the
          purpose of sending unsolicited email, or creating user accounts by
          automated means or under false pretences. Use the Services as part of
          any effort to compete with me or otherwise use the Services and/or the
          Content for any revenue-generating endeavour or commercial enterprise.
          Sell or otherwise transfer your profile. Use the Services to advertise
          or offer to sell goods and services. Reproduction or distribution of
          artworks, intellectual property and imagery without prior consent
          Minting or sale of artworks without prior consent.
        </p>
        <h3>5. USER GENERATED CONTRIBUTIONS</h3>
        <p>
          The Services does not offer users to submit or post content. I may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to me or on the Services, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          &apos;Contributions&apos;). Contributions may be viewable by other
          users of the Services and through third-party websites. When you
          create or make available any Contributions, you thereby represent and
          warrant that: The creation, distribution, transmission, public
          display, or performance, and the accessing, downloading, or copying of
          your Contributions do not and will not infringe the proprietary
          rights, including but not limited to the copyright, patent, trademark,
          trade secret, or moral rights of any third party. You are the creator
          and owner of or have the necessary licences, rights, consents,
          releases, and permissions to use and to authorise me, the Services,
          and other users of the Services to use your Contributions in any
          manner contemplated by the Services and these Legal Terms. You have
          the written consent, release, and/or permission of each and every
          identifiable individual person in your Contributions to use the name
          or likeness of each and every such identifiable individual person to
          enable inclusion and use of your Contributions in any manner
          contemplated by the Services and these Legal Terms. Your Contributions
          are not false, inaccurate, or misleading. Your Contributions are not
          unsolicited or unauthorised advertising, promotional materials,
          pyramid schemes, chain letters, spam, mass mailings, or other forms of
          solicitation. Your Contributions are not obscene, lewd, lascivious,
          filthy, violent, harassing, libellous, slanderous, or otherwise
          objectionable (as determined by me). Your Contributions do not
          ridicule, mock, disparage, intimidate, or abuse anyone. Your
          Contributions are not used to harass or threaten (in the legal sense
          of those terms) any other person and to promote violence against a
          specific person or class of people. Your Contributions do not violate
          any applicable law, regulation, or rule. Your Contributions do not
          violate the privacy or publicity rights of any third party. Your
          Contributions do not violate any applicable law concerning child
          pornography, or otherwise intended to protect the health or well-being
          of minors. Your Contributions do not include any offensive comments
          that are connected to race, national origin, gender, sexual
          preference, or physical handicap. Your Contributions do not otherwise
          violate, or link to material that violates, any provision of these
          Legal Terms, or any applicable law or regulation. Any use of the
          Services in violation of the foregoing violates these Legal Terms and
          may result in, among other things, termination or suspension of your
          rights to use the Services.
        </p>
        <h3>6. CONTRIBUTION LICENCE</h3>
        <p>
          You and Services agree that I may access, store, process, and use any
          information and personal data that you provide and your choices
          (including settings). By submitting suggestions or other feedback
          regarding the Services, you agree that I can use and share such
          feedback for any purpose without compensation to you. I do not assert
          any ownership over your Contributions. You retain full ownership of
          all of your Contributions and any intellectual property rights or
          other proprietary rights associated with your Contributions. I am not
          liable for any statements or representations in your Contributions
          provided by you in any area on the Services. You are solely
          responsible for your Contributions to the Services and you expressly
          agree to exonerate me from any and all responsibility and to refrain
          from any legal action against me regarding your Contributions.
        </p>
        <h3>7. THIRD-PARTY WEBSITES AND CONTENT</h3>
        <p>
          The Services may contain (or you may be sent via the Site) links to
          other websites (&apos;Third-Party Websites&apos;) as well as articles,
          photographs, text, graphics, pictures, designs, music, sound, video,
          information, applications, software, and other content or items
          belonging to or originating from third parties (&apos;Third-Party
          Content&apos;). Such Third-Party Websites and Third-Party Content are
          not investigated, monitored, or checked for accuracy, appropriateness,
          or completeness by me, and I am not responsible for any Third-Party
          Websites accessed through the Services or any Third-Party Content
          posted on, available through, or installed from the Services,
          including the content, accuracy, offensiveness, opinions, reliability,
          privacy practices, or other policies of or contained in the
          Third-Party Websites or the Third-Party Content. Inclusion of, linking
          to, or permitting the use or installation of any Third-Party Websites
          or any Third-Party Content does not imply approval or endorsement
          thereof by me. If you decide to leave the Services and access the
          Third-Party Websites or to use or install any Third-Party Content, you
          do so at your own risk, and you should be aware these Legal Terms no
          longer govern.
        </p>
        <p>
          You should review the applicable terms and policies, including privacy
          and data gathering practices, of any website to which you navigate
          from the Services or relating to any applications you use or install
          from the Services. Any purchases you make through Third-Party Websites
          will be through other websites and from other companies, and I take no
          responsibility whatsoever in relation to such purchases which are
          exclusively between you and the applicable third party. You agree and
          acknowledge that I do not endorse the products or services offered on
          Third-Party Websites and you shall hold me blameless from any harm
          caused by your purchase of such products or services. Additionally,
          you shall hold me blameless from any losses sustained by you or harm
          caused to you relating to or resulting in any way from any Third-Party
          Content or any contact with Third-Party Websites.
        </p>
        <h3>8. SERVICES MANAGEMENT</h3>
        <p>
          I reserve the right, but not the obligation, to: (1) monitor the
          Services for violations of these Legal Terms; (2) take appropriate
          legal action against anyone who, in my sole discretion, violates the
          law or these Legal Terms, including without limitation, reporting such
          user to law enforcement authorities; (3) in my sole discretion and
          without limitation, refuse, restrict access to, limit the availability
          of, or disable (to the extent technologically feasible) any of your
          Contributions or any portion thereof; (4) in my sole discretion and
          without limitation, notice, or liability, to remove from the Services
          or otherwise disable all files and content that are excessive in size
          or are in any way burdensome to my systems; and (5) otherwise manage
          the Services in a manner designed to protect my rights and property
          and to facilitate the proper functioning of the Services.{" "}
        </p>
        <h3>9. PRIVACY POLICY</h3>
        <p>
          I care about data privacy and security. By using the Services, you
          agree to be bound by my Privacy Policy posted on the Services, which
          is incorporated into these Legal Terms. Please be advised the Services
          are hosted in the United States. If you access the Services from any
          other region of the world with laws or other requirements governing
          personal data collection, use, or disclosure that differ from
          applicable laws in the United States, then through your continued use
          of the Services, you are transferring your data to the United States,
          and you expressly consent to have your data transferred to and
          processed in the United States.
        </p>
        <h3>10. TERM AND TERMINATION</h3>
        <p>
          These Legal Terms shall remain in full force and effect while you use
          the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL
          TERMS, I RESERVE THE RIGHT TO, IN MY SOLE DISCRETION AND WITHOUT
          NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING
          BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO
          REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION,
          WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY
          APPLICABLE LAW OR REGULATION. i MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION
          THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN MY SOLE DISCRETION.
        </p>
        <p>
          If I terminate or suspend your account for any reason, you are
          prohibited from registering and creating a new account under your
          name, a fake or borrowed name, or the name of any third party, even if
          you may be acting on behalf of the third party. In addition to
          terminating or suspending your account, I reserve the right to take
          appropriate legal action, including without limitation pursuing civil,
          criminal, and injunctive redress.{" "}
        </p>
        <h3>11. MODIFICATIONS AND INTERRUPTIONS</h3>
        <p>
          I reserve the right to change, modify, or remove the contents of the
          Services at any time or for any reason at my sole discretion without
          notice. However, I have no obligation to update any information on my
          Services. I will not be liable to you or any third party for any
          modification, price change, suspension, or discontinuance of the
          Services. I cannot guarantee the Services will be available at all
          times. I may experience hardware, software, or other problems or need
          to perform maintenance related to the Services, resulting in
          interruptions, delays, or errors. I reserve the right to change,
          revise, update, suspend, discontinue, or otherwise modify the Services
          at any time or for any reason without notice to you. You agree that I
          have no liability whatsoever for any loss, damage, or inconvenience
          caused by your inability to access or use the Services during any
          downtime or discontinuance of the Services. Nothing in these Legal
          Terms will be construed to obligate me to maintain and support the
          Services or to supply any corrections, updates, or releases in
          connection therewith.
        </p>
        <h3>12. GOVERNING LAW</h3>
        <p>
          These Legal Terms are governed by and interpreted following the laws
          of the United Kingdom, and the use of the United Nations Convention of
          Contracts for the International Sales of Goods is expressly excluded.
          If your habitual residence is in the EU, and you are a consumer, you
          additionally possess the protection provided to you by obligatory
          provisions of the law in your country to residence. datarav3 and
          yourself both agree to submit to the non-exclusive jurisdiction of the
          courts of Bristol, which means that you may make a claim to defend
          your consumer protection rights in regards to these Legal Terms in the
          United Kingdom, or in the EU country in which you reside.
        </p>
        <h3>13. DISPUTE RESOLUTION</h3>
        <p>
          The European Commission provides an online dispute resolution
          platform, which you can access. If you would like to bring this
          subject to my attention, please contact me.
        </p>
        <h3>14. CORRECTIONS</h3>
        <p>
          There may be information on the Services that contains typographical
          errors, inaccuracies, or omissions, including descriptions, pricing,
          availability, and various other information. I reserve the right to
          correct any errors, inaccuracies, or omissions and to change or update
          the information on the Services at any time, without prior notice.
        </p>
        <h3>15. DISCLAIMER</h3>
        <p>
          THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
          AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE
          FULLEST EXTENT PERMITTED BY LAW, I DISCLAIM ALL WARRANTIES, EXPRESS OR
          IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF,
          INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
          NON-INFRINGEMENT. I MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE
          ACCURACY OR COMPLETENESS OF THE SERVICES&apos; CONTENT OR THE CONTENT
          OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND I
          WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS,
          MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL
          INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM
          YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORISED ACCESS TO
          OR USE OF MY SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
          AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
          CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS,
          VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR
          THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR
          OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF
          ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
          TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. I DO NOT
          WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT
          OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE
          SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE
          APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND I WILL
          NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY
          TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR
          SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY
          MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGEMENT AND
          EXERCISE CAUTION WHERE APPROPRIATE.
        </p>
        <h3>16. LIMITATIONS OF LIABILITY</h3>
        <p>
          IN NO EVENT WILL I OR MY EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY
          THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY,
          INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST
          REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
          SERVICES, EVEN IF I HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
          DAMAGES.
        </p>
        <h3>17. INDEMNIFICATION</h3>
        <p>
          You agree to defend, indemnify, and hold me harmless, including my
          subsidiaries, affiliates, and all of my respective officers, agents,
          partners, and employees, from and against any loss, damage, liability,
          claim, or demand, including reasonable attorneys’ fees and expenses,
          made by any third party due to or arising out of: (1) use of the
          Services; (2) breach of these Legal Terms; (3) any breach of your
          representations and warranties set forth in these Legal Terms; (4)
          your violation of the rights of a third party, including but not
          limited to intellectual property rights; or (5) any overt harmful act
          toward any other user of the Services with whom you connected via the
          Services. Notwithstanding the foregoing, I reserve the right, at your
          expense, to assume the exclusive defence and control of any matter for
          which you are required to indemnify me, and you agree to cooperate, at
          your expense, with my defence of such claims. I will use reasonable
          efforts to notify you of any such claim, action, or proceeding which
          is subject to this indemnification upon becoming aware of it.
        </p>
        <h3>18. USER DATA</h3>
        <p>
          I will maintain certain data that you transmit to the Services for the
          purpose of managing the performance of the Services, as well as data
          relating to your use of the Services. Although I perform regular
          routine backups of data, you are solely responsible for all data that
          you transmit or that relates to any activity you have undertaken using
          the Services. You agree that I shall have no liability to you for any
          loss or corruption of any such data, and you hereby waive any right of
          action against me arising from any such loss or corruption of such
          data.
        </p>
        <h3>19. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h3>
        <p>
          Visiting the Services, sending me emails, and completing online forms
          constitute electronic communications. You consent to receive
          electronic communications, and you agree that all agreements, notices,
          disclosures, and other communications I provide to you electronically,
          via email and on the Services, satisfy any legal requirement that such
          communication be in writing.
        </p>
        <p>
          YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS,
          ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES,
          POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY ME OR
          VIA THE SERVICES.
        </p>
        <p>
          You hereby waive any rights or requirements under any statutes,
          regulations, rules, ordinances, or other laws in any jurisdiction
          which require an original signature or delivery or retention of
          non-electronic records, or to payments or the granting of credits by
          any means other than electronic means.
        </p>
        <h3>20. MISCELLANEOUS</h3>
        <p>
          These Legal Terms and any policies or operating rules posted by me on
          the Services or in respect to the Services constitute the entire
          agreement and understanding between you and me. My failure to exercise
          or enforce any right or provision of these Legal Terms shall not
          operate as a waiver of such right or provision. These Legal Terms
          operate to the fullest extent permissible by law. I may assign any or
          all of my rights and obligations to others at any time. I shall not be
          responsible or liable for any loss, damage, delay, or failure to act
          caused by any cause beyond my reasonable control. If any provision or
          part of a provision of these Legal Terms is determined to be unlawful,
          void, or unenforceable, that provision or part of the provision is
          deemed severable from these Legal Terms and does not affect the
          validity and enforceability of any remaining provisions. There is no
          joint venture, partnership, employment or agency relationship created
          between you and me as a result of these Legal Terms or use of the
          Services. You agree that these Legal Terms will not be construed
          against me by virtue of having drafted them. You hereby waive any and
          all defences you may have based on the electronic form of these Legal
          Terms and the lack of signing by the parties hereto to execute these
          Legal Terms.
        </p>
        <h3>21. CONTACT ME</h3>
        <p>
          In order to resolve a complaint regarding the Services or to receive
          further information regarding use of the Services, please contact me
          at: nigel@datarav3.art.
        </p>
        <p>
          These terms of use were created using{" "}
          <Link
            href={
              "https://termly.io/products/terms-and-conditions-generator/?_gl=1*qc3fgh*_gcl_aw*R0NMLjE2OTE3MDMyNjMuQ2owS0NRandsZEttQmhDQ0FSSXNBUC0wcmZ4MGhTMTlMSWxDOVljaWZuQ1c0T2Q4OGhzZnVCYmZqeVBVdThNdVZrXzk0bmhyZWo2ZXNhUWFBaWZfRUFMd193Y0I.*_gcl_au*MTA2NjY5MjA1OC4xNjkxNzAzMjYw"
            }
            target="_blank"
          >
            Termly&apos;s Terms and Conditions Generator
          </Link>
          .
        </p>
      </Section>
    </>
  );
};

export default Work;
