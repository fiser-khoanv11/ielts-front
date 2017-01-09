import { Injectable } from '@angular/core';

@Injectable()
export class GetDataService {

  constructor() { }

  getDataForEachType(): Object[] {
    let data = [{
      "section_number": "Summary",
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
      "section_number": "Identifying information (true-false)",
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
          "According to the passage, which disease is now being targeted by researchers using synthetic dyes?"
        ]
      }]
    }, {
      "section_number": "Matching headings",
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "Is there anybody out there? 9-1-2",
        "sub_heading": "The Search for Extra-terrestrial Intelligence",
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
          "Likelihood of life on other planets"
        ],
        "paras": [{
          "char": "a",
          "answer": 5
        }, {
          "char": "b",
          "answer": "none"
        }, {
          "char": "c",
          "answer": "none"
        }, {
          "char": "d",
          "answer": "none"
        }, {
          "char": "e",
          "answer": "none"
        }]
      }]
    }, {
      "section_number": "Multiple choice - single",
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
    }, {
      "section_number": "Multiple choice - multi",
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
          {"char": "a", "text": "current teaching methods"},
          {"char": "b", "text": "echoing corridors"},
          {"char": "c", "text": "cooling systems"},
          {"char": "d", "text": "large class sizes"},
          {"char": "e", "text": "loud-voiced teachers"},
          {"char": "f", "text": "playground games"}
        ]
      }]
    }];

    return data;
  }

  getData() {
    let data = [{
      "section_number": 0,
      "passage": {
        "image": "",
        "heading": "Great Migrations",
        "paras": [{
          "content": "Animal migration, however it is defined, is far more than just the movement of animals. It can loosely be described as travel that takes place at regular intervals - often in an annual cycle - that may involve many members of a species, and is rewarded only after a long journey. It suggests inherited instinct. The biologist Hugh Dingle has identified five characteristics that apply, in varying degrees and combinations, to all migrations. They are prolonged movements that carry animals outside familiar habitats; they tend to be linear, not zigzaggy; they involve special behaviours concerning preparation (such as overfeeding) and arrival; they demand special allocations of energy. And one more: migrating animals maintain an intense attentiveness to the greater mission, which keeps them undistracted by temptations and undeterred by challenges that would turn other animals aside."
        }]
      },
      "sub_sections": [{
        "first": 23,
        "last": 26,
        "type": "summary",
        "word_limit": 1,
        "number_limit": 0,
        "heading": "The migration of pronghorns",
        "paras": [
          "Pronghorns rely on their eyesight and [] to population’s summer habitat is a national park, and their winter home is on the [] where they go to avoid the danger presented by the snow at that time of year.",
          "However, their route between these two areas contains three [].",
          "One problem is the construction of new homes in a narrow [] of land on the pronghorns’ route."
        ]
      }, {
        "first": 8,
        "last": 13,
        "type": "answer",
        "word_limit": 2,
        "number_limit": 0,
        "text": [
          "Before Perkin’s discovery, with what group in society was the colour purple associated?", "What potential did Perkin immediately understand that his new dye had?"
        ]
      }]
    }, {
      "section_number": 1,
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "William Henry Perkin",
        "sub_heading": "The man who invented synthetic dyes",
        "paras": [{
          "content": "William Henry Perkin was born on March 12,1838, in London, England."
        }, {
          "content": "As a boy, Perkin’s curiosity prompted early interests in the arts, sciences, photography, and engineering. But it was a chance stumbling upon a run-down, yet functional, laboratory in his late grandfather’s home that solidified the young man’s enthusiasm for chemistry."
        }, {
          "content": "As a student at the City of London School, Perkin became immersed in the study of chemistry. His talent and devotion to the subject were perceived by his teacher, Thomas Hall, who encouraged him to attend a series of lectures given by the eminent scientist Michael Faraday at the Royal Institution. Those speeches fired the young chemist’s enthusiasm further, and he later went on to attend the Royal College of Chemistry, which he succeeded in entering in 1853, at the age of 15."
        }, {
          "content": "At the time of Perkin’s enrolment, the Royal College of Chemistry was headed by the noted German chemist August Wilhelm Hofmann. Perkin’s scientific gifts soon caught Hofmann’s attention and, within two years, he became Hofmann’s youngest assistant. Not long after that, Perkin made the scientific breakthrough that would bring him both fame and fortune."
        }, {
          "content": "At the time, quinine was the only viable medical treatment for malaria. The drug is derived from the bark of the cinchona tree, native to South America, and by 1856 demand for the drug was surpassing the available supply. Thus, when Hofmann made some passing comments about the desirability of a synthetic substitute for quinine, it was unsurprising that his star pupil was moved to take up the challenge."
        }, {
          "content": "During his vacation in 1856, Perkin spent his time in the laboratory on the top floor of his family’s house. He was attempting to manufacture quinine from aniline, an inexpensive and readily available coal tar waste product. Despite his best efforts, however, he did not end up with quinine. Instead, he produced a mysterious dark sludge. Luckily, Perkin’s scientific training and nature prompted him to investigate the substance further. Incorporating potassium dichromate and alcohol into the aniline at various stages of the experimental process, he finally produced a deep purple solution. And, proving the truth of the famous scientist Louis Pasteur’s words ‘chance favours only the prepared mind’, Perkin saw the potential of his unexpected find."
        }, {
          "content": "Historically, textile dyes were made from such natural sources as plants and animal excretions. Some of these, such as the glandular mucus of snails, were difficult to obtain and outrageously expensive. Indeed, the purple colour extracted from a snail was once so costly that in society at the time only the rich could afford it. Further, natural dyes tended to be muddy in hue and fade quickly. It was against this backdrop that Perkin’s discovery was made."
        }, {
          "content": "Perkin quickly grasped that his purple solution could be used to colour fabric, thus making it the world’s first synthetic dye. Realising the importance of this breakthrough, he lost no time in patenting it. But perhaps the most fascinating of all Perkin’s reactions to his find was his nearly instant recognition that the new dye had commercial possibilities."
        }, {
          "content": "Perkin originally named his dye Tyrian Purple, but it later became commonly known as mauve (from the French for the plant used to make the colour violet). He asked advice of Scottish dye works owner Robert Pullar, who assured him that manufacturing the dye would be well worth it if the colour remained fast (i.e. would not fade) and the cost was relatively low. So, over the fierce objections of his mentor Hofmann, he left college to give birth to the modern chemical industry."
        }, {
          "content": "With the help of his father and brother, Perkin set up a factory not far from London. Utilising the cheap and plentiful coal tar that was an almost unlimited by product of London’s gas street lighting, the dye works began producing the world’s first synthetically dyed material in 1857. The company received a commercial boost from the Empress Eugenie of France, when she decided the new colour flattered her. Very soon, mauve was the necessary shade for all the fashionable ladies in that country."
        }, {
          "content": "Not to be outdone, England’s Queen Victoria also appeared in public wearing a mauve gown, thus making it all the rage in England as well. The dye was bold and fast, and the public clamoured for more. Perkin went back to the drawing board."
        }, {
          "content": "Although Perkin’s fame was achieved and fortune assured by his first discovery, the chemist continued his research. Among other dyes he developed and introduced were aniline red (1859) and aniline black (1863) and, in the late 1860s, Perkin’s green. It is important to note that Perkin’s synthetic dye discoveries had outcomes far beyond the merely decorative. The dyes also became vital to medical research in many ways. For instance, they were used to stain previously invisible microbes and bacteria, allowing researchers to identify such bacilli as tuberculosis, cholera, and anthrax. Artificial dyes continue to play a crucial role today. And, in what would have been particularly pleasing to Perkin, their current use is in the search for a vaccine against malaria."
        }]
      },
      "sub_sections": [{
        "first": 1,
        "last": 7,
        "type": "true-false",
        "text": ["Michael Faraday was the first person to recognise Perkin’s ability as a student of chemistry.", "Michael Faraday suggested Perkin should enrol in the Royal College of Chemistry.", "Perkin employed August Wilhelm Hofmann as his assistant.", "Perkin was still young when he made the discovery that made him rich and famous.", "The trees from which quinine is derived grow only in South America.", "Perkin hoped to manufacture a drug from a coal tar waste product.", "Perkin was inspired by the discoveries of the famous scientist Louis Pasteur."]
      }, {
        "first": 8,
        "last": 13,
        "type": "answer",
        "word_limit": 2,
        "number_limit": 0,
        "text": [
        "Before Perkin’s discovery, with what group in society was the colour purple associated?", "What potential did Perkin immediately understand that his new dye had?"]
      }]
    }, {
      "section_number": 2,
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "Is there anybody out there",
        "sub_heading": "The Search for Extra-terrestrial Intelligence",
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
        }, {
          "mark": "d",
          "content": "An alien civilisation could choose many different ways of sending information across the galaxy, but many of these either require too much energy, or else are severely attenuated while traversing the vast distances across the galaxy. It turns out that, for a given amount of transmitted power, radio waves in the frequency range 1000 to 3000 MHz travel the greatest distance, and so all searches to date have concentrated on looking for radio waves in this frequency range. So far there have been a number of searches by various groups around the world, including Australian searches using the radio telescope at Parkes, New South Wales. Until now there have not been any detections from the few hundred stars which have been searched. The scale of the searches has been increased dramatically since 1992, when the US Congress voted NASA $10 million per year for ten years to conduct a thorough search for extra-terrestrial life. Much of the money in this project is being spent on developing the special hardware needed to search many frequencies at once. The project has two parts. One part is a targeted search using the world’s largest radio telescopes, the American-operated telescope in Arecibo, Puerto Rico and the French telescope in Nancy in France. This part of the project is searching the nearest 1000 likely stars with high sensitivity for signals in the frequency range 1000 to 3000 MHz. The other part of the project is an undirected search which is monitoring all of space with a lower sensitivity, using the smaller antennas of NASA’s Deep Space Network."
        }, {
          "mark": "e",
          "content": "There is considerable debate over how we should react if we detect a signal from an alien civilisation. Everybody agrees that we should not reply immediately. Quite apart from the impracticality of sending a reply over such large distances at short notice, it raises a host of ethical questions that would have to be addressed by the global community before any reply could be sent. Would the human race face the culture shock if faced with a superior and much older civilisation? Luckily, there is no urgency about this. The stars being searched are hundreds of light years away, so it takes hundreds of years for their signal to reach us, and a further few hundred years for our reply to reach them. It’s not important, then, if there’s a delay of a few years, or decades, while the human race debates the question of whether to reply, and perhaps carefully drafts a reply."
        }]
      },
      "sub_sections": [{
        "first": 14,
        "last": 17,
        "type": "heading",
        "headings": ["Seeking the transmission of radio signals from planets", "Appropriate responses to signals from other civilisations", "Vast distances to Earth’s closest neighbours", "Assumptions underlying the search for extra-terrestrial intelligence", "Reasons for the search for extra-terrestrial intelligence", "Knowledge of extra-terrestrial life forms", "Likelihood of life on other planets"],
        "paras": [{
          "char": "a",
          "answer": 5
        }, {
          "char": "b",
          "answer": "none"
        }, {
          "char": "c",
          "answer": "none"
        }, {
          "char": "d",
          "answer": "none"
        }, {
          "char": "e",
          "answer": "none"
        }]
      }, {
        "first": 18,
        "last": 20,
        "type": "answer",
        "word_limit": 3,
        "number_limit": 1,
        "text": ["What is the life expectancy of Earth?", "What kind of signals from other intelligent civilisations are SETI scientists searching for?", "How many stars are the world’s most powerful radio telescopes searching?"]
      }, {
        "first": 21,
        "last": 26,
        "type": "true-false",
        "text": ["Alien civilisations may be able to help the human race to overcome serious problems.", "SETI scientists are trying to find a life form that resembles humans in many ways.", "The Americans and Australians have co-operated on joint research projects.", "So far SETI scientists have picked up radio signals from several stars.", "The NASA project attracted criticism from some members of Congress.", "  If a signal from outer space is received, it will be important to respond promptly."]
      }]
    }, {
      "section_number": 3,
      "passage": {
        "image": "http://abc.com/img.jpg",
        "heading": "The history of the tortoise",
        "paras": [{
          "mark": "a",
          "content": "If you go back far enough, everything lived in the sea. At various points in evolutionary history, enterprising individuals within many different animal groups moved out onto the land, sometimes even to the most parched deserts, taking their own private seawater with them in blood and cellular fluids. In addition to the reptiles, birds, mammals and insects which we see all around us, other groups that have succeeded out of water include scorpions, snails, crustaceans such as woodlice and land crabs, millipedes and centipedes, spiders and various worms. And we mustn’t forget the plants, without whose prior invasion of the land none of the other migrations could have happened."
        }, {
          "mark": "b",
          "content": "A preliminary study in New Zealand has shown that classroom noise presents a major concern for teachers and pupils. Modern teaching practices, the organisation of desks in the classroom, poor classroom acoustics, and mechanical means of ventilation such as air-conditioning units all contribute to the number of children unable to comprehend the teacher's voice. Education researchers Nelson and Soli have also suggested that recent trends in learning often involve collaborative interaction of multiple minds and tools as much as individual possession of information. This all amounts to heightened activity and noise levels, which have the potential to be particularly serious for children experiencing auditory function deficit. Noise in classrooms can only exacerbate their difficulty in comprehending and processing verbal communication with other children and instructions from the teacher."
        }]
      },
      "sub_sections": [{
        "first": 13,
        "last": 13,
        "type": "single",
        "questions": [{
          "text": "What is the writer's overall purpose in writing this article?",
          "choices": [
            "to compare different methods of dealing with auditory problems",
            "to provide solutions for overly noisy learning environments",
            "to increase awareness of the situation of children with auditory problems",
            "to promote New Zealand as a model for other countries to follow"
          ]
        }]
      }, {
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
      }, {
        "first": 27,
        "last": 28,
        "type": "multiple",
        "limit": 2,
        "des": "The list below includes factors contributing to classroom noise.",
        "choices": [
          {"char": "a", "text": "current teaching methods"},
          {"char": "b", "text": "echoing corridors"},
          {"char": "c", "text": "cooling systems"},
          {"char": "d", "text": "large class sizes"},
          {"char": "e", "text": "loud-voiced teachers"},
          {"char": "f", "text": "playground games"}
        ]
      }, {
        "first": 31,
        "last": 33,
        "type": "true-false",
        "text": ["Turtles were among the first group of animals to migrate back to the sea.", "It is always difficult to determine where an animal lived when its fossilised remains are incomplete.", "The habitat of ichthyosaurs can be determined by the appearance of their fossilised remains."]
      }]
    }];

    return data;
  }

}
