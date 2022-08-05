export default function animation(){
    const tl = gsap.timeline({ defaults: { duration: 2 } })
    const t2 = gsap.timeline({ defaults: { duration: 2 } })
    
    setInterval(() => {
        tl.fromTo('#left-bracket', { x: '0px', ease: 'bounce' }, { x: '10px', duration: 1 })
        tl.fromTo('#left-bracket', { x: '10px', ease: 'bounce' }, { x: '0px', duration: 1 })
    
        t2.fromTo('#right-bracket', { x: '0px', ease: 'bounce' }, { x: '-10px', duration: 1 })
        t2.fromTo('#right-bracket', { x: '-10px', ease: 'bounce' }, { x: '0px', duration: 1 })
    
    }, 1000);    
    

}

