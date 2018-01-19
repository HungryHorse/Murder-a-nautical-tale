

var roomArray = [
    {
        title:'Your room',
        text:'The detective first moves to investigate your room and see if there are any clues to your disappearance. You realise you could use your powers to guide him towards the first clue; the cake fork you used in defense, locked in a drawer in the corner of the room.',
        choices:[
            {
                text:'Push the chest of drawers',
                index:1,
                audio:'drawerShove',
                buttonText:'Push'
            },
            {
              text:'Possess the locking mechanism to unlock',
              index:2,
              audio:'lock',
              buttonText:'Possess'
            },
            {
              text:'Illuminate the chest of drawers',
              index:3,
              audio:'illuminate',
              buttonText:'Illuminate'
            }
        ]
    },
    {
        title:'Your room',
        text:'Your push moves the chest of drawers, catching the detective’s attention, but without further commotion he goes back to searching for clues.',
        choices:[
            {
                text:'You realise you didn’t successfully draw the detective\'s attention to the fork',
                index:7,
                buttonText:'Continue'
            },
        ]
    },
    {
        title:'Your room',
        text:'The lock makes a satisfying click as it unlocks.',
        choices:[
            {
                text:'Push the drawer open',
                index:4,
                audio:'drawerOpen',
                buttonText:'Push'
            },
            {
                text:'Illuminate the drawer',
                index:5,
                audio:'illuminate',
                buttonText:'Illuminate'
            }
        ]
    },
    {
        title:'Your room',
        text:'The detective notices the antique chest of drawers and reminisces about the time he spent round his grandma\'s house, realising he was distracting himself he returns to searching for clues.',
        choices:[
            {
                text:'You realise you didn’t successfully draw the detective\'s attention to the fork',
                index:7,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Your room',
        text:'The drawer slides open revealing its contents.',
        choices:[
            {
                text:'Illuminate the fork inside the drawer',
                index:6,
                audio:'illuminate',
                buttonText:'Illuminate'
            }
        ]
    },
    {
        title:'Your room',
        text:'He notices the drawer and the unusual engraving on the front, he wonders if this chest was made by Niles Tool Works in America.',
        choices:[
            {
                text:'You realise you didn’t successfully draw the detective\'s attention to the fork',
                index:7,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Your room',
        text:'He notices the fork inside the drawer and the blood stained onto it. This must be a clue, he thinks to himself, and stashes it into an evidence bag.',
        choices:[
            {
                text:'You successfully drew the detective to the clue',
                index:7,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You realise you can use your powers to guide the detective towards the relevant rooms. The next clue is hidden in the kitchen, the knife used to stab you. The knife is soaking in the water with the other cutlery from preparing the dinner for the guests. The water has become bloody from when the knife was dropped carelessly inside. ',
        choices:[
            {
                text:'Push the knife away from the others in the sink',
                index:8,
                audio:'knifeWater',
                buttonText:'Push'
            },
            {
                text:'Possess the plug to drain the sink',
                index:9,
                audio:'plug',
                buttonText:'Possess'
            },
            {
                text:'Illuminate the bloody water in the sink',
                index:10,
                audio:'illuminate',
                buttonText:'Illuminate'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You push the knife but it just sinks back to the bottom and gets lost amongst the rest of them.',
        choices:[
            {
                text:'You realise you failed to draw the detective’s attention to the murderer’s weapon',
                index:14,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You drain the sink and with it the blood that was tinting the water red.',
        choices:[
            {
                text:'You realise you failed to draw the detective’s attention to the murderer’s weapon',
                index:14,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You draw attention to the water inside the sink, the detective notices and decides to walk over and investigate the fact that there is an unusual amount of blood for a standard kitchen.',
        choices:[
            {
                text:'Push the knife away from the others in the sink',
                index:11,
                audio:'knifeWater',
                buttonText:'Push'
            },
            {
                text:'Possess the plug to drain the water from the sink',
                index:12,
                audio:'plug',
                buttonText:'Possess'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'You push the knife but it just sinks back to the bottom and gets lost amongst the rest of them.',
        choices:[
            {
                text:'You realise you failed to draw the detective’s attention to the murderer’s weapon',
                index:14,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'The sink drains slowly, revealing the cutlery inside. The knife remains hidden under all the other cutlery.',
        choices:[
            {
                text:'Push the knife away from all the others in the sink',
                index:13,
                audio:'knife',
                buttonText:'Push'
            }
        ]
    },
    {
        title:'Kitchen',
        text:'With the knife revealed, the detective notices the abnormally large knife and the red tinge to the blade. This may be evidence as well, he decides, placing it into an evidence bag.',
        choices:[
            {
                text:'You successfully drew the detective to the murder weapon',
                index:14,
                buttonText:'Continue'
            }
        ]
    },
    {
        title:'Engine Room',
        text:'You guide the detective to the engine rooms, where your body is stashed on a high shelf in a storage cupboard.',
        choices:[
            {
                text:'Push the door to the cupboard',
                index:15,
                audio:'door',
                buttonText:'Push',
            },
            {
                text:'Possess the shelving system to tip your body off and onto the floor of the cupboard',
                index:16,
                audio:'falling',
                buttonText:'Possess',
            },
            {
                text:'Illuminate the door to the cupboard',
                index:17,
                audio:'illuminate',
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'You open the door to the storage cupboard.',
        choices:[
            {
                text:'Possess the shelving system to tip your body off and onto the floor of the cupboard',
                index:18,
                audio:'falling',
                buttonText:'Possess',
            },
            {
                text:'Illuminate the doorway',
                index:19,
                audio:'illuminate',
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'Your body falls off of the shelves, landing heavily on the floor of the cupboard, blocking the doorway. The detective decides to investigate the commotion, but upon discovering he can’t open the door, he gives up and walks away to continue his investigation.',
        choices:[
            {
                text:'You realise you failed to draw the detective to your body.',
                index:22,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'You draw the detective’s attention to the cupboard, which sparks memories of the empty closet in his grandma’s house where he would make forts as a child.',
        choices:[
            {
                text:'You realise you failed to draw the detective to your body.',
                index:22,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'Your body falls from the shelves, landing heavily on the floor of the cupboard.',
        choices:[
            {
                text:'Illuminate your corpse',
                index:20,
                audio:'illuminate',
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'You draw the detective’s attention to the ajar cupboard. He walks over to investigate.',
        choices:[
            {
                text:'Possess the shelving system so it tips off your body',
                index:21,
                audio:'falling',
                buttonText:'Possess',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'He sees your corpse as he approaches the cupboard. Upon further inspection of your body, he discovers a deep stab wound in your stomach.',
        addText:' It matches the knife you lead him to find in the kitchen.',
        choices:[
            {
                text:'You successfully lead the detective to find your corpse.',
                index:22,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Engine Room',
        text:'Your body falls heavily onto the floor of the cupboard, landing at the detectives feet, in shock he jumps backwards slightly. Upon further inspection of your body, he discovers a deep stab wound in your stomach.',
        addText:' It matches the knife you lead him to find in the kitchen.',
        choices:[
            {
                text:'You successfully lead the detective to find your corpse.',
                index:22,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'You next lead the detective to the ballroom where one of your friends, who saw who went with you to your room, is dancing. She could lead the detective to your killer. However the ballroom is packed and it is impossible for the detective to see her.',
        choices:[
            {
                text:'Push her apart from her group',
                index:23,
                audio:'stumble',
                buttonText:'Push',
            },
            {
                text:'Possess the chandelier’s hook to make it fall',
                index:24,
                audio:'fallingChandelier',
                buttonText:'Possess',
            },
            {
                text:'Illuminate the mass of people dancing',
                index:25,
                audio:'illuminate',
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'She stumbles apart from her group, slightly shocked she regains her balance and walks back towards them. There are too many people in the way for the detective to even notice the commotion.',
        choices:[
            {
                text:'You realise you failed to get the detective to talk to your friend',
                index:36,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'You release the system on the chandelier and it falls to the floor. Everyone jumps back in surprise as it crashes down, the room in disarray, giving the detective a clear sight line to your friends group.',
        choices:[
            {
                text:'Push her apart from her group',
                index:26,
                audio:'stumble',
                buttonText:'Push',
            },
            {
              text:'Illuminate the group she is in',
              index:27,
              audio:'illuminate',
              buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'You draw his attention to the huge crowd of people in front of him. He thinks to himself, “Wow, this ballroom is absolutely packed, I didn’t even know there were this many people on the ship.”',
        choices:[
            {
                text:'You realise you have failed to get the detective to talk to your friend',
                index:36,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'She stumbles apart from her group, as she is about to trip over backwards the detective, without even really thinking, moves to catch her.',
        choices:[
            {
                text:'Illuminate her',
                index:28,
                audio:'illuminate',
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'He notices the extravagant group of people all looking concerned about the now destroyed chandelier in the centre of the room. The detective sighs with relief that no one was hurt in the commotion.',
        choices:[
            {
                text:'You realise you have failed to get the detective to talk to your friend',
                index:36,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Ballroom',
        text:'The detective grabs her just in time to stop her falling, and as she is regaining her balance he notices that he saw you and her together earlier in the night. He decided to ask her about it, she says she remembers you leaving with a man called Christopher Oxford. The detective decides it’s time for a little chat.',
        choices:[
            {
                text:'You successfully lead the detective to your friend',
                index:29,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Christopher\'s room',
        text:'The detective strides confidently up to the door of Christopher Oxford and knocks loudly. The man who recently stabbed you opens the door with a small smile on his face and a clean pressed white shirt. “How can I help you?” “I’m here looking for clues regarding the disappearance of one Mary Norman” “Oh really, I was with her just a few hours ago, is everything ok?” he enquires in a concerned voice. “I’m just here to investigate, is it ok if I come in?” “Of course.” The detective   strides past him into the room. You know that to incriminate him you need to reveal the wound you left on his side with the cake fork.',
        choices:[
            {
                text:'Push his toiletries off the shelf',
                index:30,
                audio:'toiletries',
                buttonText:'Push',
            },
            {
                text:'Possess the tap and make it explode',
                index:31,
                audio:'tapExplode',
                buttonText:'Possess',
            },
            {
                text:'Illuminate the side of Christopher\'s body',
                index:32,
                audio:'illuminate',
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Christopher\'s room',
        text:'The loud crash in the bathroom causes the detective to pause and investigate the bathroom instead. Christopher walks in and starts picking up the toiletries that are cluttered all over the floor.',
        choices:[
            {
                text:'Possess the tap and make it explode water over Christopher',
                index:33,
                audio:'tapExplode',
                buttonText:'Possess',
            },
            {
                text:'Illuminate the side of Christopher’s body',
                index:34,
                audio:'illuminate',
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Christopher\'s room',
        text:'The tap explodes and sprays water all over the bathroom. In surprise the two men walk over to the bathroom, and Christopher, making sure to not get his shirt wet, manages to stop the spraying water.',
        choices:[
            {
                text:'You realise you failed to get the detective to notice the wound',
                index:36,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Christopher\'s room',
        text:'The detective notices the clean press of the shirt and the fact that it must have been changed recently, but decides not to investigate further.',
        choices:[
            {
                text:'You realise you failed to get the detective to notice the wound',
                index:36,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Christopher\'s room',
        text:'The tap explodes and water drenches Christopher, making his shirt go transparent, revealing the wound you left earlier with the cake fork.',
        choices:[
            {
                text:'Illuminate the wound on Christopher’s side',
                index:35,
                audio:'illuminate',
                buttonText:'Illuminate',
            }
        ]
    },
    {
        title:'Christopher\'s room',
        text:'The detective notices the clean press of the shirt and the fact that it must have been changed recently, but decides not to investigate further.',
        choices:[
            {
                text:'You realise you failed to get the detective to notice the wound',
                index:36,
                buttonText:'Continue',
            }
        ]
    },
    {
        title:'Christopher\'s room',
        text:'The detective notices the new wound on Christopher’s side.',
        addText:'“That matches the fork that was hidden in Mary’s room!” The detective exclaims.',
        choices:[
            {
                text:'You successfully lead the detective to wound on his side',
                index:36,
                buttonText:'Continue',
            }
        ]
    },
    {
      title:'Ending',
      text:'Ending should appear here',
      choices:[
          {
              text:'',
              index:0,
              buttonText:'Replay',
          }
      ],
      ending1:'The detective still believes you’re missing and has no idea where you could have gone. As the cruise has come to an end and he has found no clues or leads, he is forced to abandon the investigation, leaving your murder unknown and unsolved. ',
      ending2:'As you’ve only led the detective to one of the clues, the bloody cake fork, he still believes you’re missing, although suspects that something more sinister may have happened to you. Nevertheless, with no other clues or leads to follow, he is forced to abandon the investigation, leaving your murder unsolved.',
      ending3:'As you’ve only led the detective to the bloodied knife in the kitchen, he still believes you’re missing, and with no further clues, there is nothing to suggest that there’s anything unusual afoot. With no other clues to look into, he is forced to abandon the investigation of your disappearance.',
      ending4:'You’ve only led the detective to your body. As a result, he knows that you’ve been murdered, but has no other clues to lead him to suspect anyone. As the cruise has come to an end and there are no other leads to follow, the detective if forced to abandon his investigation into your murder.',
      ending5:'You’ve only led the detective to the man you were last seen with, but as neither your body nor any other clues have been discovered, he doesn’t suspect anything sinister has occurred. As the cruise has come to an end and there are no other leads to follow, the detective is forced to abandon the investigation, leaving your murder unsolved and your killer to walk free.',
      ending6:'You have led the detective to both the bloody cake fork and knife. These are suspicious, and leads him to suspect that one or both of them has been used as a weapon, and are involved in your disappearance. However, with no suspects, other leads, or body, there is nothing else for him to look into, so he is forced to abandon the investigation, leaving your disappearance unsolved and allowing your killer to walk free.',
      ending7:'You have led the detective to the bloody cake fork and to your body. Therefore, he knows you have been murdered, and suspects that the cake fork had something to do with your murder, but has no other leads to point him to a suspect or murder weapon. With no other clues to follow, he is forced to abandon the investigation, leaving your murder unsolved and allowing your killer to walk free.',
      ending8:'You’ve led the detective to the cake fork and the person you were last seen with. He still doesn’t know that you have been murdered but he suspects something is afoot. However without proper evidence he can not arrest the man so he gets away scot free.',
      ending9:'You’ve led the detective to both your body and the knife that was used to kill you. He knows how you were murdered, but by whom… Without further evidence he must drop the case and allow it to go cold.',
      ending10:'You led the detective to the murder weapon and the last person you were seen with, however, without significant links between the two, the detective dismisses it without further questioning.',
      ending11:'You have led the detective to your dead stashed body and the last person you were seen with, which is enough evidence to hold him for questioning. After many hours of intensive interrogation he has to be let free on the basis that evidence was not conclusive.',
      ending12:'You’ve led the detective to the man you were last seen with and the wound you inflicted upon him. However, after a calm explanation from your killer, the detective decides to move his investigation back to trying to find you. After a few more questions regarding where you could of gone, he excuses himself to look again.',
      ending13:'You’ve led the detective to the bloody cake fork, the bloody knife, and your hidden body. From this he knows that you have been murdered, what weapon the killer likely used, and that you put up a fight in self defense, so the culprit likely has a wound. However, with no clues that point him towards a suspect, he has no idea who could have killed you, allowing your killer to walk free.',
      ending14:'You’ve led the detective to the cake fork you used in self defense, the man you were last seen with, and the wound you inflicted on your killer. He suspects that your killer played a sinister role in your disappearance, but as he hasn’t discovered your body or the murder weapon, he doesn’t realise that you are dead. He holds the man in custody for his connection to your disappearance, but with no further evidence to prove that he did anything to you, the detective is forced to allow him to walk free.',
      ending15:'You’ve led the detective to the cake fork, the knife, and the man you were last seen with. As he hasn’t discovered he body, he is unaware that you are dead, and without seeing the wound you inflicted on your attacker with the cake fork, he cannot clearly link him to your mysterious disappearance. Despite suspecting the man knows something about what happened to you, with insufficient ties between him and the other clues, the detective is forced to release him, allowing your murderer to walk free.',
      ending16:'You’ve led the detective to the knife, your body, and the last person you were seen with. He knows you have been murdered, has found the murder weapon, and suspects that the man you were last with played a role in your murder. The man is detained for suspicion of murder, but with no clues that directly tie him to your death, the detective has no choice but to let him walk free.',
      ending17:'You’ve led the detective to the knife, the person you were last with, and the wound you inflicted on him with the cake fork. Without finding the cake fork, the detective has no reason to suspect him being involved with your disappearance, so continues to investigate other leads.',
      ending18:'You’ve led the detective to your body, the person you were last seen with, and the wound inflicted upon them with your cake fork.The detective decides to arrest him on suspicion of your murder. However, after intensive questioning in custody, the detective decides that he wasn’t involved, so allows him to go free.',
      ending19:'You’ve lead the detective to the cake fork, the knife, your body, and the last person you were seen with. This is enough evidence to cause the detective to hold your killer for questioning. All the clues point towards him being the murderer and the detective decides that this is sufficient proof that he murdered you. You caught your murderer! You can now peacefully pass to the afterlife, with no more unfinished business keeping you in the mortal realm.',
      ending20:'You’ve led the detective to the cake fork, the knife, the last person you were seen with, and the wound you inflicted on your killer. However, as he hasn’t found your body, he is unaware that you are dead. The rest of the evidence is enough for him to suspect that the man caused your disappearance, and probably assaulted you, leading him to arrest him, albeit for a far less serious crime than the one with actually occurred. His punishment is far less severe than it should have been considering the circumstances. By the time the ship gets to dock the smell of your body attracts attention and all the pieces are put together. His sentence changes drastically from prison to the death penalty.',
      ending21:'You’ve led the detective to the cake fork, your body, the last person you were seen with, and the wound you inflicted on your killer with the cake fork. Despite not having the murder weapon, the detective concludes that this is sufficient evidence to prosecute the man for your murder. Once back on dry land, he is sentenced to the death penalty for his crime, and your soul is free to move onto the afterlife.',
      ending22:'You’ve led the detective to the knife, your body, the last person you were seen with, and the wound you inflicted on him. From this evidence, the detective realises that your killer is guilty, and is able to prosecute him for your murder. Once back on dry land, he is sentenced to the death penalty for his crime, and your soul is free to move onto the afterlife.',
      ending23:'You’ve successfully led the detective to all of the clues! He is able to prosecute your murderer, and once the boat docks again, your killer is sentenced to death for his crime. With no more unfinished business trapping you in the mortal realm, you are free to move on to the afterlife, leaving your soul at peace. NOICE',
    }

]
