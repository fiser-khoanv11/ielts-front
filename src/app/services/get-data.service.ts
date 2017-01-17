import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {

  constructor() { }

  getDataForEachType(): Object[] {
    let data = [{
      "section_number": "Summary - Select",
      "passage": {
        "image": "",
        "heading": "Summary Select 8-2-2",
        "paras": [{
          "content": "This book will provide a detailed examination of the Little Ice Age..."
        }]
      },
      "sub_sections": [{
        "first": 18,
        "last": 22,
        "type": "summary",
        "source": "select",
        "duplicatable": true,
        "heading": "Weather during the Little Ice Age",
        "paras": [
          "Documentation of past weather conditions is limited: our main sources of knowledge of conditions in the distant past are [] and []. ",
          "We can deduce that Little Ice Age was a time of [], rather than of consistent freezing. Within it there were some periods of very cold winters, others of [] and heavy rain, and yet others that saw [] with no rain at all."
        ],
        "words": [ "climatic shifts", "ice cores", "tree rings", "glaciers", "interactions", "weather observations", "heat waves", "storms", "written accounts" ]
      }]
    }, {
      "section_number": "Summary - Text",
      "passage": {
        "image": "",
        "heading": "Great Migrations 11-3-2",
        "paras": [{
          "content": "Animal migration, however it is defined, is far more than just the movement of animals. It can loosely be described as travel that takes place at regular intervals - often in an annual cycle - that may involve many members of a species, and is rewarded only after a long journey. It suggests inherited instinct. The biologist Hugh Dingle has identified five characteristics that apply, in varying degrees and combinations, to all migrations. They are prolonged movements that carry animals outside familiar habitats; they tend to be linear, not zigzaggy; they involve special behaviours concerning preparation (such as overfeeding) and arrival; they demand special allocations of energy. And one more: migrating animals maintain an intense attentiveness to the greater mission, which keeps them undistracted by temptations and undeterred by challenges that would turn other animals aside."
        }]
      },
      "sub_sections": [{
        "first": 23,
        "last": 26,
        "type": "summary",
        "source": "text",
        "word_limit": 1,
        "number_limit": 0,
        "heading": "The migration of pronghorns",
        "paras": [
          "Pronghorns rely on their eyesight and [] to population’s summer habitat is a national park, and their winter home is on the [] where they go to avoid the danger presented by the snow at that time of year.",
          "However, their route between these two areas contains three [].",
          "One problem is the construction of new homes in a narrow [] of land on the pronghorns’ route."
        ]
      }]
    }, {
      "section_number": "multi",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "A neuroscientist reveals how to think differently 9-2-1",
        "paras": [{
          "mark": "a",
          "content": "Hearing impairment or other auditory function deficit in young children can have a major impact on their development of speech and communication, resulting in a detrimental effect on their ability to learn at school. This is likely to have major consequences for the individual and the population as a whole. The New Zealand Ministry of Health has found from research carried out over two decades that 6-10% of children in that country are affected by hearing loss."
        }, {
          "mark": "b",
          "content": "A preliminary study in New Zealand has shown that classroom noise presents a major concern for teachers and pupils. Modern teaching practices, the organisation of desks in the classroom, poor classroom acoustics, and mechanical means of ventilation such as air-conditioning units all contribute to the number of children unable to comprehend the teacher's voice. Education researchers Nelson and Soli have also suggested that recent trends in learning often involve collaborative interaction of multiple minds and tools as much as individual possession of information. This all amounts to heightened activity and noise levels, which have the potential to be particularly serious for children experiencing auditory function deficit. Noise in classrooms can only exacerbate their difficulty in comprehending and processing verbal communication with other children and instructions from the teacher."
        }]
      },
      "sub_sections": [{
        "first": 11,
        "last": 12,
        "type": "multiple",
        "limit": 2,
        "des": "The list below includes factors contributing to classroom noise.",
        "choices": [
          "current teaching methods",
          "echoing corridors",
          "cooling systems",
          "large class sizes",
          "loud-voiced teachers",
          "playground games"
        ]
      }]
    }, {
      "section_number": "information",
      "passage": {
        "image": "",
        "heading": "Information theory - the big idea - 9-3-3",
        "sub_heading": "Information theory lies at the heart of everything - from DVD players and the genetic code of DNA to the physics of the univers at its most fundamental. It has been central to the development of the science of communication, which enables data to be sent electronically and has therefore had a major impact on our lives",
        "paras": [{
          "mark": "a",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "b",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "c",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "d",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "e",
          "content": "In April 2002 an event took...",
        }, {
          "mark": "f",
          "content": "In April 2002 an event took...",
        }]
      },
      "sub_sections": [{
        "first": 27,
        "last": 32,
        "type": "information",
        "number_of_paras": 6,
        "text": [
          "an explaination of the factors affecting the transmission of information",
          "an example of how unnecessary information can be omitted",
          "a reference to Shannon's attitude to fame",
          "details of a machine capable of interpreting incomplete information",
          "a detailed account of an incident involving information theory",
          "a reference to what Shannon initially intended to achieve in his research"
        ]
      }]
    }, {
      "section_number": "ending",
      "passage": {
        "image": "",
        "heading": "A neuroscientist reveals how to think differently 9-2-3",
        "paras": [{
          "content": "In the last decade a revolution has occurred in the way..."
        }]
      },
      "sub_sections": [{
        "first": 38,
        "last": 40,
        "type": "ending",
        "duplicatable": true,
        "sentences": [
          "Thinking like a successful iconoclast is demanding because it",
          "The concept of the social brain is useful to iconoclasts because it",
          "Iconoclasts are generally an asset because their way of thinking",
        ],
        "endings": [
          "requires both perceptual and social intelligence skills.",
          "focuses on how groups decide on an action.",
          "works in many fields, both artistic and scientific.",
          "leaves one open to criticism and rejection.",
          "involves understanding how organisations manage people.",
        ]
      }]
    }, {
      "section_number": "sentence",
      "passage": {
        "image": "",
        "heading": "Blah",
        "paras": [{
          "content": "Animal migration, however it is defined, is far more than just the movement of animals. It can loosely be described as travel that takes place at regular intervals - often in an annual cycle - that may involve many members of a species, and is rewarded only after a long journey. It suggests inherited instinct. The biologist Hugh Dingle has identified five characteristics that apply, in varying degrees and combinations, to all migrations. They are prolonged movements that carry animals outside familiar habitats; they tend to be linear, not zigzaggy; they involve special behaviours concerning preparation (such as overfeeding) and arrival; they demand special allocations of energy. And one more: migrating animals maintain an intense attentiveness to the greater mission, which keeps them undistracted by temptations and undeterred by challenges that would turn other animals aside."
        }]
      },
      "sub_sections": [{
        "first": 38,
        "last": 40,
        "type": "sentence",
        "word_limit": 2,
        "number_limit": 0,
        "sentences": [
          "Von Frisch discovered the difference between dance types by changing the position of the [].",
          "The dance outside the hive points in the direction of the [].",
          "The angle of the dance from the vertical shows the angle of the food from the []."
        ]
      }]
    }, {
      "section_number": "true-false",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "William Henry Perkin 9-1-1",
        "sub_heading": "The man who invented synthetic dyes",
        "paras": [{
          "content": "William Henry Perkin was born on March 12,1838, in London, England."
        }]
      },
      "sub_sections": [{
        "first": 1,
        "last": 7,
        "type": "true-false",
        "options": "tf",
        "text": [
          "Michael Faraday was the first person to recognise Perkin’s ability as a student of chemistry.", "Michael Faraday suggested Perkin should enrol in the Royal College of Chemistry.", "Perkin employed August Wilhelm Hofmann as his assistant.",
          "Perkin was still young when he made the discovery that made him rich and famous.",
          "The trees from which quinine is derived grow only in South America.",
          "Perkin hoped to manufacture a drug from a coal tar waste product.",
          "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur."
        ]
      }, {
        "first": 1,
        "last": 7,
        "type": "true-false",
        "options": "yn",
        "text": [
          "Michael Faraday was the first person to recognise Perkin’s ability as a student of chemistry.", "Michael Faraday suggested Perkin should enrol in the Royal College of Chemistry.", "Perkin employed August Wilhelm Hofmann as his assistant.",
          "Perkin was still young when he made the discovery that made him rich and famous.",
          "The trees from which quinine is derived grow only in South America.",
          "Perkin hoped to manufacture a drug from a coal tar waste product.",
          "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur."
        ]
      }]
    }, {
      "section_number": "Short-answer questions",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "William Henry Perkin 9-1-1",
        "sub_heading": "The man who invented synthetic dyes",
        "paras": [{
          "content": "William Henry Perkin was born on March 12,1838, in London, England."
        }]
      },
      "sub_sections": [{
        "first": 8,
        "last": 13,
        "type": "answer",
        "word_limit": 2,
        "number_limit": 0,
        "text": [
          "Before Perkin’s discovery, with what group in society was the colour purple associated?",
          "What potential did Perkin immediately understand that his new dye had?",
          "What was the name finally used to refer to the first colour Perkin invented?",
          "What was the name of the person Perkin consulted before setting up his own dye works?",
          "In what country did Perkin’s newly invented colour first become fashionable?",
          "According to the passage, which disease is now being targeted by researchers using synthetic dyes?",
        ]
      }]
    }, {
      "section_number": "heading",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "The little ice age 8-2-2",
        "sub_heading": "",
        "paras": [{
          "content": "The question of whether we are alone in the Universe has haunted humanity for centuries, but we may now stand poised on the brink of the answer to that question, as we search for radio signals from other intelligent civilisations. This search, often known by the acronym SETI (search for extra-terrestrial intelligence], is a difficult one. Although groups around the world have been searching intermittently for three decades, it is only now that we have reached the level of technology where we can make a determined attempt to search all nearby stars for any sign of life."
        }, {
          "mark": "a",
          "content": "The primary reason for the search is basic curiosity - the same curiosity about the natural world that drives all pure science. We want to know whether we are alone in the Universe. We want to know whether life evolves naturally if given the right conditions, or whether there is something very special about the Earth to have fostered the variety of life forms that we see around us on the planet. The simple detection of a radio signal will be sufficient to answer this most basic of all questions. In this sense, SETI is another cog in the machinery of pure science which is continually pushing out the horizon of our knowledge. However, there are other reasons for being interested in whether life exists elsewhere. For example, we have had civilisation on Earth for perhaps only a few thousand years, and the threats of nuclear war and pollution over the last few decades have told us that our survival may be tenuous. Will we last another two thousand years or will we wipe ourselves out? Since the lifetime of a planet like ours is several billion years, we can expect that, if other civilisations do survive in our galaxy, their ages will range from zero to several billion years. Thus any other civilisation that we hear from is likely to be far older, on average, than ourselves. The mere existence of such a civilisation will tell us that long-term survival is possible, and gives us some cause for optimism. It is even possible that the older civilisation may pass on the benefits of their experience in dealing with threats to survival such as nuclear war and global pollution, and other threats that we haven’t yet discovered."
        }, {
          "mark": "b",
          "content": "In discussing whether we are alone, most SETI scientists adopt two ground rules. First, UFQs (Unidentified Flying Objects) are generally ignored since most scientists don’t consider the evidence for them to be strong enough to bear serious consideration (although it is also important to keep an open mind in case any really convincing evidence emerges in the future). Second, we make a very conservative assumption that we are looking for a life form that is pretty well like us, since if it differs radically from us we may well not recognise it as a life form, quite apart from whether we are able to communicate with it. In other words, the life form we are looking for may well have two green heads and seven fingers, but it will nevertheless resemble us in that it should communicate with its fellows, be interested in the Universe, live on a planet orbiting a star like our Sun, and perhaps most restrictively, have a chemistry, like us, based on carbon and water."
        }, {
          "mark": "c",
          "content": "Even when we make these assumptions, our understanding of other life forms is still severely limited. We do not even know, for example, how many stars have planets, and we certainly do not know how likely it is that life will arise naturally, given the right conditions. However, when we look at the 100 billion stars in our galaxy (the Milky Way), and 100 billion galaxies in the observable Universe, it seems inconceivable that at least one of these planets does not have a life form on it; in fact, the best educated guess we can make, using the little that we do know about the conditions for carbon-based life, leads us to estimate that perhaps one in 100,000 stars might have a life-bearing planet orbiting it. That means that our nearest neighbours are perhaps 100 light years away, which is almost next door in astronomical terms."
        }]
      },
      "sub_sections": [{
        "first": 14,
        "last": 17,
        "type": "heading",
        "headings": [
          "Seeking the transmission of radio signals from planets",
          "Appropriate responses to signals from other civilisations",
          "Vast distances to Earth’s closest neighbours",
          "Assumptions underlying the search for extra-terrestrial intelligence",
          "Reasons for the search for extra-terrestrial intelligence",
          "Knowledge of extra-terrestrial life forms",
          "Likelihood of life on other planets",
          "People have always responded to climate change",
          "Enough food at last"
        ],
        "paras": [{
          "char": "a",
          "answer": 8
        }, {
          "char": "b",
        }, {
          "char": "c",
          "answer": 5
        }, {
          "char": "d",
        }, {
          "char": "e",
        }, {
          "char": "f",
        }]
      }]
    }, {
      "section_number": "single",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "A neuroscientist reveals how to think differently 9-2-3",
        "paras": [{
          "content": "In the last decade a revolution has occurred In the way that scientists think about the brain."
        }, {
          "content": "We now know that the decisions humans make can be traced to the firing patterns of neurons in specific parts of the brain. These discoveries have led to the field known as neuroeconomics, which studies the brain's secrets to success in an economic environment that demands innovation and being able to do things differently from competitors. A brain that can do this is an iconoclastic one. Briefly, an iconoclast is a person who does something that others say can't be done."
        }]
      },
      "sub_sections": [{
        "first": 27,
        "last": 31,
        "type": "single",
        "questions": [{
          "text": "Neuroeconomics is a field of study which seeks to",
          "choices": [
            "cause a change in how scientists understand brain chemistry.",
            "understand how good decisions are made in the brain.",
            "understand how the brain is linked to achievement in competitive fields.",
            "trace the specific firing patterns of neurons in different areas of the brain."
          ]
        }, {
          "text": "According to the writer, iconoclasts are distinctive because",
          "choices": [
            "they create unusual brain circuits.",
            "their brains function differently.",
            "their personalities are distinctive.",
            "they make decisions easily."
          ]
        }, {
          "text": "According to the writer, the brain works efficiently because",
          "choices": [
            "it uses the eyes quickly.",
            "it interprets data logically.",
            "it generates its own energy.",
            "it relies on previous events."
          ]
        }]
      }]
    }];

    return data;
  }

  getData() {
    let data = [{
      "section_number": 1,
      "passage": {
        "image": "",
        "heading": "The life and work of Marie Curie",
        "paras": [{
          "content": "Marie Curie is probably the most famous woman scientist who has ever lived. Born Maria Sklodowska in Poland in 1867, she is famous for her work on radioactivity, and was twice a winner of the Nobel Prize. With her husband, Pierre Curie, and Henri Becquerel, she was awarded the 1903 Nobel Prize for Physics, and was then sole winner of the 1911 Nobel Prize for Chemistry. She was the first woman to win a Nobel Prize."
        }, {
          "content": "From childhood, Marie was remarkable for her prodigious memory, and at the age of 16 won a gold medal on completion of her secondary education. Because her father lost his savings through bad investment, she then had to take work as a teacher. From her earnings she was able to finance her sister Bronia's medical studies in Paris, on the understanding that Bronia would, in turn, later help her to get an education."
        }, {
          "content": "In 1891 this promise was fulfilled and Marie went to Paris and began to study at the Sorbonne (the University of Paris). She often worked far into the night and lived on little more than bread and butter and tea. She came first in the examination in the physical sciences in 1893, and in 1894 was placed second in the examination in mathematical sciences. It was not until the spring of that year that she was introduced to Pierre Curie."
        }, {
          "content": "Their marriage in 1895 marked the start of a partnership that was soon to achieve results of world significance. Following Henri Becquerel's discovery in 1896 of a new phenomenon, which Marie later called 'radioactivity', Marie Curie decided to find out if the radioactivity discovered in uranium was to be found in other elements. She discovered that this was true for thorium."
        }, {
          "content": "Turning her attention to minerals, she found her interest drawn to pitchblende, a mineral whose radioactivity, superior to that of pure uranium, could be explained only by the presence in the ore of small quantities of an unknown substance of very high activity. Pierre Curie joined her in the work that she had undertaken to resolve this problem, and that led to the discovery of the new elements, polonium and radium. While Pierre Curie devoted himself chiefly to the physical study of the new radiations, Marie Curie struggled to obtain pure radium in the metallic state. This was achieved with the help of the chemist André-Louis Debierne, one of Pierre Curie's pupils. Based on the results of this research, Marie Curie received her Doctorate of Science, and in 1903 Marie and Pierre shared with Becquerel the Nobel Prize for Physics for the discovery of radioactivity."
        }, {
          "content": "The births of Marie's two daughters, Irène and Eve, in 1897 and 1904 failed to interrupt her scientific work. She was appointed lecturer in physics at the École Normale Supérieure for girls in Sèvres, France (1900), and introduced a method of teaching based on experimental demonstrations. In December 1904 she was appointed chief assistant in the laboratory directed by Pierre Curie."
        }, {
          "content": "The sudden death of her husband in 1906 was a bitter blow to Marie Curie, but was also a turning point in her career: henceforth she was to devote all her energy to completing alone the scientific work that they had undertaken. On May 13, 1906, she was appointed to the professorship that had been left vacant on her husband's death, becoming the first woman to teach at the Sorbonne. In 1911 she was awarded the Nobel Prize for Chemistry for the isolation of a pure form of radium."
        }, {
          "content": "During World War I, Marie Curie, with the help of her daughter Irène, devoted herself to the development of the use of X-radiography, including the mobile units which came to be known as ‘Little Curies', used for the treatment of wounded soldiers. In 1918 the Radium Institute, whose staff Irène had joined, began to operate in earnest, and became a centre for nuclear physics and chemistry. Marie Curie, now at the highest point of her fame and, from 1922, a member of the Academy of Medicine, researched the chemistry of radioactive substances and their medical applications."
        }, {
          "content": "In 1921, accompanied by her two daughters, Marie Curie made a triumphant journey to the United States to raise funds for research on radium. Women there presented her with a gram of radium for her campaign. Marie also gave lectures in Belgium, Brazil, Spain and Czechoslovakia and, in addition, had the satisfaction of seeing the development of the Curie Foundation in Paris, and the inauguration in 1932 in Warsaw of the Radium Institute, where her sister Bronia became director."
        }, {
          "content": "One of Marie Curie's outstanding achievements was to have understood the need to accumulate intense radioactive sources, not only to treat illness but also to maintain an abundant supply for research. The existence in Paris at the Radium Institute of a stock of 1.5 grams of radium made a decisive contribution to the success of the experiments undertaken in the years around 1930. This work prepared the way for the discovery of the neutron by Sir James Chadwick and, above all, for the discovery in 1934 by Irène and Frédéric Joliot-Curie of artificial radioactivity. A few months after this discovery, Marie Curie died as a result of leukaemia caused by exposure to radiation. She had often carried test tubes containing radioactive isotopes in her pocket, remarking on the pretty blue-green light they gave off."
        }, {
          "content": "Her contribution to physics had been immense, not only in her own work, the importance of which had been demonstrated by her two Nobel Prizes, but because of her influence on subsequent generations of nuclear physicists and chemists."
        }]
      },
      "sub_sections": [{
        "first": 1,
        "last": 6,
        "type": "true-false",
        "options": "tf",
        "text": [
          "Marie Curie’s husband was a joint winner of both Marie’s Nobel Prizes.",
          "Marie became interested in science when she was a child.",
          "Marie was able to attend the Sorbonne because of her sister’s financial contribution.",
          "Marie stopped doing research for several years when her children were born.",
          "Marie took over the teaching position her husband had held.",
          "Marie’s sister Bronia studied the medical uses of radioactivity."
        ]
      }, {
        "first": 7,
        "last": 13,
        "type": "summary",
        "word_limit": 1,
        "number_limit": 0,
        "heading": "Marie Curie’s research on radioactivity",
        "paras": [
          "When uranium was discovered to be radioactive, Marie Curie found that the element called [] had the same property.",
          "Marie and Pierre Curie’s research into the radioactivity of the mineral known as [] led to the discovery of two new elements.",
          "In 1911, Marie Curie received recognition for her work on the element [].",
          "Marie and Irene Curie developed X-radiography which was used as a medical technique for [].",
          "Marie Curie saw the importance of collecting radioactive material both for research and for cases of [].",
          "The radioactive material stocked in Paris contributed to the discoveries in the 1930s of the [] and of what was known as artificial radioactivity.",
          "During her research, Marie Curie was exposed to radiation and as a result she suffered from []."
        ]
      }]
    }, {
      "section_number": 2,
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "Young children's sense of identity",
        "paras": [{
          "mark": "a",
          "content": "A sense of self develops in young children by degrees. The process can usefully be thought of in terms of the gradual emergence of two somewhat separate features: the self as a subject, and the self as an object. William James introduced the distinction in 1892, and contemporaries of his, such as Charles Cooley, added to the developing debate. Ever since then psychologists have continued building on the theory."
        }, {
          "mark": "b",
          "content": "According to James, a child's first step on the road to self-understanding can be seen as the recognition that he or she exists. This is an aspect of the self that he labelled 'self-as-subject', and he gave it various elements. These included an awareness of one's own agency (i.e. one's power to act), and an awareness of one's distinctiveness from other people. These features gradually emerge as infants explore their world and interact with caregivers. Cooley (1902) suggested that a sense of the self-as-subject was primarily concerned with being able to exercise power. He proposed that the earliest examples of this are an infant's attempts to control physical objects, such as toys or his or her own limbs. This is followed by attempts to affect the behaviour of other people. For example, infants learn that when they cry or smile someone responds to them."
        }, {
          "mark": "c",
          "content": "Another powerful source of information for infants about the effects they can have on the world around them is provided when others mimic them. Many parents spend a lot of time, particularly in the early months, copying their infant's vocalizations and expressions. In addition, young children enjoy looking in mirrors, where the movements they can see are dependent upon their own movements. This is not to say that infants recognize the reflection as their own image (a later development). However, Lewis and Brooks-Gunn (1979) suggest that infants' developing understanding that the movements they see in the mirror are contingent on their own, leads to a growing awareness that they are distinct from other people. This is because they, and only they, can change the reflection in the mirror."
        }, {
          "mark": "d",
          "content": "This understanding that children gain of themselves as active agents continues to develop in their attempts to co-operate with others in play. Dunn (1988) points out that it is in such day-to-day relationships and interactions that the child's understanding of his- or herself emerges. Empirical investigations of the self-as-subject in young children are, however, rather scarce because of difficulties of communication: even if young infants can reflect on their experience, they certainly cannot express this aspect of the self directly."
        }, {
          "mark": "e",
          "content": "Once children have acquired a certain level of self-awareness, they begin to place themselves in a whole series of categories, which together play such an important part in defining them uniquely as 'themselves'. This second step in the development of a full sense of self is what James called the 'self-as-object'. This has been seen by many to be the aspect of the self which is most influenced by social elements, since it is made up of social roles (such as student, brother, colleague) and characteristics which derive their meaning from comparison or interaction with other people (such as trustworthiness, shyness, sporting ability)."
        }, {
          "mark": "f",
          "content": "Cooley and other researchers suggested a close connection between a person's own understanding of their identity and other people's understanding of it. Cooley believed that people build up their sense of identity from the reactions of others to them, and from the view they believe others have of them. He called the self-as-object the 'looking-glass self', since people come to see themselves as they are reflected in others. Mead (1934) went even further, and saw the self and the social world as inextricably bound together: 'The self is essentially a social structure, and it arises in social experience ... it is impossible to conceive of a self arising outside of social experience.'"
        }, {
          "mark": "g",
          "content": "Lewis and Brooks-Gunn argued that an important developmental milestone is reached when children become able to recognize themselves visually without the support of seeing contingent movement. This recognition occurs around their second birthday. In one experiment, Lewis and Brooks-Gunn (1979) dabbed some red powder on the noses of children who were playing in front of a mirror, and then observed how often they touched their noses. The psychologists reasoned that if the children knew what they usually looked like, they would be surprised by the unusual red mark and would start touching it. On the other hand, they found that children of 15 to 18 months are generally not able to recognize themselves unless other cues such as movement are present."
        }, {
          "mark": "h",
          "content": "Finally, perhaps the most graphic expressions of self-awareness in general can be seen in the displays of rage which are most common from 18 months to 3 years of age. In a longitudinal study of groups of three or four children, Bronson (1975) found that the intensity of the frustration and anger in their disagreements increased sharply between the ages of 1 and 2 years. Often, the children's disagreements involved a struggle over a toy that none of them had played with before or after the tug-of-war: the children seemed to be disputing ownership rather than wanting to play with it. Although it may be less marked in other societies, the link between the sense of 'self' and of 'ownership' is a notable feature of childhood in Western societies."
        }]
      },
      "sub_sections": [{
        "first": 14,
        "last": 19,
        "type": "information",
        "duplicatable": true,
        "number_of_paras": 8,
        "text": [
          "an account of the method used by researchers in a particular study",
          "the role of imitation in developing a sense of identity",
          "the age at which children can usually identify a static image of themselves",
          "a reason for the limitations of scientific research into ‘self-as-subject’",
          "reference to a possible link between culture and a particular form of behaviour",
          "examples of the wide range of features that contribute to the sense of 'self-as-object'"
        ]
      }]
    }];

    return data;
  }

}
